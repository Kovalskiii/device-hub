<script setup lang="ts">
    defineProps<{
        price: number
        oldPrice?: number | null
        size?: 'sm' | 'lg'
    }>()

    const formatPrice = (value: number) =>
        new Intl.NumberFormat('ru-RU').format(value)
</script>

<template>
    <div class="app-price" :class="`app-price--${size ?? 'sm'}`">
        <strong>
            {{ formatPrice(price) }}
            <span>MDL</span>
        </strong>
        <del v-if="oldPrice && oldPrice > price">
            {{ formatPrice(oldPrice) }} MDL
        </del>
    </div>
</template>

<style src="./AppPrice.css"></style>
