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

        <section
            v-if="device"
            class="device-detail"
            aria-labelledby="device-title"
        >
            <nav class="device-detail__breadcrumbs" aria-label="Breadcrumb">
                <NuxtLink to="/">Catalog</NuxtLink>
                <Icon name="lucide:chevron-right" size="14" />
                <NuxtLink
                    :to="{ path: '/', query: { categories: device.category } }"
                >
                    {{ DEVICE_CATEGORY_LABELS[device.category] }}
                </NuxtLink>
                <Icon name="lucide:chevron-right" size="14" />
                <span>{{ device.model }}</span>
            </nav>

            <div class="device-detail__grid">
                <section
                    class="device-detail__media"
                    :aria-label="`${device.brand} ${device.model} image`"
                >
                    <AppBadge
                        v-if="device.badge"
                        class="device-detail__badge"
                        :tone="device.badge"
                    >
                        {{ DEVICE_BADGE_LABELS[device.badge] }}
                    </AppBadge>
                    <NuxtImg
                        :src="device.image"
                        :alt="`${device.brand} ${device.model}`"
                        width="620"
                        height="620"
                        sizes="280px sm:420px md:560px"
                        format="webp"
                        loading="eager"
                        draggable="false"
                    />
                </section>

                <aside class="device-detail__summary">
                    <p>
                        {{ device.brand }} ·
                        {{ DEVICE_CATEGORY_LABELS[device.category] }}
                    </p>
                    <h1 id="device-title">{{ fullName }}</h1>
                    <span
                        class="device-card__stock"
                        :class="{ 'device-card__stock--out': !device.inStock }"
                    >
                        {{ device.inStock ? 'In stock' : 'Out of stock' }}
                    </span>

                    <AppPrice
                        size="lg"
                        :price="device.priceMDL"
                        :old-price="device.oldPriceMDL"
                    />

                    <dl class="device-detail__quick-specs">
                        <div v-for="(value, key) in device.specs" :key="key">
                            <dt>{{ key }}</dt>
                            <dd>{{ value }}</dd>
                        </div>
                    </dl>

                    <NuxtLink class="device-detail__back" to="/">
                        <Icon name="lucide:arrow-left" size="16" />
                        Back to catalog
                    </NuxtLink>
                </aside>
            </div>

            <section
                class="device-detail__specs"
                aria-labelledby="tech-specs-title"
            >
                <h2 id="tech-specs-title">Tech specs</h2>
                <dl>
                    <div>
                        <dt>Brand</dt>
                        <dd>{{ device.brand }}</dd>
                    </div>
                    <div>
                        <dt>Category</dt>
                        <dd>{{ DEVICE_CATEGORY_LABELS[device.category] }}</dd>
                    </div>
                    <div v-for="(value, key) in device.specs" :key="key">
                        <dt>{{ key }}</dt>
                        <dd>{{ value }}</dd>
                    </div>
                    <div>
                        <dt>Availability</dt>
                        <dd>
                            {{ device.inStock ? 'In stock' : 'Out of stock' }}
                        </dd>
                    </div>
                </dl>
            </section>
        </section>

        <SiteFooter />
    </main>
</template>
