import { DeviceSchema } from '#shared/schemas'
import { devices } from '../../data/devices'

export default defineEventHandler((event) => {
    const slug = getRouterParam(event, 'slug')
    const device = devices.find((item) => item.slug === slug)

    if (!device) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Device not found',
        })
    }

    return DeviceSchema.parse(device)
})
