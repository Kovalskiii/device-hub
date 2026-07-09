<script setup lang="ts">
    import {
        DEVICE_AVAILABILITY_LABELS,
        DEVICE_BADGE_LABELS,
        DEVICE_CATEGORY_LABELS,
        DEVICE_PRICE_LIMITS,
        DEVICE_SORT_LABELS,
        DEVICE_SORT_VALUES,
    } from '#shared/constants'
    import type {
        DeviceAvailability,
        DeviceBadge,
        DeviceCategory,
        DeviceSort,
        DevicesApiResponse,
    } from '#shared/types'

    type ActiveFilter = {
        key: 'q' | 'categories' | 'brands' | 'badges' | 'availability' | 'price'
        label: string
        value?: string
    }

    const {
        filters,
        searchInput,
        pushQuery,
        toggleArrayFilter,
        removeActiveFilter,
    } = useDeviceFilters()
    const { width } = useWindowSize()
    const isFiltersModalOpen = ref(false)
    const isSortDropdownOpen = ref(false)
    const isCatalogTopStuck = ref(false)
    const catalogTop = ref<HTMLElement | null>(null)
    const sortDropdown = ref<HTMLElement | null>(null)

    const apiQuery = computed(() => ({ ...filters.value }))
    const asyncKey = computed(() => `devices:${JSON.stringify(apiQuery.value)}`)

    const { data, pending, error, refresh } =
        await useAsyncData<DevicesApiResponse>(
            asyncKey,
            () =>
                $fetch<DevicesApiResponse>('/api/devices', {
                    query: apiQuery.value,
                }),
            {
                server: true,
                lazy: true,
                watch: [apiQuery],
                dedupe: 'cancel',
                default: () => ({
                    items: [],
                    total: 0,
                    page: 1,
                    limit: 8,
                    pages: 1,
                    facets: {
                        brands: {},
                        categories: {},
                        badges: {},
                        availability: { in: 0, out: 0 },
                    },
                }),
            }
        )

    const activeFilters = computed<ActiveFilter[]>(() => {
        const list: ActiveFilter[] = []

        if (filters.value.q)
            list.push({ key: 'q', label: `Search: ${filters.value.q}` })

        filters.value.categories.forEach((value) =>
            list.push({
                key: 'categories',
                value,
                label: `Category: ${DEVICE_CATEGORY_LABELS[value as DeviceCategory]}`,
            })
        )

        filters.value.brands.forEach((value) =>
            list.push({ key: 'brands', value, label: `Brand: ${value}` })
        )

        filters.value.badges.forEach((value) =>
            list.push({
                key: 'badges',
                value,
                label: `Badge: ${DEVICE_BADGE_LABELS[value as DeviceBadge]}`,
            })
        )

        filters.value.availability.forEach((value) =>
            list.push({
                key: 'availability',
                value,
                label: DEVICE_AVAILABILITY_LABELS[value as DeviceAvailability],
            })
        )

        if (
            filters.value.minPrice > DEVICE_PRICE_LIMITS.defaultMin ||
            filters.value.maxPrice < DEVICE_PRICE_LIMITS.defaultMax
        ) {
            list.push({
                key: 'price',
                label: `${filters.value.minPrice}–${filters.value.maxPrice} MDL`,
            })
        }

        return list
    })

    const activeFilterCount = computed(() => activeFilters.value.length)
    const isSidebarVisible = computed(() => width.value >= 768)
    const selectedSortLabel = computed(
        () => DEVICE_SORT_LABELS[filters.value.sort]
    )

    const toggleFiltersModal = () => {
        isFiltersModalOpen.value = !isFiltersModalOpen.value
    }
    const closeFiltersModal = () => {
        isFiltersModalOpen.value = false
    }
    const toggleSortDropdown = () => {
        isSortDropdownOpen.value = !isSortDropdownOpen.value
    }
    const closeSortDropdown = () => {
        isSortDropdownOpen.value = false
    }
    const selectSort = (sort: DeviceSort) => {
        closeSortDropdown()
        pushQuery({ sort })
    }
    const onDocumentClick = (event: MouseEvent) => {
        if (!sortDropdown.value?.contains(event.target as Node)) {
            closeSortDropdown()
        }
    }
    const onDocumentKeydown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') closeSortDropdown()
    }
    const updateCatalogTopStuck = () => {
        if (!catalogTop.value || isSidebarVisible.value) {
            isCatalogTopStuck.value = false
            return
        }

        isCatalogTopStuck.value =
            catalogTop.value.getBoundingClientRect().top <= 64
    }

    onMounted(() => {
        document.addEventListener('click', onDocumentClick)
        document.addEventListener('keydown', onDocumentKeydown)
        window.addEventListener('scroll', updateCatalogTopStuck, {
            passive: true,
        })
        window.addEventListener('resize', updateCatalogTopStuck)
        updateCatalogTopStuck()
    })

    onBeforeUnmount(() => {
        document.removeEventListener('click', onDocumentClick)
        document.removeEventListener('keydown', onDocumentKeydown)
        window.removeEventListener('scroll', updateCatalogTopStuck)
        window.removeEventListener('resize', updateCatalogTopStuck)
    })

    watch(isSidebarVisible, (isVisible) => {
        if (isVisible) closeFiltersModal()
        updateCatalogTopStuck()
    })
