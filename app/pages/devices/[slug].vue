<script setup lang="ts">
    import {
        DEVICE_BADGE_LABELS,
        DEVICE_CATEGORY_LABELS,
    } from '#shared/constants'
    import type { Device } from '#shared/types'

    const route = useRoute()
    const slug = computed(() => String(route.params.slug ?? ''))

    const { data: device, error } = await useAsyncData<Device>(
        () => `device:${slug.value}`,
        () => $fetch<Device>(`/api/devices/${slug.value}`),
        {
            server: true,
        }
    )

    if (error.value) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Device not found',
        })
    }

    const fullName = computed(() =>
        device.value ? `${device.value.brand} ${device.value.model}` : 'Device'
    )

    useSeoMeta({
        title: () => `${fullName.value} | Device Hub`,
        description: () => `Detailed specs and price for ${fullName.value}.`,
    })
</script>

<template>
    <main class="catalog-page">
        <SiteHeader />

        <SiteFooter />
    </main>
</template>
