export const DEVICE_CATEGORY_VALUES = [
    'smartphone',
    'wearable',
    'accessory',
] as const
export type DeviceCategoryValue = (typeof DEVICE_CATEGORY_VALUES)[number]

export const DEVICE_CATEGORY_LABELS: Record<DeviceCategoryValue, string> = {
    smartphone: 'Smartphones',
    wearable: 'Wearables',
    accessory: 'Accessories',
}

export const DEVICE_BRAND_VALUES = [
    'Samsung',
    'Apple',
    'Xiaomi',
    'Google',
    'Motorola',
    'TCL',
    'Huawei',
    'Nokia',
] as const
export type DeviceBrandValue = (typeof DEVICE_BRAND_VALUES)[number]

export const DEVICE_BADGE_VALUES = ['top', 'new', 'sale'] as const
export type DeviceBadgeValue = (typeof DEVICE_BADGE_VALUES)[number]

export const DEVICE_BADGE_LABELS: Record<DeviceBadgeValue, string> = {
    top: 'Top',
    new: 'New',
    sale: 'Sale',
}

export const DEVICE_BADGE_RANK: Record<DeviceBadgeValue, number> = {
    top: 1,
    new: 2,
    sale: 3,
}

export const DEVICE_AVAILABILITY_VALUES = ['in', 'out'] as const
export type DeviceAvailabilityValue =
    (typeof DEVICE_AVAILABILITY_VALUES)[number]

export const DEVICE_AVAILABILITY_LABELS: Record<
    DeviceAvailabilityValue,
    string
> = {
    in: 'In stock',
    out: 'Out of stock',
}

export const DEVICE_SORT_VALUES = [
    'popular',
    'price-asc',
    'price-desc',
    'name',
] as const
export type DeviceSortValue = (typeof DEVICE_SORT_VALUES)[number]

export const DEVICE_SORT_LABELS: Record<DeviceSortValue, string> = {
    popular: 'Popular',
    'price-asc': 'Price: low to high',
    'price-desc': 'Price: high to low',
    name: 'Name',
}

export const DEVICE_PRICE_LIMITS = {
    min: 0,
    max: 60000,
    step: 1,
    defaultMin: 0,
    defaultMax: 60000,
} as const

export const DEVICE_PAGE_SIZE = {
    default: 8,
    min: 1,
    max: 24,
} as const

export const DEVICE_QUERY_LIMITS = {
    searchMaxLength: 60,
    pageMax: 999,
} as const

export const DEVICE_IMAGE_DIRECTORY = '/img' as const

export const isDeviceSortValue = (value: unknown): value is DeviceSortValue =>
    typeof value === 'string' &&
    DEVICE_SORT_VALUES.includes(value as DeviceSortValue)