</script>

<template>
    <main class="catalog-page">
        <SiteHeader v-model:search="searchInput" show-search />

        <div class="page-content">
            <CatalogHero />

            <FiltersModal
                :is-modal-open="isFiltersModalOpen"
                :facets="data.facets"
                :filters="filters"
                :active-filters="activeFilters"
                @close="closeFiltersModal"
                @toggle="toggleArrayFilter"
                @price="
                    (min: number, max: number) =>
                        pushQuery({ minPrice: min, maxPrice: max })
                "
                @remove-active="removeActiveFilter"
            />

            <p v-if="error" class="catalog-page__error">
                API error: {{ error.message }}
                <AppButton variant="ghost" @click="refresh()">
                    Try again
                </AppButton>
            </p>

            <div class="catalog-layout">
                <FilterSidebar
                    :facets="data.facets"
                    :filters="filters"
                    :active-filters="activeFilters"
                    @toggle="toggleArrayFilter"
                    @price="
                        (min: number, max: number) =>
                            pushQuery({ minPrice: min, maxPrice: max })
                    "
                    @remove-active="removeActiveFilter"
                />

                <section class="catalog-content" aria-live="polite">
                    <div
                        ref="catalogTop"
                        class="catalog-content__top"
                        :class="{
                            'catalog-content__top--stuck': isCatalogTopStuck,
                        }"
                    >
                        <button
                            class="catalog-content__filters toolbar__filters"
                            type="button"
                            aria-controls="filters-modal"
                            :aria-expanded="isFiltersModalOpen"
                            @click="toggleFiltersModal"
                        >
                            <Icon
                                class="catalog-content__filters-icon"
                                name="lucide:sliders-horizontal"
                                size="17"
                            />
                            <span class="catalog-content__filters-label">
                                Filters
                            </span>
                            <b v-if="activeFilterCount">
                                {{ activeFilterCount }}
                            </b>
                        </button>
                        <b>{{ data.total }} devices found</b>
                        <div
                            ref="sortDropdown"
                            class="catalog-content__sort"
                            :class="{
                                'catalog-content__sort--open':
                                    isSortDropdownOpen,
                            }"
                        >
                            <button
                                class="catalog-content__sort-toggle"
                                type="button"
                                aria-label="Sort devices"
                                :aria-expanded="isSortDropdownOpen"
                                aria-haspopup="listbox"
                                @click.stop="toggleSortDropdown"
                            >
                                <Icon name="lucide:arrow-up-down" size="16" />
                                <span>{{ selectedSortLabel }}</span>
                                <Icon
                                    :name="
                                        isSortDropdownOpen
                                            ? 'lucide:chevron-up'
                                            : 'lucide:chevron-down'
                                    "
                                    size="16"
                                />
                            </button>

                            <div
                                v-if="isSortDropdownOpen"
                                class="catalog-content__sort-menu"
                                role="listbox"
                                aria-label="Sort devices"
                            >
                                <button
                                    v-for="sort in DEVICE_SORT_VALUES"
                                    :key="sort"
                                    class="catalog-content__sort-option"
                                    :class="{
                                        'catalog-content__sort-option--active':
                                            filters.sort === sort,
                                    }"
                                    type="button"
                                    role="option"
                                    :aria-selected="filters.sort === sort"
                                    @click="selectSort(sort)"
                                >
                                    <Icon
                                        v-if="filters.sort === sort"
                                        name="lucide:check"
                                        size="15"
                                    />
                                    <span v-else />
                                    {{ DEVICE_SORT_LABELS[sort] }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="device-grid">
                        <DeviceSkeleton
                            v-if="pending"
                            v-for="n in data.limit"
                            :key="n"
                        />
                        <EmptyState v-else-if="!data.items.length" />
                        <DeviceCard
                            v-else
                            v-for="device in data.items"
                            :key="device.id"
                            :device="device"
                        />
                    </div>

                    <div
                        v-if="data.pages > 1"
                        class="pagination"
                        aria-label="Pagination"
                    >
                        <AppButton
                            variant="ghost"
                            :disabled="data.page <= 1"
                            @click="pushQuery({ page: data.page - 1 })"
                        >
                            <Icon name="lucide:chevron-left" size="16" />
                            Prev
                        </AppButton>
                        <AppButton
                            v-for="page in data.pages"
                            :key="page"
                            :variant="page === data.page ? 'primary' : 'ghost'"
                            @click="pushQuery({ page })"
                        >
                            {{ page }}
                        </AppButton>
                        <AppButton
                            variant="ghost"
                            :disabled="data.page >= data.pages"
                            @click="pushQuery({ page: data.page + 1 })"
                        >
                            Next
                            <Icon name="lucide:chevron-right" size="16" />
                        </AppButton>
                    </div>
                </section>
            </div>
        </div>

        <SiteFooter />
    </main>
</template>
