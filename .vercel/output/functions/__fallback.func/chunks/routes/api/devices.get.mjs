globalThis.__timing__.logStart('Load chunks/routes/api/devices.get');import { d as defineEventHandler, g as getQuery, c as createError, a as devices } from '../../nitro/nitro.mjs';
import { D as DevicesQuerySchema, a as DevicesResponseSchema } from '../../_/device.schema.mjs';
import { D as DEVICE_BADGE_RANK, a as DEVICE_AVAILABILITY_VALUES, b as DEVICE_BADGE_VALUES, c as DEVICE_CATEGORY_VALUES, d as DEVICE_BRAND_VALUES } from '../../_/device.constants.mjs';
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

const normalize = (value) => value.toLowerCase().trim();
const countByValues = (values, getValue) => {
  const result = Object.fromEntries(
    values.map((value) => [value, 0])
  );
  devices.forEach((device) => {
    const value = getValue(device);
    if (value) result[value] += 1;
  });
  return result;
};
const devices_get = defineEventHandler((event) => {
  const parsed = DevicesQuerySchema.safeParse(getQuery(event));
  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid query parameters",
      data: parsed.error.flatten()
    });
  }
  const query = parsed.data;
  const text = normalize(query.q);
  let result = devices.filter((device) => {
    const haystack = normalize(
      `${device.brand} ${device.model} ${device.category}`
    );
    const availability = device.inStock ? "in" : "out";
    const matchesText = !text || haystack.includes(text);
    const matchesCategory = !query.categories.length || query.categories.includes(device.category);
    const matchesBrand = !query.brands.length || query.brands.includes(device.brand);
    const matchesBadge = !query.badges.length || (device.badge ? query.badges.includes(device.badge) : false);
    const matchesAvailability = !query.availability.length || query.availability.includes(availability);
    const matchesPrice = device.priceMDL >= query.minPrice && device.priceMDL <= query.maxPrice;
    return matchesText && matchesCategory && matchesBrand && matchesBadge && matchesAvailability && matchesPrice;
  });
  result = [...result].sort((a, b) => {
    if (query.sort === "price-asc") return a.priceMDL - b.priceMDL;
    if (query.sort === "price-desc") return b.priceMDL - a.priceMDL;
    if (query.sort === "name")
      return `${a.brand} ${a.model}`.localeCompare(
        `${b.brand} ${b.model}`
      );
    const aRank = a.badge ? DEVICE_BADGE_RANK[a.badge] : 9;
    const bRank = b.badge ? DEVICE_BADGE_RANK[b.badge] : 9;
    return aRank - bRank || b.priceMDL - a.priceMDL;
  });
  const total = result.length;
  const pages = Math.max(1, Math.ceil(total / query.limit));
  const page = Math.min(query.page, pages);
  const items = result.slice((page - 1) * query.limit, page * query.limit);
  return DevicesResponseSchema.parse({
    items,
    total,
    page,
    limit: query.limit,
    pages,
    facets: {
      brands: countByValues(
        DEVICE_BRAND_VALUES,
        (device) => device.brand
      ),
      categories: countByValues(
        DEVICE_CATEGORY_VALUES,
        (device) => device.category
      ),
      badges: countByValues(
        DEVICE_BADGE_VALUES,
        (device) => device.badge
      ),
      availability: countByValues(
        DEVICE_AVAILABILITY_VALUES,
        (device) => device.inStock ? "in" : "out"
      )
    }
  });
});

export { devices_get as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/devices.get');
//# sourceMappingURL=devices.get.mjs.map
