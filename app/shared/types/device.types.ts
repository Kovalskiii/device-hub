import type { z } from 'zod'
import type {
  DeviceAvailabilitySchema,
  DeviceBadgeSchema,
  DeviceBrandSchema,
  DeviceCategorySchema,
  DeviceSchema,
  DeviceSortSchema,
  DevicesQuerySchema,
  DevicesResponseSchema
} from '#shared/schemas/device.schema'

export type Device = z.infer<typeof DeviceSchema>
export type DeviceCategory = z.infer<typeof DeviceCategorySchema>
export type DeviceBrand = z.infer<typeof DeviceBrandSchema>
export type DeviceBadge = z.infer<typeof DeviceBadgeSchema>
export type DeviceAvailability = z.infer<typeof DeviceAvailabilitySchema>
export type DeviceSort = z.infer<typeof DeviceSortSchema>
export type DevicesQuery = z.infer<typeof DevicesQuerySchema>
export type DevicesResponse = z.infer<typeof DevicesResponseSchema>
