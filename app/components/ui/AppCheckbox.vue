<script setup lang="ts">
    defineProps<{
        modelValue: boolean
        label: string
        count?: number
    }>()

    defineEmits<{
        'update:modelValue': [value: boolean]
    }>()
</script>

<template>
    <label class="app-checkbox" :class="{ 'app-checkbox--active': modelValue }">
        <input
            type="checkbox"
            :checked="modelValue"
            @change="
                $emit(
                    'update:modelValue',
                    ($event.target as HTMLInputElement).checked
                )
            "
        />
        <span class="app-checkbox__box">
            <Icon v-if="modelValue" name="lucide:check" size="13" />
        </span>
        <span class="app-checkbox__label">{{ label }}</span>
        <small v-if="count !== undefined">{{ count }}</small>
    </label>
</template>

<style src="./AppCheckbox.css"></style>
