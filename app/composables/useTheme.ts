type AppTheme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'device-hub-theme'

export const useTheme = () => {
    const theme = useState<AppTheme>('app-theme', () => 'light')

    const setTheme = (value: AppTheme) => {
        theme.value = value
        document.documentElement.dataset.theme = value
        localStorage.setItem(THEME_STORAGE_KEY, value)
    }

    const toggleTheme = () => {
        setTheme(theme.value === 'dark' ? 'light' : 'dark')
    }

    onMounted(() => {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)

        if (savedTheme === 'light' || savedTheme === 'dark') {
            setTheme(savedTheme)
            return
        }

        const systemTheme: AppTheme = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches
            ? 'dark'
            : 'light'

        setTheme(systemTheme)
    })

    return {
        theme,
        setTheme,
        toggleTheme,
    }
}
