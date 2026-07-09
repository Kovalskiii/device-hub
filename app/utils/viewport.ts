/**
 * Get current viewport height
 * @returns Current viewport height in pixels
 */
export function getViewportHeight(): number {
    if (typeof window === 'undefined') return 0

    return window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight
}
