<script setup lang="ts">
    import type { Device } from '#shared/types'
    import { DEVICE_BADGE_LABELS } from '#shared/constants'

    const localePath = useLocalePath()
    const { badgeLabel, availabilityLabel } = useDeviceI18n()

    defineProps<{
        device: Device
    }>()
</script>

<template>
    <NuxtLink class="device-card" :to="localePath(`/devices/${device.slug}`)">
        <AppBadge
            v-if="device.badge"
            class="device-card__badge"
            :tone="device.badge"
        >
            {{ badgeLabel(device.badge) }}
        </AppBadge>

        <div class="device-card__image-wrap">
            <NuxtImg
                class="device-card__image"
                :src="device.image"
                :alt="`${device.brand} ${device.model}`"
                width="320"
                height="320"
                sizes="160px sm:190px md:220px lg:260px"
                format="webp"
                loading="lazy"
                decoding="async"
                draggable="false"
            />
        </div>

        <div class="device-card__body">
            <p>{{ device.brand }}</p>
            <h3>{{ device.model }}</h3>

            <div class="device-card__specs">
                <span
                    v-for="(value, key) in device.specs"
                    :key="key"
                    class="device-card__spec"
                >
                    <Icon
                        class="device-card__spec-icon"
                        name="lucide:check-circle-2"
                        size="13"
                    />
                    {{ value }}
                </span>
            </div>

            <AppPrice
                :price="device.priceMDL"
                :old-price="device.oldPriceMDL"
            />

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
        </div>
    </NuxtLink>
</template>

<style src="./DeviceCard.css"></style>
