<script setup lang="ts">
    import type { DevicesQuery, DevicesResponse } from '#shared/types'

    type ArrayFilterKey = 'categories' | 'brands' | 'badges' | 'availability'
    type ActiveFilterKey =
        'q' | 'categories' | 'brands' | 'badges' | 'availability' | 'price'
    type ActiveFilter = {
        key: ActiveFilterKey
        label: string
        value?: string
    }

    defineProps<{
        isModalOpen: boolean
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
        activeFilters: ActiveFilter[]
    }>()

    const emit = defineEmits<{
        close: []
        toggle: [key: ArrayFilterKey, value: string]
        price: [min: number, max: number]
        removeActive: [key: ActiveFilterKey, value?: string]
    }>()
</script>

<template>
    <Modal
        :is-modal-open="isModalOpen"
        position="left-top"
        transition-direction="left"
        @close="emit('close')"
    >
        <div
            id="filters-modal"
            class="filters-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="filters-modal-title"
            @keydown.esc="emit('close')"
        >
            <div class="filters-modal__header">
                <div>
                    <span>Device Hub</span>
                    <h2 id="filters-modal-title">Filters</h2>
                </div>
                <button
                    class="filters-modal__close"
                    type="button"
                    aria-label="Close filters"
                    @click="emit('close')"
                >
                    <Icon name="lucide:x" size="19" />
                </button>
            </div>

            <FilterSidebar
                :facets="facets"
                :filters="filters"
                :active-filters="activeFilters"
                @toggle="(key, value) => emit('toggle', key, value)"
                @price="(min, max) => emit('price', min, max)"
                @remove-active="
                    (key, value) => emit('removeActive', key, value)
                "
            />

            <div class="filters-modal__actions">
                <NuxtLink to="/" @click="emit('close')">
                    <Icon name="lucide:rotate-ccw" size="15" />
                    Clear
                </NuxtLink>
            </div>
        </div>
    </Modal>
</template>

<style src="./FiltersModal.css"></style>
