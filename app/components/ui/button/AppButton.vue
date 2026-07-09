<script setup lang="ts">
    withDefaults(
        defineProps<{
            variant?: 'primary' | 'ghost' | 'soft'
            disabled?: boolean
            type?: 'button' | 'submit' | 'reset'
        }>(),
        {
            variant: 'primary',
            type: 'button',
        }
    )
</script>

<template>
    <button
        class="app-button"
        :class="`app-button--${variant}`"
        :type="type"
        :disabled="disabled"
    >
        <slot />
    </button>
</template>

<style src="./AppButton.css"></style>
