<script setup lang="ts">
    import {
        DEVICE_AVAILABILITY_LABELS,
        DEVICE_AVAILABILITY_VALUES,
        DEVICE_BADGE_LABELS,
        DEVICE_BADGE_VALUES,
        DEVICE_BRAND_VALUES,
        DEVICE_CATEGORY_LABELS,
        DEVICE_CATEGORY_VALUES,
        DEVICE_PRICE_LIMITS,
    } from '#shared/constants'
    import type {
        DeviceAvailability,
        DeviceBadge,
        DeviceBrand,
        DeviceCategory,
        DevicesQuery,
        DevicesResponse,
    } from '#shared/types'

    type ArrayFilterKey = 'categories' | 'brands' | 'badges' | 'availability'
    type ActiveFilterKey =
        'q' | 'categories' | 'brands' | 'badges' | 'availability' | 'price'
    type ActiveFilter = {
        key: ActiveFilterKey
        label: string
        value?: string
    }
    type FilterSection =
        'active' | 'categories' | 'brand' | 'price' | 'availability' | 'badges'

    const props = defineProps<{
        facets: DevicesResponse['facets']
        filters: Pick<
            DevicesQuery,
            | 'categories'
            | 'brands'
            | 'badges'
            | 'availability'
            | 'minPrice'
            | 'maxPrice'
        >
        activeFilters?: ActiveFilter[]
    }>()

    const emit = defineEmits<{
        toggle: [key: ArrayFilterKey, value: string]
        price: [min: number, max: number]
        removeActive: [key: ActiveFilterKey, value?: string]
    }>()

    const min = ref(props.filters.minPrice || DEVICE_PRICE_LIMITS.defaultMin)
    const max = ref(props.filters.maxPrice || DEVICE_PRICE_LIMITS.defaultMax)
    const activeFilters = computed(() => props.activeFilters ?? [])
    const openSections = ref<FilterSection[]>(['active', 'price'])
    let priceTimer: ReturnType<typeof setTimeout> | undefined

    watch(
        () => props.filters,
        (filters) => {
            min.value = filters.minPrice
            max.value = filters.maxPrice
        },
        { deep: true }
    )

    const categoryCount = (category: DeviceCategory) =>
        props.facets.categories[category] ?? 0
    const brandCount = (brand: DeviceBrand) => props.facets.brands[brand] ?? 0
    const badgeCount = (badge: DeviceBadge) => props.facets.badges[badge] ?? 0
    const availabilityCount = (value: DeviceAvailability) =>
        props.facets.availability[value] ?? 0
    const priceRangeStyle = computed(() => {
        const minPercent =
            ((min.value - DEVICE_PRICE_LIMITS.min) /
                (DEVICE_PRICE_LIMITS.max - DEVICE_PRICE_LIMITS.min)) *
            100
        const maxPercent =
            ((max.value - DEVICE_PRICE_LIMITS.min) /
                (DEVICE_PRICE_LIMITS.max - DEVICE_PRICE_LIMITS.min)) *
            100
        const clampedMin = Math.max(0, Math.min(100, minPercent))
        const clampedMax = Math.max(0, Math.min(100, maxPercent))

        return {
            '--price-min': `${clampedMin}%`,
            '--price-max': `${clampedMax}%`,
        }
    })

    const isOpen = (section: FilterSection) =>
        openSections.value.includes(section)
    const toggleSection = (section: FilterSection) => {
        openSections.value = isOpen(section)
            ? openSections.value.filter((item) => item !== section)
            : [...openSections.value, section]
    }

    const applyPrice = () => {
        if (priceTimer) clearTimeout(priceTimer)

        priceTimer = setTimeout(() => {
            emit('price', min.value, max.value)
        }, 250)
    }

    const setMinPrice = (value: number) => {
        min.value = Math.max(
            DEVICE_PRICE_LIMITS.min,
            Math.min(value, max.value - DEVICE_PRICE_LIMITS.step)
        )
        applyPrice()
    }

    const setMaxPrice = (value: number) => {
        max.value = Math.min(
            DEVICE_PRICE_LIMITS.max,
            Math.max(value, min.value + DEVICE_PRICE_LIMITS.step)
        )
        applyPrice()
    }
