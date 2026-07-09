<script setup lang="ts">
    const { isLoading } = useLoadingIndicator()
    const isInitialLoading = ref(true)

    const isVisible = computed(() => isInitialLoading.value || isLoading.value)

    onMounted(() => {
        requestAnimationFrame(() => {
            isInitialLoading.value = false
        })
    })
</script>

<template>
    <Transition name="app-loader">
        <div v-if="isVisible" class="app-loader">
            <div class="app-loader__backdrop" />
            <div
                class="app-loader__spinner"
                role="status"
                aria-live="polite"
                aria-label="Loading page"
            />
        </div>
    </Transition>
</template>

<style src="./AppLoader.css"></style>
