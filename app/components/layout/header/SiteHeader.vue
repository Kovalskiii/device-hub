<script setup lang="ts">
    const { theme, toggleTheme } = useTheme()

    defineProps<{
        showSearch?: boolean
    }>()

    const search = defineModel<string>('search', { default: '' })
</script>

<template>
    <header class="site-header">
        <NuxtLink class="site-header__logo" to="/">
            <img src="/device-hub-logo.svg" alt="Device Hub" />
        </NuxtLink>

        <label v-if="showSearch" class="site-header__search">
            <Icon name="lucide:search" size="16" />
            <input
                v-model.trim="search"
                type="search"
                placeholder="Search devices..."
                autocomplete="off"
            />
        </label>

        <button
            class="site-header__theme"
            type="button"
            :aria-label="
                theme === 'dark'
                    ? 'Switch to light theme'
                    : 'Switch to dark theme'
            "
            @click="toggleTheme"
        >
            <Icon
                :name="theme === 'dark' ? 'lucide:sun' : 'lucide:moon'"
                size="17"
            />
        </button>
    </header>
</template>

<style src="./SiteHeader.css"></style>
