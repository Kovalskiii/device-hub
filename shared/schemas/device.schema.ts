import { z } from 'zod'
import {
  DEVICE_AVAILABILITY_VALUES,
  DEVICE_BADGE_VALUES,
  DEVICE_BRAND_VALUES,
  DEVICE_CATEGORY_VALUES,
  DEVICE_PAGE_SIZE,
  DEVICE_PRICE_LIMITS,
  DEVICE_QUERY_LIMITS,
  DEVICE_SORT_VALUES
} from '#shared/constants'

export const DeviceCategorySchema = z.enum(DEVICE_CATEGORY_VALUES)
export const DeviceBrandSchema = z.enum(DEVICE_BRAND_VALUES)
export const DeviceBadgeSchema = z.enum(DEVICE_BADGE_VALUES)
export const DeviceAvailabilitySchema = z.enum(DEVICE_AVAILABILITY_VALUES)
export const DeviceSortSchema = z.enum(DEVICE_SORT_VALUES)

export const DeviceSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  brand: DeviceBrandSchema,
  model: z.string().min(1),
  category: DeviceCategorySchema,
  priceMDL: z.number().int().nonnegative(),
  oldPriceMDL: z.number().int().nonnegative().nullable(),
  inStock: z.boolean(),
  badge: DeviceBadgeSchema.nullable(),
  specs: z.record(z.string().min(1), z.string().min(1)),
  image: z.string().startsWith('/img/').endsWith('.webp')
})

const asArray = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((value) => {
    if (value === undefined || value === null || value === '') return []
    if (Array.isArray(value)) return value.flatMap((item) => String(item).split(','))

    return String(value).split(',')
  }, z.array(schema))

const numberFromQuery = (fallback: number, min: number, max: number) =>
  z.preprocess(
    (value) => {
      if (value === undefined || value === null || value === '') return fallback

      return Number(value)
    },
    z.number().int().min(min).max(max)
  )

export const DevicesQuerySchema = z
  .object({
    q: z.string().trim().max(DEVICE_QUERY_LIMITS.searchMaxLength).default(''),
    categories: asArray(DeviceCategorySchema).default([]),
    brands: asArray(DeviceBrandSchema).default([]),
    badges: asArray(DeviceBadgeSchema).default([]),
    availability: asArray(DeviceAvailabilitySchema).default([]),
    minPrice: numberFromQuery(
      DEVICE_PRICE_LIMITS.defaultMin,
      DEVICE_PRICE_LIMITS.min,
      DEVICE_PRICE_LIMITS.max
    ).default(DEVICE_PRICE_LIMITS.defaultMin),
    maxPrice: numberFromQuery(
      DEVICE_PRICE_LIMITS.defaultMax,
      DEVICE_PRICE_LIMITS.min,
      DEVICE_PRICE_LIMITS.max
    ).default(DEVICE_PRICE_LIMITS.defaultMax),
    sort: DeviceSortSchema.default('popular'),
    page: numberFromQuery(1, 1, DEVICE_QUERY_LIMITS.pageMax).default(1),
    limit: numberFromQuery(DEVICE_PAGE_SIZE.default, DEVICE_PAGE_SIZE.min, DEVICE_PAGE_SIZE.max).default(
      DEVICE_PAGE_SIZE.default
    )
  })
  .transform((query) => ({
    ...query,
    minPrice: Math.min(query.minPrice, query.maxPrice),
    maxPrice: Math.max(query.minPrice, query.maxPrice)
  }))

export const DeviceFacetSchema = z.object({
  brands: z.record(DeviceBrandSchema, z.number().int().nonnegative()),
  categories: z.record(DeviceCategorySchema, z.number().int().nonnegative()),
  badges: z.record(DeviceBadgeSchema, z.number().int().nonnegative()),
  availability: z.record(DeviceAvailabilitySchema, z.number().int().nonnegative())
})

export const DevicesResponseSchema = z.object({
  items: z.array(DeviceSchema),
  total: z.number().int().nonnegative(),
  page: z.number().int().positive(),
  limit: z.number().int().positive(),
  pages: z.number().int().positive(),
  facets: DeviceFacetSchema
})
