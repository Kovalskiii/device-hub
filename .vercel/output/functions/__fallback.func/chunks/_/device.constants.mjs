globalThis.__timing__.logStart('Load chunks/_/device.constants');const DEVICE_CATEGORY_VALUES = [
  "smartphone",
  "wearable",
  "accessory"
];
const DEVICE_BRAND_VALUES = [
  "Samsung",
  "Apple",
  "Xiaomi",
  "Google",
  "Motorola",
  "TCL",
  "Huawei",
  "Nokia"
];
const DEVICE_BADGE_VALUES = ["top", "new", "sale"];
const DEVICE_BADGE_RANK = {
  top: 1,
  new: 2,
  sale: 3
};
const DEVICE_AVAILABILITY_VALUES = ["in", "out"];
const DEVICE_SORT_VALUES = [
  "popular",
  "price-asc",
  "price-desc",
  "name"
];
const DEVICE_PRICE_LIMITS = {
  min: 0,
  max: 6e4,
  step: 1,
  defaultMin: 0,
  defaultMax: 6e4
};
const DEVICE_PAGE_SIZE = {
  default: 8,
  min: 1,
  max: 24
};
const DEVICE_QUERY_LIMITS = {
  searchMaxLength: 60,
  pageMax: 999
};
const isDeviceSortValue = (value) => typeof value === "string" && DEVICE_SORT_VALUES.includes(value);

export { DEVICE_BADGE_RANK as D, DEVICE_AVAILABILITY_VALUES as a, DEVICE_BADGE_VALUES as b, DEVICE_CATEGORY_VALUES as c, DEVICE_BRAND_VALUES as d, DEVICE_PAGE_SIZE as e, DEVICE_PRICE_LIMITS as f, DEVICE_QUERY_LIMITS as g, DEVICE_SORT_VALUES as h, isDeviceSortValue as i };;globalThis.__timing__.logEnd('Load chunks/_/device.constants');
//# sourceMappingURL=device.constants.mjs.map