</script>

<template>
    <div class="filter-sidebar">
        <section
            class="filter-sidebar__active"
            :class="{ 'filter-sidebar__section--open': isOpen('active') }"
        >
            <h3>
                <button
                    type="button"
                    :aria-expanded="isOpen('active')"
                    @click="toggleSection('active')"
                >
                    <span class="filter-sidebar__title">
                        <Icon name="lucide:list-filter" size="15" />
                        Active filters
                    </span>
                    <Icon
                        :name="
                            isOpen('active')
                                ? 'lucide:chevron-up'
                                : 'lucide:chevron-down'
                        "
                        size="16"
                    />
                </button>
            </h3>
            <div v-if="isOpen('active')" class="filter-sidebar__content">
                <div class="active-filters__panel">
                    <template v-if="activeFilters.length">
                        <button
                            v-for="filter in activeFilters"
                            :key="`${filter.key}-${filter.value ?? filter.label}`"
                            type="button"
                            @click="
                                emit('removeActive', filter.key, filter.value)
                            "
                        >
                            {{ filter.label }}
                            <Icon name="lucide:x" size="14" />
                        </button>
                        <NuxtLink to="/">
                            <Icon name="lucide:rotate-ccw" size="14" />
                            Clear all
                        </NuxtLink>
                    </template>
                    <p v-else>No active filters</p>
                </div>
            </div>
        </section>

        <section
            :class="{ 'filter-sidebar__section--open': isOpen('categories') }"
        >
            <h3>
                <button
                    type="button"
                    :aria-expanded="isOpen('categories')"
                    @click="toggleSection('categories')"
                >
                    <span class="filter-sidebar__title">
                        <Icon name="lucide:layout-grid" size="15" />
                        Categories
                    </span>
                    <Icon
                        :name="
                            isOpen('categories')
                                ? 'lucide:chevron-up'
                                : 'lucide:chevron-down'
                        "
                        size="16"
                    />
                </button>
            </h3>
            <div v-if="isOpen('categories')" class="filter-sidebar__content">
                <AppCheckbox
                    v-for="category in DEVICE_CATEGORY_VALUES"
                    :key="category"
                    :label="DEVICE_CATEGORY_LABELS[category]"
                    :count="categoryCount(category)"
                    :model-value="filters.categories.includes(category)"
                    @update:model-value="emit('toggle', 'categories', category)"
                />
            </div>
        </section>

        <section :class="{ 'filter-sidebar__section--open': isOpen('brand') }">
            <h3>
                <button
                    type="button"
                    :aria-expanded="isOpen('brand')"
                    @click="toggleSection('brand')"
                >
                    <span class="filter-sidebar__title">
                        <Icon name="lucide:badge-check" size="15" />
                        Brand
                    </span>
                    <Icon
                        :name="
                            isOpen('brand')
                                ? 'lucide:chevron-up'
                                : 'lucide:chevron-down'
                        "
                        size="16"
                    />
                </button>
            </h3>
            <div v-if="isOpen('brand')" class="filter-sidebar__content">
                <AppCheckbox
                    v-for="brand in DEVICE_BRAND_VALUES"
                    :key="brand"
                    :label="brand"
                    :count="brandCount(brand)"
                    :model-value="filters.brands.includes(brand)"
                    @update:model-value="emit('toggle', 'brands', brand)"
                />
            </div>
        </section>

        <section :class="{ 'filter-sidebar__section--open': isOpen('price') }">
            <h3>
                <button
                    type="button"
                    :aria-expanded="isOpen('price')"
                    @click="toggleSection('price')"
                >
                    <span class="filter-sidebar__title">
                        <Icon name="lucide:badge-dollar-sign" size="15" />
                        Price
                    </span>
                    <Icon
                        :name="
                            isOpen('price')
                                ? 'lucide:chevron-up'
                                : 'lucide:chevron-down'
                        "
                        size="16"
                    />
                </button>
            </h3>
            <div v-if="isOpen('price')" class="filter-sidebar__content">
                <div class="filter-sidebar__price">
                    <input
                        v-model.number="min"
                        type="number"
                        :min="DEVICE_PRICE_LIMITS.min"
                        :max="DEVICE_PRICE_LIMITS.max"
                        :step="DEVICE_PRICE_LIMITS.step"
                        aria-label="Minimum price"
                        @input="
                            setMinPrice(
                                Number(
                                    ($event.target as HTMLInputElement).value
                                )
                            )
                        "
                    />
                    <span aria-hidden="true"></span>
                    <input
                        v-model.number="max"
                        type="number"
                        :min="DEVICE_PRICE_LIMITS.min"
                        :max="DEVICE_PRICE_LIMITS.max"
                        :step="DEVICE_PRICE_LIMITS.step"
                        aria-label="Maximum price"
                        @input="
                            setMaxPrice(
                                Number(
                                    ($event.target as HTMLInputElement).value
                                )
                            )
                        "
                    />
                </div>
                <div class="filter-sidebar__range" :style="priceRangeStyle">
                    <input
                        :value="min"
                        type="range"
                        :min="DEVICE_PRICE_LIMITS.min"
                        :max="DEVICE_PRICE_LIMITS.max"
                        :step="DEVICE_PRICE_LIMITS.step"
                        aria-label="Minimum price slider"
                        @input="
                            setMinPrice(
                                Number(
                                    ($event.target as HTMLInputElement).value
                                )
                            )
                        "
                    />
                    <input
                        :value="max"
                        type="range"
                        :min="DEVICE_PRICE_LIMITS.min"
                        :max="DEVICE_PRICE_LIMITS.max"
                        :step="DEVICE_PRICE_LIMITS.step"
                        aria-label="Maximum price slider"
                        @input="
                            setMaxPrice(
                                Number(
                                    ($event.target as HTMLInputElement).value
                                )
                            )
                        "
                    />
                </div>
            </div>
        </section>

        <section
            :class="{ 'filter-sidebar__section--open': isOpen('availability') }"
        >
            <h3>
                <button
                    type="button"
                    :aria-expanded="isOpen('availability')"
                    @click="toggleSection('availability')"
                >
                    <span class="filter-sidebar__title">
                        <Icon name="lucide:package-check" size="15" />
                        Availability
                    </span>
                    <Icon
                        :name="
                            isOpen('availability')
                                ? 'lucide:chevron-up'
                                : 'lucide:chevron-down'
                        "
                        size="16"
                    />
                </button>
            </h3>
            <div v-if="isOpen('availability')" class="filter-sidebar__content">
                <AppCheckbox
                    v-for="value in DEVICE_AVAILABILITY_VALUES"
                    :key="value"
                    :label="DEVICE_AVAILABILITY_LABELS[value]"
                    :count="availabilityCount(value)"
                    :model-value="filters.availability.includes(value)"
                    @update:model-value="emit('toggle', 'availability', value)"
                />
            </div>
        </section>

        <section :class="{ 'filter-sidebar__section--open': isOpen('badges') }">
            <h3>
                <button
                    type="button"
                    :aria-expanded="isOpen('badges')"
                    @click="toggleSection('badges')"
                >
                    <span class="filter-sidebar__title">
                        <Icon name="lucide:sparkles" size="15" />
                        Badges
                    </span>
                    <Icon
                        :name="
                            isOpen('badges')
                                ? 'lucide:chevron-up'
                                : 'lucide:chevron-down'
                        "
                        size="16"
                    />
                </button>
            </h3>
            <div v-if="isOpen('badges')" class="filter-sidebar__content">
                <AppCheckbox
                    v-for="badge in DEVICE_BADGE_VALUES"
                    :key="badge"
                    :label="DEVICE_BADGE_LABELS[badge]"
                    :count="badgeCount(badge)"
                    :model-value="filters.badges.includes(badge)"
                    @update:model-value="emit('toggle', 'badges', badge)"
                />
            </div>
        </section>
    </div>
</template>

<style src="./FilterSidebar.css"></style>
