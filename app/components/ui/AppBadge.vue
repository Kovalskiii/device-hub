<script setup lang="ts">
    import type { DeviceBadge } from '#shared/types'

    defineProps<{ tone?: DeviceBadge | 'neutral' }>()
</script>

<template>
    <span class="app-badge" :class="`app-badge--${tone ?? 'neutral'}`">
        <slot />
    </span>
</template>

<style src="./AppBadge.css"></style>
