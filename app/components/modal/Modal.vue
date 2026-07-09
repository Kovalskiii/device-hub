<script setup lang="ts">
    import { computed, onUnmounted, type PropType, watch } from 'vue'

    const props = defineProps({
        isModalOpen: {
            type: Boolean,
        },
        position: {
            type: String as PropType<
                | 'left-bottom'
                | 'left-top'
                | 'right-bottom'
                | 'right-top'
                | 'center'
                | 'top-center'
                | 'bottom-center'
            >,
            default: 'right-top',
        },
        transitionDirection: {
            type: String as PropType<'left' | 'right' | 'top' | 'bottom'>,
            default: 'right',
        },
    })

    const emit = defineEmits(['close'])

    function emitClose() {
        emit('close')
    }

    const transitionName = computed(() => {
        return `slide-in-${props.transitionDirection}`
    })

    watch(
        () => props.isModalOpen,
        (isOpen) => {
            document.body.style.overflow = isOpen ? 'hidden' : ''
        }
    )

    onUnmounted(() => {
        document.body.style.overflow = ''
    })
</script>

<template>
    <teleport to="body">
        <transition name="overlay-fade">
            <div
                v-show="isModalOpen"
                class="modal-overlay"
                @click.self="emitClose"
            >
                <transition :name="transitionName">
                    <div
                        v-show="isModalOpen"
                        class="modal-content"
                        :class="props.position"
                    >
                        <slot />
                    </div>
                </transition>
            </div>
        </transition>
    </teleport>
</template>

<style src="./Modal.css"></style>
