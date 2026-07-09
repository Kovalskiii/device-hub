<script setup lang="ts">
    const localePath = useLocalePath()
</script>

<template>
    <section class="empty-state">
        <div>
            <Icon name="lucide:search-x" size="42" />
        </div>
        <h2>Nothing found</h2>
        <p>Try removing some filters or changing the search phrase.</p>
        <AppButton variant="soft" @click="navigateTo(localePath('/'))">
            <Icon name="lucide:rotate-ccw" size="16" />
            Reset filters
        </AppButton>
    </section>
</template>

<style src="./EmptyState.css"></style>
