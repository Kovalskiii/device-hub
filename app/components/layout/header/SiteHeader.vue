<script setup lang="ts">
    const { theme, toggleTheme } = useTheme()
    const { locale, t } = useI18n()
    const localePath = useLocalePath()
    const switchLocalePath = useSwitchLocalePath()
    const localeOptions = [
        { code: 'en', label: 'EN' },
        { code: 'ro', label: 'RO' },
        { code: 'ru', label: 'RU' },
    ] as const
    const isLocaleDropdownOpen = ref(false)
    const localeDropdown = ref<HTMLElement | null>(null)

    defineProps<{
        showSearch?: boolean
    }>()

    const search = defineModel<string>('search', { default: '' })
    const currentLocale = computed(
        () =>
            localeOptions.find((option) => option.code === locale.value) ??
            localeOptions[0]
    )
    const closeLocaleDropdown = () => {
        isLocaleDropdownOpen.value = false
    }
    const toggleLocaleDropdown = () => {
        isLocaleDropdownOpen.value = !isLocaleDropdownOpen.value
    }
    const onDocumentClick = (event: MouseEvent) => {
        if (!localeDropdown.value?.contains(event.target as Node)) {
            closeLocaleDropdown()
        }
    }
    const onDocumentKeydown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') closeLocaleDropdown()
    }

    onMounted(() => {
        document.addEventListener('click', onDocumentClick)
        document.addEventListener('keydown', onDocumentKeydown)
    })

    onBeforeUnmount(() => {
        document.removeEventListener('click', onDocumentClick)
        document.removeEventListener('keydown', onDocumentKeydown)
    })
</script>

<template>
    <header class="site-header">
        <NuxtLink class="site-header__logo" :to="localePath('/')">
            <img
                src="/device-hub-logo.svg"
                :alt="t('common.brand')"
                draggable="false"
            />
        </NuxtLink>

        <label v-if="showSearch" class="site-header__search">
            <Icon name="lucide:search" size="16" />
            <input
                v-model.trim="search"
                type="search"
                :placeholder="t('header.searchPlaceholder')"
                autocomplete="off"
            />
        </label>

        <div
            ref="localeDropdown"
            class="site-header__locales"
            :class="{ 'site-header__locales--open': isLocaleDropdownOpen }"
        >
            <button
                class="site-header__locale-toggle"
                type="button"
                :aria-label="t('header.switchLanguage')"
                :aria-expanded="isLocaleDropdownOpen"
                aria-haspopup="listbox"
                @click.stop="toggleLocaleDropdown"
            >
                <span>{{ currentLocale.label }}</span>
                <Icon
                    :name="
                        isLocaleDropdownOpen
                            ? 'lucide:chevron-up'
                            : 'lucide:chevron-down'
                    "
                    size="14"
                />
            </button>

            <div
                v-if="isLocaleDropdownOpen"
                class="site-header__locale-menu"
                role="listbox"
                :aria-label="t('header.switchLanguage')"
            >
                <NuxtLink
                    v-for="option in localeOptions"
                    :key="option.code"
                    :to="switchLocalePath(option.code) || localePath('/')"
                    class="site-header__locale-option"
                    :class="{
                        'site-header__locale-option--active':
                            locale === option.code,
                    }"
                    role="option"
                    :aria-selected="locale === option.code"
                    @click="closeLocaleDropdown"
                >
                    {{ option.label }}
                </NuxtLink>
            </div>
        </div>

        <button
            class="site-header__theme"
            type="button"
            :aria-label="
                theme === 'dark'
                    ? t('header.switchToLight')
                    : t('header.switchToDark')
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
