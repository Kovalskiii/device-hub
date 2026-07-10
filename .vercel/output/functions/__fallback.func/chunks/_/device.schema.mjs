globalThis.__timing__.logStart('Load chunks/_/device.schema');import { z } from 'zod';
import { e as DEVICE_PAGE_SIZE, f as DEVICE_PRICE_LIMITS, g as DEVICE_QUERY_LIMITS, h as DEVICE_SORT_VALUES, c as DEVICE_CATEGORY_VALUES, d as DEVICE_BRAND_VALUES, b as DEVICE_BADGE_VALUES, a as DEVICE_AVAILABILITY_VALUES } from './device.constants.mjs';

const DeviceCategorySchema = z.enum(DEVICE_CATEGORY_VALUES);
const DeviceBrandSchema = z.enum(DEVICE_BRAND_VALUES);
const DeviceBadgeSchema = z.enum(DEVICE_BADGE_VALUES);
const DeviceAvailabilitySchema = z.enum(DEVICE_AVAILABILITY_VALUES);
const DeviceSortSchema = z.enum(DEVICE_SORT_VALUES);
const DeviceSchema = z.object({
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
  image: z.string().startsWith("/img/").endsWith(".webp")
});
const asArray = (schema) => z.preprocess((value) => {
  if (value === void 0 || value === null || value === "") return [];
  if (Array.isArray(value)) return value.flatMap((item) => String(item).split(","));
  return String(value).split(",");
}, z.array(schema));
const numberFromQuery = (fallback, min, max) => z.preprocess(
  (value) => {
    if (value === void 0 || value === null || value === "") return fallback;
    return Number(value);
  },
  z.number().int().min(min).max(max)
);
const DevicesQuerySchema = z.object({
  q: z.string().trim().max(DEVICE_QUERY_LIMITS.searchMaxLength).default(""),
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
  sort: DeviceSortSchema.default("popular"),
  page: numberFromQuery(1, 1, DEVICE_QUERY_LIMITS.pageMax).default(1),
  limit: numberFromQuery(DEVICE_PAGE_SIZE.default, DEVICE_PAGE_SIZE.min, DEVICE_PAGE_SIZE.max).default(
    DEVICE_PAGE_SIZE.default
  )
}).transform((query) => ({
  ...query,
  minPrice: Math.min(query.minPrice, query.maxPrice),
  maxPrice: Math.max(query.minPrice, query.maxPrice)
}));
const DeviceFacetSchema = z.object({
  brands: z.record(DeviceBrandSchema, z.number().int().nonnegative()),
  categories: z.record(DeviceCategorySchema, z.number().int().nonnegative()),
  badges: z.record(DeviceBadgeSchema, z.number().int().nonnegative()),
  availability: z.record(DeviceAvailabilitySchema, z.number().int().nonnegative())
});
const DevicesResponseSchema = z.object({
  items: z.array(DeviceSchema),
  total: z.number().int().nonnegative(),
  page: z.number().int().positive(),
  limit: z.number().int().positive(),
  pages: z.number().int().positive(),
  facets: DeviceFacetSchema
});

export { DevicesQuerySchema as D, DevicesResponseSchema as a, DeviceSchema as b };;globalThis.__timing__.logEnd('Load chunks/_/device.schema');
//# sourceMappingURL=device.schema.mjs.map
