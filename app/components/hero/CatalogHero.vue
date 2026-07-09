<script setup lang="ts">
    const { t } = useI18n()
</script>

<template>
    <section class="catalog-hero" aria-labelledby="catalog-title">
        <div>
            <AppBadge tone="top">{{ t('hero.badge') }}</AppBadge>
            <h1 id="catalog-title">{{ t('hero.title') }}</h1>
            <p>
                {{ t('hero.description') }}
            </p>
        </div>

        <div class="catalog-hero__image">
            <NuxtImg
                src="/img/iphone-16-pro.webp"
                alt="iPhone 16 Pro"
                width="640"
                height="640"
                sizes="280px sm:320px md:360px"
                format="webp"
                loading="eager"
                fetchpriority="high"
                draggable="false"
                preload
            />
        </div>
    </section>
</template>

<style src="./CatalogHero.css"></style>
