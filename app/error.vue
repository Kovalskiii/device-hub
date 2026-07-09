<script setup lang="ts">
    import type { NuxtError } from '#app'

    defineProps<{ error: NuxtError }>()
</script>

<template>
    <main class="not-found">
        <section class="not-found__content" aria-labelledby="not-found-title">
            <h1 id="not-found-title" class="not-found__title">
                Page not found
            </h1>
            <img
                class="not-found__image"
                src="/not-found.gif"
                alt="404 not found illustration"
                draggable="false"
            />
            <NuxtLink class="not-found__button" to="/" @click="clearError()">
                Go home
            </NuxtLink>
        </section>
    </main>
</template>

<style src="./assets/css/pages/error.css"></style>
