<template>
    <section class="catalog-hero" aria-labelledby="catalog-title">
        <div>
            <AppBadge tone="top">Mini Device Catalog</AppBadge>
            <h1 id="catalog-title">Device Hub</h1>
            <p>
                Explore smartphones, wearables and accessories. Search, filter
                and compare key specifications in one clean catalog.
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
