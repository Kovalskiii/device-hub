<script setup lang="ts">
    import type { Device } from '#shared/types'

    const localePath = useLocalePath()
    const { t } = useI18n()
    const { categoryLabel, badgeLabel, availabilityLabel, specLabel } =
        useDeviceI18n()
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
            statusMessage: t('device.notFound'),
        })
    }

    const fullName = computed(() =>
        device.value
            ? `${device.value.brand} ${device.value.model}`
            : t('device.fallbackName')
    )

    useSeoMeta({
        title: () => `${fullName.value} | Device Hub`,
        description: () =>
            t('device.detailsDescription', { name: fullName.value }),
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
            <nav
                class="device-detail__breadcrumbs"
                :aria-label="t('device.catalog')"
            >
                <NuxtLink :to="localePath('/')">
                    {{ t('device.catalog') }}
                </NuxtLink>
                <Icon name="lucide:chevron-right" size="14" />
                <NuxtLink
                    :to="
                        localePath({
                            path: '/',
                            query: { categories: device.category },
                        })
                    "
                >
                    {{ categoryLabel(device.category) }}
                </NuxtLink>
                <Icon name="lucide:chevron-right" size="14" />
                <span>{{ device.model }}</span>
            </nav>

            <div class="device-detail__grid">
                <section
                    class="device-detail__media"
                    :aria-label="
                        t('device.image', {
                            name: `${device.brand} ${device.model}`,
                        })
                    "
                >
                    <AppBadge
                        v-if="device.badge"
                        class="device-detail__badge"
                        :tone="device.badge"
                    >
                        {{ badgeLabel(device.badge) }}
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
                        {{ categoryLabel(device.category) }}
                    </p>
                    <h1 id="device-title">{{ fullName }}</h1>
                    <span
                        class="device-card__stock"
                        :class="{ 'device-card__stock--out': !device.inStock }"
                    >
                        {{
                            device.inStock
                                ? availabilityLabel('in')
                                : availabilityLabel('out')
                        }}
                    </span>

                    <AppPrice
                        size="lg"
                        :price="device.priceMDL"
                        :old-price="device.oldPriceMDL"
                    />

                    <dl class="device-detail__quick-specs">
                        <div v-for="(value, key) in device.specs" :key="key">
                            <dt>{{ specLabel(String(key)) }}</dt>
                            <dd>{{ value }}</dd>
                        </div>
                    </dl>

                    <NuxtLink class="device-detail__back" :to="localePath('/')">
                        <Icon name="lucide:arrow-left" size="16" />
                        {{ t('device.backToCatalog') }}
                    </NuxtLink>
                </aside>
            </div>

            <section
                class="device-detail__specs"
                aria-labelledby="tech-specs-title"
            >
                <h2 id="tech-specs-title">{{ t('device.techSpecs') }}</h2>
                <dl>
                    <div>
                        <dt>{{ t('device.brand') }}</dt>
                        <dd>{{ device.brand }}</dd>
                    </div>
                    <div>
                        <dt>{{ t('device.category') }}</dt>
                        <dd>{{ categoryLabel(device.category) }}</dd>
                    </div>
                    <div v-for="(value, key) in device.specs" :key="key">
                        <dt>{{ specLabel(String(key)) }}</dt>
                        <dd>{{ value }}</dd>
                    </div>
                    <div>
                        <dt>{{ t('device.availability') }}</dt>
                        <dd>
                            {{
                                device.inStock
                                    ? availabilityLabel('in')
                                    : availabilityLabel('out')
                            }}
                        </dd>
                    </div>
                </dl>
            </section>
        </section>

        <SiteFooter />
    </main>
</template>
