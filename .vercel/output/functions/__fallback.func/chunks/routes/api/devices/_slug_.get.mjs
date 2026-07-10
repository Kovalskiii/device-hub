globalThis.__timing__.logStart('Load chunks/routes/api/devices/_slug_.get');import { d as defineEventHandler, b as getRouterParam, a as devices, c as createError } from '../../../nitro/nitro.mjs';
import { b as DeviceSchema } from '../../../_/device.schema.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import '@iconify/utils';
import 'consola';
import 'node:url';
import 'ipx';
import 'zod';
import '../../../_/device.constants.mjs';

const _slug__get = defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug");
  const device = devices.find((item) => item.slug === slug);
  if (!device) {
    throw createError({
      statusCode: 404,
      statusMessage: "Device not found"
    });
  }
  return DeviceSchema.parse(device);
});

export { _slug__get as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/devices/_slug_.get');
//# sourceMappingURL=_slug_.get.mjs.map
