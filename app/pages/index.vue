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

    const activeFilters = null

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
        </div>

        <SiteFooter />
    </main>
</template>
