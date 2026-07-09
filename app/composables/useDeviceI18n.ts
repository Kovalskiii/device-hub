import type {
    DeviceAvailability,
    DeviceBadge,
    DeviceCategory,
    DeviceSort,
} from '#shared/types'

export function useDeviceI18n() {
    const { t } = useI18n()

    const categoryLabel = (category: DeviceCategory) =>
        t(`category.${category}`)
    const badgeLabel = (badge: DeviceBadge) => t(`badge.${badge}`)
    const availabilityLabel = (availability: DeviceAvailability) =>
        t(`availability.${availability}`)
    const sortLabel = (sort: DeviceSort) => t(`sort.${sort}`)
    const specLabel = (key: string) => {
        const translationKey = `spec.${key}`
        const translated = t(translationKey)

        return translated === translationKey ? key : translated
    }

    return {
        categoryLabel,
        badgeLabel,
        availabilityLabel,
        sortLabel,
        specLabel,
    }
}
