import { onMounted, onUnmounted, ref } from 'vue'
import { getViewportHeight } from '~/utils/viewport'

export function useWindowSize() {
    const width = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)
    const height = ref(typeof window !== 'undefined' ? window.innerHeight : 768)
    const isTouchDevice = ref(false)
    const isMobileWidth = ref(
        typeof window !== 'undefined' ? window.innerWidth <= 767 : false
    )
    const isTabletWidth = ref(
        typeof window !== 'undefined'
            ? window.innerWidth >= 768 && window.innerWidth <= 1023
            : false
    )
    const isPcWidth = ref(
        typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
    )

    const updateSize = () => {
        width.value = window.innerWidth
        height.value = getViewportHeight() // Use iOS-safe viewport height

        // Check if device supports touch capabilities
        isTouchDevice.value =
            'ontouchstart' in window || navigator.maxTouchPoints > 0

        // Check if current window width is within mobile range
        isMobileWidth.value = window.innerWidth <= 767 // Common mobile breakpoint
        isTabletWidth.value =
            window.innerWidth >= 768 && window.innerWidth <= 1023 // Common tablet breakpoint
        isPcWidth.value = window.innerWidth >= 1024 // Common pc breakpoint
    }

    onMounted(() => {
        window.addEventListener('resize', updateSize)
        // Update immediately in case the initial values are stale
        updateSize()
    })

    onUnmounted(() => {
        window.removeEventListener('resize', updateSize)
    })

    return {
        width,
        height,
        isTouchDevice,
        isMobileWidth,
        isTabletWidth,
        isPcWidth,
        updateSize,
    }
}
