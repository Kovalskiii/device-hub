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
                lazy: false,
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

    onMounted(() => {
        document.addEventListener('click', onDocumentClick)
        document.addEventListener('keydown', onDocumentKeydown)
    })

    onBeforeUnmount(() => {
        document.removeEventListener('click', onDocumentClick)
        document.removeEventListener('keydown', onDocumentKeydown)
    })

    watch(isSidebarVisible, (isVisible) => {
        if (isVisible) closeFiltersModal()
    })
</script>

<template>
    <main class="catalog-page">
        <SiteHeader show-search />
        <div class="page-content">
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
            </div>
        </div>

        <SiteFooter />
    </main>
</template>
