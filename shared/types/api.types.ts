import type { DevicesQuery, DevicesResponse } from './device.types'

export type ApiResult<TData> = {
  data: TData
}

export type DevicesApiQuery = DevicesQuery
export type DevicesApiResponse = DevicesResponse
