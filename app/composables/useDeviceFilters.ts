import {
    DEVICE_AVAILABILITY_VALUES,
    DEVICE_BADGE_VALUES,
    DEVICE_BRAND_VALUES,
    DEVICE_CATEGORY_VALUES,
    DEVICE_PAGE_SIZE,
    DEVICE_PRICE_LIMITS,
    isDeviceSortValue,
} from '#shared/constants'
import type { DevicesQuery } from '#shared/types'
import type { LocationQueryRaw, LocationQueryValueRaw } from 'vue-router'

type ArrayFilterKey = 'categories' | 'brands' | 'badges' | 'availability'
type ActiveFilterKey = ArrayFilterKey | 'q' | 'price'

const toArray = (value: unknown): string[] => {
    if (!value) return []

    const raw = Array.isArray(value) ? value : [value]

    return raw
        .flatMap((item) => String(item).split(','))
        .map((item) => item.trim())
        .filter(Boolean)
}

const toAllowedArray = <TAllowed extends readonly string[]>(
    value: unknown,
    allowed: TAllowed
): TAllowed[number][] => {
    const allowedSet = new Set<string>(allowed)

    return toArray(value).filter((item): item is TAllowed[number] =>
        allowedSet.has(item)
    )
}

const numberOr = (value: unknown, fallback: number) => {
    const number = Number(value)

    return Number.isFinite(number) ? number : fallback
}

export function useDeviceFilters() {
    const route = useRoute()
    const router = useRouter()

    const searchInput = ref(String(route.query.q ?? ''))
    const debouncedSearch = useDebouncedRef(searchInput, 350)

    const filters = computed<DevicesQuery>(() => ({
        q: String(route.query.q ?? ''),
        categories: toAllowedArray(
            route.query.categories,
            DEVICE_CATEGORY_VALUES
        ),
        brands: toAllowedArray(route.query.brands, DEVICE_BRAND_VALUES),
        badges: toAllowedArray(route.query.badges, DEVICE_BADGE_VALUES),
        availability: toAllowedArray(
            route.query.availability,
            DEVICE_AVAILABILITY_VALUES
        ),
        minPrice: numberOr(
            route.query.minPrice,
            DEVICE_PRICE_LIMITS.defaultMin
        ),
        maxPrice: numberOr(
            route.query.maxPrice,
            DEVICE_PRICE_LIMITS.defaultMax
        ),
        sort: isDeviceSortValue(route.query.sort)
            ? route.query.sort
            : 'popular',
        page: numberOr(route.query.page, 1),
        limit: numberOr(route.query.limit, DEVICE_PAGE_SIZE.default),
    }))

    const pushQuery = (
        patch: Record<string, LocationQueryValueRaw | LocationQueryValueRaw[]>
    ) => {
        const query: LocationQueryRaw = {
            ...route.query,
            ...patch,
            page: patch.page ?? 1,
        }

        Object.keys(query).forEach((key) => {
            const value = query[key]
            const isEmptyArray = Array.isArray(value) && value.length === 0
            const isDefaultPrice =
                (key === 'minPrice' &&
                    Number(value) === DEVICE_PRICE_LIMITS.defaultMin) ||
                (key === 'maxPrice' &&
                    Number(value) === DEVICE_PRICE_LIMITS.defaultMax)
            const isDefaultPage = key === 'page' && Number(value) === 1
            const isDefaultSort = key === 'sort' && value === 'popular'

            if (
                value === '' ||
                value === undefined ||
                value === null ||
                isEmptyArray ||
                isDefaultPrice ||
                isDefaultPage ||
                isDefaultSort
            ) {
                delete query[key]
            }
        })

        router.push({ query })
    }

    const toggleArrayFilter = (key: ArrayFilterKey, value: string) => {
        const current = new Set(toArray(route.query[key]))
        current.has(value) ? current.delete(value) : current.add(value)

        pushQuery({ [key]: [...current].join(',') })
    }

    const removeActiveFilter = (key: ActiveFilterKey, value?: string) => {
        if (key === 'q') {
            searchInput.value = ''
            pushQuery({ q: '' })
            return
        }

        if (key === 'price') {
            pushQuery({
                minPrice: DEVICE_PRICE_LIMITS.defaultMin,
                maxPrice: DEVICE_PRICE_LIMITS.defaultMax,
            })
            return
        }

        if (value) toggleArrayFilter(key, value)
    }

    watch(
        debouncedSearch,
        (q) => {
            if (q !== String(route.query.q ?? '')) pushQuery({ q })
        },
        { flush: 'post' }
    )

    watch(
        () => route.query.q,
        (q) => {
            const nextValue = String(q ?? '')
            if (nextValue !== searchInput.value) searchInput.value = nextValue
        }
    )

    return {
        filters,
        searchInput,
        pushQuery,
        toggleArrayFilter,
        removeActiveFilter,
    }
}
