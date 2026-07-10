globalThis.__timing__.logStart('Load chunks/build/index-BDQryw3f');import { u as useDeviceI18n, _ as __nuxt_component_0$1, a as __nuxt_component_6$1, b as __nuxt_component_3$1, c as __nuxt_component_4$1, d as __nuxt_component_5 } from './SiteFooter-BHIUVIYh.mjs';
import { defineComponent, ref, computed, withAsyncContext, watch, mergeProps, isRef, unref, withCtx, createTextVNode, toDisplayString, createVNode, withKeys, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrRenderSlot, ssrRenderStyle, ssrRenderTeleport, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useI18n, e as useAsyncData, c as useRoute, d as useRouter, b as _export_sfc, a as useLocalePath, _ as __nuxt_component_1$1, n as navigateTo } from './server.mjs';
import __nuxt_component_2$2 from './index-CDB7uKN6.mjs';
import { f as DEVICE_PRICE_LIMITS, h as DEVICE_SORT_VALUES, i as isDeviceSortValue, e as DEVICE_PAGE_SIZE, a as DEVICE_AVAILABILITY_VALUES, b as DEVICE_BADGE_VALUES, d as DEVICE_BRAND_VALUES, c as DEVICE_CATEGORY_VALUES } from '../_/device.constants.mjs';
import '../nitro/nitro.mjs';
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
import 'perfect-debounce';
import '@vue/shared';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import '@iconify/utils/lib/css/icon';

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CatalogHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppBadge = __nuxt_component_3$1;
      const _component_NuxtImg = __nuxt_component_4$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "catalog-hero",
        "aria-labelledby": "catalog-title"
      }, _attrs))}><div>`);
      _push(ssrRenderComponent(_component_AppBadge, { tone: "top" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("hero.badge"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("hero.badge")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 id="catalog-title">${ssrInterpolate(unref(t)("hero.title"))}</h1><p>${ssrInterpolate(unref(t)("hero.description"))}</p></div><div class="catalog-hero__image">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/iphone-16-pro.webp",
        alt: "iPhone 16 Pro",
        width: "640",
        height: "640",
        sizes: "280px sm:320px md:360px",
        format: "webp",
        loading: "eager",
        fetchpriority: "high",
        draggable: "false",
        preload: ""
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hero/CatalogHero.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$9, { __name: "CatalogHero" });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    isModalOpen: {
      type: Boolean
    },
    position: {
      type: String,
      default: "right-top"
    },
    transitionDirection: {
      type: String,
      default: "right"
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    computed(() => {
      return `slide-in-${props.transitionDirection}`;
    });
    watch(
      () => props.isModalOpen,
      (isOpen) => {
        (void 0).body.style.overflow = isOpen ? "hidden" : "";
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div class="modal-overlay" style="${ssrRenderStyle(__props.isModalOpen ? null : { display: "none" })}"><div class="${ssrRenderClass([props.position, "modal-content"])}" style="${ssrRenderStyle(__props.isModalOpen ? null : { display: "none" })}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        _push2(`</div></div>`);
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/Modal.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$8, { __name: "Modal" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "AppCheckbox",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean },
    label: {},
    count: {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2$2;
      _push(`<label${ssrRenderAttrs(mergeProps({
        class: ["app-checkbox", { "app-checkbox--active": __props.modelValue }]
      }, _attrs))}><input type="checkbox"${ssrIncludeBooleanAttr(__props.modelValue) ? " checked" : ""}><span class="app-checkbox__box">`);
      if (__props.modelValue) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:check",
          size: "13"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</span><span class="app-checkbox__label">${ssrInterpolate(__props.label)}</span>`);
      if (__props.count !== void 0) {
        _push(`<small>${ssrInterpolate(__props.count)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/checkbox/AppCheckbox.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2$1 = Object.assign(_sfc_main$7, { __name: "AppCheckbox" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "FilterSidebar",
  __ssrInlineRender: true,
  props: {
    facets: {},
    filters: {},
    activeFilters: {}
  },
  emits: ["toggle", "price", "removeActive"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { t } = useI18n();
    const localePath = useLocalePath();
    const { categoryLabel, badgeLabel, availabilityLabel } = useDeviceI18n();
    const emit = __emit;
    const min = ref(props.filters.minPrice || DEVICE_PRICE_LIMITS.defaultMin);
    const max = ref(props.filters.maxPrice || DEVICE_PRICE_LIMITS.defaultMax);
    const activeFilters = computed(() => props.activeFilters ?? []);
    const openSections = ref(["active", "price"]);
    watch(
      () => props.filters,
      (filters) => {
        min.value = filters.minPrice;
        max.value = filters.maxPrice;
      },
      { deep: true }
    );
    const categoryCount = (category) => props.facets.categories[category] ?? 0;
    const brandCount = (brand) => props.facets.brands[brand] ?? 0;
    const badgeCount = (badge) => props.facets.badges[badge] ?? 0;
    const availabilityCount = (value) => props.facets.availability[value] ?? 0;
    const priceRangeStyle = computed(() => {
      const minPercent = (min.value - DEVICE_PRICE_LIMITS.min) / (DEVICE_PRICE_LIMITS.max - DEVICE_PRICE_LIMITS.min) * 100;
      const maxPercent = (max.value - DEVICE_PRICE_LIMITS.min) / (DEVICE_PRICE_LIMITS.max - DEVICE_PRICE_LIMITS.min) * 100;
      const clampedMin = Math.max(0, Math.min(100, minPercent));
      const clampedMax = Math.max(0, Math.min(100, maxPercent));
      return {
        "--price-min": `${clampedMin}%`,
        "--price-max": `${clampedMax}%`
      };
    });
    const isOpen = (section) => openSections.value.includes(section);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2$2;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_AppCheckbox = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "filter-sidebar" }, _attrs))}><section class="${ssrRenderClass([{ "filter-sidebar__section--open": isOpen("active") }, "filter-sidebar__active"])}"><h3><button type="button"${ssrRenderAttr("aria-expanded", isOpen("active"))}><span class="filter-sidebar__title">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:list-filter",
        size: "15"
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(t)("filters.active"))}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: isOpen("active") ? "lucide:chevron-up" : "lucide:chevron-down",
        size: "16"
      }, null, _parent));
      _push(`</button></h3>`);
      if (isOpen("active")) {
        _push(`<div class="filter-sidebar__content"><div class="active-filters__panel">`);
        if (unref(activeFilters).length) {
          _push(`<!--[--><!--[-->`);
          ssrRenderList(unref(activeFilters), (filter) => {
            _push(`<button type="button">${ssrInterpolate(filter.label)} `);
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:x",
              size: "14"
            }, null, _parent));
            _push(`</button>`);
          });
          _push(`<!--]-->`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)("/")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:rotate-ccw",
                  size: "14"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(unref(t)("common.clearAll"))}`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "lucide:rotate-ccw",
                    size: "14"
                  }),
                  createTextVNode(" " + toDisplayString(unref(t)("common.clearAll")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<!--]-->`);
        } else {
          _push(`<p>${ssrInterpolate(unref(t)("filters.noActive"))}</p>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="${ssrRenderClass({ "filter-sidebar__section--open": isOpen("categories") })}"><h3><button type="button"${ssrRenderAttr("aria-expanded", isOpen("categories"))}><span class="filter-sidebar__title">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:layout-grid",
        size: "15"
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(t)("filters.categories"))}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: isOpen("categories") ? "lucide:chevron-up" : "lucide:chevron-down",
        size: "16"
      }, null, _parent));
      _push(`</button></h3>`);
      if (isOpen("categories")) {
        _push(`<div class="filter-sidebar__content"><!--[-->`);
        ssrRenderList(unref(DEVICE_CATEGORY_VALUES), (category) => {
          _push(ssrRenderComponent(_component_AppCheckbox, {
            key: category,
            label: unref(categoryLabel)(category),
            count: categoryCount(category),
            "model-value": __props.filters.categories.includes(category),
            "onUpdate:modelValue": ($event) => emit("toggle", "categories", category)
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="${ssrRenderClass({ "filter-sidebar__section--open": isOpen("brand") })}"><h3><button type="button"${ssrRenderAttr("aria-expanded", isOpen("brand"))}><span class="filter-sidebar__title">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:badge-check",
        size: "15"
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(t)("filters.brand"))}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: isOpen("brand") ? "lucide:chevron-up" : "lucide:chevron-down",
        size: "16"
      }, null, _parent));
      _push(`</button></h3>`);
      if (isOpen("brand")) {
        _push(`<div class="filter-sidebar__content"><!--[-->`);
        ssrRenderList(unref(DEVICE_BRAND_VALUES), (brand) => {
          _push(ssrRenderComponent(_component_AppCheckbox, {
            key: brand,
            label: brand,
            count: brandCount(brand),
            "model-value": __props.filters.brands.includes(brand),
            "onUpdate:modelValue": ($event) => emit("toggle", "brands", brand)
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="${ssrRenderClass({ "filter-sidebar__section--open": isOpen("price") })}"><h3><button type="button"${ssrRenderAttr("aria-expanded", isOpen("price"))}><span class="filter-sidebar__title">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:badge-dollar-sign",
        size: "15"
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(t)("filters.price"))}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: isOpen("price") ? "lucide:chevron-up" : "lucide:chevron-down",
        size: "16"
      }, null, _parent));
      _push(`</button></h3>`);
      if (isOpen("price")) {
        _push(`<div class="filter-sidebar__content"><div class="filter-sidebar__price"><input${ssrRenderAttr("value", unref(min))} type="number"${ssrRenderAttr("min", unref(DEVICE_PRICE_LIMITS).min)}${ssrRenderAttr("max", unref(DEVICE_PRICE_LIMITS).max)}${ssrRenderAttr("step", unref(DEVICE_PRICE_LIMITS).step)}${ssrRenderAttr("aria-label", unref(t)("filters.minimumPrice"))}><span aria-hidden="true"></span><input${ssrRenderAttr("value", unref(max))} type="number"${ssrRenderAttr("min", unref(DEVICE_PRICE_LIMITS).min)}${ssrRenderAttr("max", unref(DEVICE_PRICE_LIMITS).max)}${ssrRenderAttr("step", unref(DEVICE_PRICE_LIMITS).step)}${ssrRenderAttr("aria-label", unref(t)("filters.maximumPrice"))}></div><div class="filter-sidebar__range" style="${ssrRenderStyle(unref(priceRangeStyle))}"><input${ssrRenderAttr("value", unref(min))} type="range"${ssrRenderAttr("min", unref(DEVICE_PRICE_LIMITS).min)}${ssrRenderAttr("max", unref(DEVICE_PRICE_LIMITS).max)}${ssrRenderAttr("step", unref(DEVICE_PRICE_LIMITS).step)}${ssrRenderAttr("aria-label", unref(t)("filters.minimumPriceSlider"))}><input${ssrRenderAttr("value", unref(max))} type="range"${ssrRenderAttr("min", unref(DEVICE_PRICE_LIMITS).min)}${ssrRenderAttr("max", unref(DEVICE_PRICE_LIMITS).max)}${ssrRenderAttr("step", unref(DEVICE_PRICE_LIMITS).step)}${ssrRenderAttr("aria-label", unref(t)("filters.maximumPriceSlider"))}></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="${ssrRenderClass({ "filter-sidebar__section--open": isOpen("availability") })}"><h3><button type="button"${ssrRenderAttr("aria-expanded", isOpen("availability"))}><span class="filter-sidebar__title">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:package-check",
        size: "15"
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(t)("filters.availability"))}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: isOpen("availability") ? "lucide:chevron-up" : "lucide:chevron-down",
        size: "16"
      }, null, _parent));
      _push(`</button></h3>`);
      if (isOpen("availability")) {
        _push(`<div class="filter-sidebar__content"><!--[-->`);
        ssrRenderList(unref(DEVICE_AVAILABILITY_VALUES), (value) => {
          _push(ssrRenderComponent(_component_AppCheckbox, {
            key: value,
            label: unref(availabilityLabel)(value),
            count: availabilityCount(value),
            "model-value": __props.filters.availability.includes(value),
            "onUpdate:modelValue": ($event) => emit("toggle", "availability", value)
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="${ssrRenderClass({ "filter-sidebar__section--open": isOpen("badges") })}"><h3><button type="button"${ssrRenderAttr("aria-expanded", isOpen("badges"))}><span class="filter-sidebar__title">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:sparkles",
        size: "15"
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(t)("filters.badges"))}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: isOpen("badges") ? "lucide:chevron-up" : "lucide:chevron-down",
        size: "16"
      }, null, _parent));
      _push(`</button></h3>`);
      if (isOpen("badges")) {
        _push(`<div class="filter-sidebar__content"><!--[-->`);
        ssrRenderList(unref(DEVICE_BADGE_VALUES), (badge) => {
          _push(ssrRenderComponent(_component_AppCheckbox, {
            key: badge,
            label: unref(badgeLabel)(badge),
            count: badgeCount(badge),
            "model-value": __props.filters.badges.includes(badge),
            "onUpdate:modelValue": ($event) => emit("toggle", "badges", badge)
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/filters/FilterSidebar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$6, { __name: "FilterSidebar" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "FiltersModal",
  __ssrInlineRender: true,
  props: {
    isModalOpen: { type: Boolean },
    facets: {},
    filters: {},
    activeFilters: {}
  },
  emits: ["close", "toggle", "price", "removeActive"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { t } = useI18n();
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2$2;
      const _component_FilterSidebar = __nuxt_component_4;
      const _component_NuxtLink = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_Modal, mergeProps({
        "is-modal-open": __props.isModalOpen,
        position: "left-top",
        "transition-direction": "left",
        onClose: ($event) => emit("close")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div id="filters-modal" class="filters-modal" role="dialog" aria-modal="true" aria-labelledby="filters-modal-title"${_scopeId}><div class="filters-modal__header"${_scopeId}><div${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(t)("common.brand"))}</span><h2 id="filters-modal-title"${_scopeId}>${ssrInterpolate(unref(t)("filters.modalTitle"))}</h2></div><button class="filters-modal__close" type="button"${ssrRenderAttr("aria-label", unref(t)("filters.closeFilters"))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:x",
              size: "19"
            }, null, _parent2, _scopeId));
            _push2(`</button></div>`);
            _push2(ssrRenderComponent(_component_FilterSidebar, {
              facets: __props.facets,
              filters: __props.filters,
              "active-filters": __props.activeFilters,
              onToggle: (key, value) => emit("toggle", key, value),
              onPrice: (min, max) => emit("price", min, max),
              onRemoveActive: (key, value) => emit("removeActive", key, value)
            }, null, _parent2, _scopeId));
            _push2(`<div class="filters-modal__actions"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/"),
              onClick: ($event) => emit("close")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:rotate-ccw",
                    size: "15"
                  }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(unref(t)("common.clear"))}`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:rotate-ccw",
                      size: "15"
                    }),
                    createTextVNode(" " + toDisplayString(unref(t)("common.clear")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                id: "filters-modal",
                class: "filters-modal",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "filters-modal-title",
                onKeydown: withKeys(($event) => emit("close"), ["esc"])
              }, [
                createVNode("div", { class: "filters-modal__header" }, [
                  createVNode("div", null, [
                    createVNode("span", null, toDisplayString(unref(t)("common.brand")), 1),
                    createVNode("h2", { id: "filters-modal-title" }, toDisplayString(unref(t)("filters.modalTitle")), 1)
                  ]),
                  createVNode("button", {
                    class: "filters-modal__close",
                    type: "button",
                    "aria-label": unref(t)("filters.closeFilters"),
                    onClick: ($event) => emit("close")
                  }, [
                    createVNode(_component_Icon, {
                      name: "lucide:x",
                      size: "19"
                    })
                  ], 8, ["aria-label", "onClick"])
                ]),
                createVNode(_component_FilterSidebar, {
                  facets: __props.facets,
                  filters: __props.filters,
                  "active-filters": __props.activeFilters,
                  onToggle: (key, value) => emit("toggle", key, value),
                  onPrice: (min, max) => emit("price", min, max),
                  onRemoveActive: (key, value) => emit("removeActive", key, value)
                }, null, 8, ["facets", "filters", "active-filters", "onToggle", "onPrice", "onRemoveActive"]),
                createVNode("div", { class: "filters-modal__actions" }, [
                  createVNode(_component_NuxtLink, {
                    to: unref(localePath)("/"),
                    onClick: ($event) => emit("close")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:rotate-ccw",
                        size: "15"
                      }),
                      createTextVNode(" " + toDisplayString(unref(t)("common.clear")), 1)
                    ]),
                    _: 1
                  }, 8, ["to", "onClick"])
                ])
              ], 40, ["onKeydown"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/filters-modal/FiltersModal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$5, { __name: "FiltersModal" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppButton",
  __ssrInlineRender: true,
  props: {
    variant: { default: "primary" },
    disabled: { type: Boolean },
    type: { default: "button" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["app-button", `app-button--${__props.variant}`],
        type: __props.type,
        disabled: __props.disabled
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/button/AppButton.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$4, { __name: "AppButton" });
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "device-skeleton",
    "aria-hidden": "true"
  }, _attrs))}><span></span><b></b><p></p><i></i><i></i></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/device/DeviceSkeleton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]), { __name: "DeviceSkeleton" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "EmptyState",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2$2;
      const _component_AppButton = __nuxt_component_3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "empty-state" }, _attrs))}><div>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:search-x",
        size: "42"
      }, null, _parent));
      _push(`</div><h2>Nothing found</h2><p>Try removing some filters or changing the search phrase.</p>`);
      _push(ssrRenderComponent(_component_AppButton, {
        variant: "soft",
        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(unref(localePath)("/"))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:rotate-ccw",
              size: "16"
            }, null, _parent2, _scopeId));
            _push2(` Reset filters `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:rotate-ccw",
                size: "16"
              }),
              createTextVNode(" Reset filters ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/device/EmptyState.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$2, { __name: "EmptyState" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DeviceCard",
  __ssrInlineRender: true,
  props: {
    device: {}
  },
  setup(__props) {
    const localePath = useLocalePath();
    const { badgeLabel, availabilityLabel } = useDeviceI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_AppBadge = __nuxt_component_3$1;
      const _component_NuxtImg = __nuxt_component_4$1;
      const _component_Icon = __nuxt_component_2$2;
      const _component_AppPrice = __nuxt_component_5;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "device-card",
        to: unref(localePath)(`/devices/${__props.device.slug}`)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.device.badge) {
              _push2(ssrRenderComponent(_component_AppBadge, {
                class: "device-card__badge",
                tone: __props.device.badge
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(badgeLabel)(__props.device.badge))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(badgeLabel)(__props.device.badge)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="device-card__image-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "device-card__image",
              src: __props.device.image,
              alt: `${__props.device.brand} ${__props.device.model}`,
              width: "320",
              height: "320",
              sizes: "160px sm:190px md:220px lg:260px",
              format: "webp",
              loading: "lazy",
              decoding: "async",
              draggable: "false"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="device-card__body"${_scopeId}><p${_scopeId}>${ssrInterpolate(__props.device.brand)}</p><h3${_scopeId}>${ssrInterpolate(__props.device.model)}</h3><div class="device-card__specs"${_scopeId}><!--[-->`);
            ssrRenderList(__props.device.specs, (value, key) => {
              _push2(`<span class="device-card__spec"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                class: "device-card__spec-icon",
                name: "lucide:check-circle-2",
                size: "13"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(value)}</span>`);
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_component_AppPrice, {
              price: __props.device.priceMDL,
              "old-price": __props.device.oldPriceMDL
            }, null, _parent2, _scopeId));
            _push2(`<span class="${ssrRenderClass([{ "device-card__stock--out": !__props.device.inStock }, "device-card__stock"])}"${_scopeId}>${ssrInterpolate(__props.device.inStock ? unref(availabilityLabel)("in") : unref(availabilityLabel)("out"))}</span></div>`);
          } else {
            return [
              __props.device.badge ? (openBlock(), createBlock(_component_AppBadge, {
                key: 0,
                class: "device-card__badge",
                tone: __props.device.badge
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(badgeLabel)(__props.device.badge)), 1)
                ]),
                _: 1
              }, 8, ["tone"])) : createCommentVNode("", true),
              createVNode("div", { class: "device-card__image-wrap" }, [
                createVNode(_component_NuxtImg, {
                  class: "device-card__image",
                  src: __props.device.image,
                  alt: `${__props.device.brand} ${__props.device.model}`,
                  width: "320",
                  height: "320",
                  sizes: "160px sm:190px md:220px lg:260px",
                  format: "webp",
                  loading: "lazy",
                  decoding: "async",
                  draggable: "false"
                }, null, 8, ["src", "alt"])
              ]),
              createVNode("div", { class: "device-card__body" }, [
                createVNode("p", null, toDisplayString(__props.device.brand), 1),
                createVNode("h3", null, toDisplayString(__props.device.model), 1),
                createVNode("div", { class: "device-card__specs" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.device.specs, (value, key) => {
                    return openBlock(), createBlock("span", {
                      key,
                      class: "device-card__spec"
                    }, [
                      createVNode(_component_Icon, {
                        class: "device-card__spec-icon",
                        name: "lucide:check-circle-2",
                        size: "13"
                      }),
                      createTextVNode(" " + toDisplayString(value), 1)
                    ]);
                  }), 128))
                ]),
                createVNode(_component_AppPrice, {
                  price: __props.device.priceMDL,
                  "old-price": __props.device.oldPriceMDL
                }, null, 8, ["price", "old-price"]),
                createVNode("span", {
                  class: ["device-card__stock", { "device-card__stock--out": !__props.device.inStock }]
                }, toDisplayString(__props.device.inStock ? unref(availabilityLabel)("in") : unref(availabilityLabel)("out")), 3)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/device/DeviceCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main$1, { __name: "DeviceCard" });
function useDebouncedRef(source, delay = 350) {
  const debounced = ref(source.value);
  let timer;
  watch(source, (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      debounced.value = value;
    }, delay);
  });
  return debounced;
}
const toArray = (value) => {
  if (!value) return [];
  const raw = Array.isArray(value) ? value : [value];
  return raw.flatMap((item) => String(item).split(",")).map((item) => item.trim()).filter(Boolean);
};
const toAllowedArray = (value, allowed) => {
  const allowedSet = new Set(allowed);
  return toArray(value).filter(
    (item) => allowedSet.has(item)
  );
};
const numberOr = (value, fallback) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
};
function useDeviceFilters() {
  const route = useRoute();
  const router = useRouter();
  const searchInput = ref(String(route.query.q ?? ""));
  const debouncedSearch = useDebouncedRef(searchInput, 350);
  const filters = computed(() => ({
    q: String(route.query.q ?? ""),
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
    sort: isDeviceSortValue(route.query.sort) ? route.query.sort : "popular",
    page: numberOr(route.query.page, 1),
    limit: numberOr(route.query.limit, DEVICE_PAGE_SIZE.default)
  }));
  const pushQuery = (patch) => {
    const query = {
      ...route.query,
      ...patch,
      page: patch.page ?? 1
    };
    Object.keys(query).forEach((key) => {
      const value = query[key];
      const isEmptyArray = Array.isArray(value) && value.length === 0;
      const isDefaultPrice = key === "minPrice" && Number(value) === DEVICE_PRICE_LIMITS.defaultMin || key === "maxPrice" && Number(value) === DEVICE_PRICE_LIMITS.defaultMax;
      const isDefaultPage = key === "page" && Number(value) === 1;
      const isDefaultSort = key === "sort" && value === "popular";
      if (value === "" || value === void 0 || value === null || isEmptyArray || isDefaultPrice || isDefaultPage || isDefaultSort) {
        delete query[key];
      }
    });
    router.push({ query });
  };
  const toggleArrayFilter = (key, value) => {
    const current = new Set(toArray(route.query[key]));
    current.has(value) ? current.delete(value) : current.add(value);
    pushQuery({ [key]: [...current].join(",") });
  };
  const removeActiveFilter = (key, value) => {
    if (key === "q") {
      searchInput.value = "";
      pushQuery({ q: "" });
      return;
    }
    if (key === "price") {
      pushQuery({
        minPrice: DEVICE_PRICE_LIMITS.defaultMin,
        maxPrice: DEVICE_PRICE_LIMITS.defaultMax
      });
      return;
    }
    if (value) toggleArrayFilter(key, value);
  };
  watch(
    debouncedSearch,
    (q) => {
      if (q !== String(route.query.q ?? "")) pushQuery({ q });
    },
    { flush: "post" }
  );
  watch(
    () => route.query.q,
    (q) => {
      const nextValue = String(q ?? "");
      if (nextValue !== searchInput.value) searchInput.value = nextValue;
    }
  );
  return {
    filters,
    searchInput,
    pushQuery,
    toggleArrayFilter,
    removeActiveFilter
  };
}
function getViewportHeight() {
  return 0;
}
function useWindowSize() {
  const width = ref(1024);
  const height = ref(768);
  const isTouchDevice = ref(false);
  const isMobileWidth = ref(
    false
  );
  const isTabletWidth = ref(
    false
  );
  const isPcWidth = ref(
    false
  );
  const updateSize = () => {
    width.value = (void 0).innerWidth;
    height.value = getViewportHeight();
    isTouchDevice.value = "ontouchstart" in void 0 || (void 0).maxTouchPoints > 0;
    isMobileWidth.value = (void 0).innerWidth <= 767;
    isTabletWidth.value = (void 0).innerWidth >= 768 && (void 0).innerWidth <= 1023;
    isPcWidth.value = (void 0).innerWidth >= 1024;
  };
  return {
    width,
    height,
    isTouchDevice,
    isMobileWidth,
    isTabletWidth,
    isPcWidth,
    updateSize
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const { categoryLabel, badgeLabel, availabilityLabel, sortLabel } = useDeviceI18n();
    const {
      filters,
      searchInput,
      pushQuery,
      toggleArrayFilter,
      removeActiveFilter
    } = useDeviceFilters();
    const { width } = useWindowSize();
    const isFiltersModalOpen = ref(false);
    const isSortDropdownOpen = ref(false);
    const isCatalogTopStuck = ref(false);
    const catalogTop = ref(null);
    ref(null);
    const apiQuery = computed(() => ({ ...filters.value }));
    const asyncKey = computed(() => `devices:${JSON.stringify(apiQuery.value)}`);
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      asyncKey,
      () => $fetch("/api/devices", {
        query: apiQuery.value
      }),
      {
        server: true,
        lazy: true,
        watch: [apiQuery],
        dedupe: "cancel",
        default: () => ({
          items: [],
          total: 0,
          page: 1,
          limit: 8,
          pages: 1,
          facets: {
            brands: {},
            categories: {},
            badges: {},
            availability: { in: 0, out: 0 }
          }
        })
      }
    )), __temp = await __temp, __restore(), __temp);
    const activeFilters = computed(() => {
      const list = [];
      if (filters.value.q)
        list.push({
          key: "q",
          label: t("activeFilter.search", { value: filters.value.q })
        });
      filters.value.categories.forEach(
        (value) => list.push({
          key: "categories",
          value,
          label: t("activeFilter.category", {
            value: categoryLabel(value)
          })
        })
      );
      filters.value.brands.forEach(
        (value) => list.push({
          key: "brands",
          value,
          label: t("activeFilter.brand", { value })
        })
      );
      filters.value.badges.forEach(
        (value) => list.push({
          key: "badges",
          value,
          label: t("activeFilter.badge", {
            value: badgeLabel(value)
          })
        })
      );
      filters.value.availability.forEach(
        (value) => list.push({
          key: "availability",
          value,
          label: availabilityLabel(value)
        })
      );
      if (filters.value.minPrice > DEVICE_PRICE_LIMITS.defaultMin || filters.value.maxPrice < DEVICE_PRICE_LIMITS.defaultMax) {
        list.push({
          key: "price",
          label: t("activeFilter.price", {
            min: filters.value.minPrice,
            max: filters.value.maxPrice
          })
        });
      }
      return list;
    });
    const activeFilterCount = computed(() => activeFilters.value.length);
    const isSidebarVisible = computed(() => width.value >= 768);
    const selectedSortLabel = computed(() => sortLabel(filters.value.sort));
    const closeFiltersModal = () => {
      isFiltersModalOpen.value = false;
    };
    const updateCatalogTopStuck = () => {
      if (!catalogTop.value || isSidebarVisible.value) {
        isCatalogTopStuck.value = false;
        return;
      }
      isCatalogTopStuck.value = catalogTop.value.getBoundingClientRect().top <= 64;
    };
    watch(isSidebarVisible, (isVisible) => {
      if (isVisible) closeFiltersModal();
      updateCatalogTopStuck();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = __nuxt_component_0$1;
      const _component_CatalogHero = __nuxt_component_1;
      const _component_FiltersModal = __nuxt_component_2;
      const _component_AppButton = __nuxt_component_3;
      const _component_FilterSidebar = __nuxt_component_4;
      const _component_Icon = __nuxt_component_2$2;
      const _component_DeviceSkeleton = __nuxt_component_6;
      const _component_EmptyState = __nuxt_component_7;
      const _component_DeviceCard = __nuxt_component_8;
      const _component_SiteFooter = __nuxt_component_6$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "catalog-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteHeader, {
        search: unref(searchInput),
        "onUpdate:search": ($event) => isRef(searchInput) ? searchInput.value = $event : null,
        "show-search": ""
      }, null, _parent));
      _push(`<div class="page-content">`);
      _push(ssrRenderComponent(_component_CatalogHero, null, null, _parent));
      _push(ssrRenderComponent(_component_FiltersModal, {
        "is-modal-open": unref(isFiltersModalOpen),
        facets: unref(data).facets,
        filters: unref(filters),
        "active-filters": unref(activeFilters),
        onClose: closeFiltersModal,
        onToggle: unref(toggleArrayFilter),
        onPrice: (min, max) => unref(pushQuery)({ minPrice: min, maxPrice: max }),
        onRemoveActive: unref(removeActiveFilter)
      }, null, _parent));
      if (unref(error)) {
        _push(`<p class="catalog-page__error">${ssrInterpolate(unref(t)("catalog.apiError", { message: unref(error).message }))} `);
        _push(ssrRenderComponent(_component_AppButton, {
          variant: "ghost",
          onClick: ($event) => unref(refresh)()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("common.tryAgain"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("common.tryAgain")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="catalog-layout">`);
      _push(ssrRenderComponent(_component_FilterSidebar, {
        facets: unref(data).facets,
        filters: unref(filters),
        "active-filters": unref(activeFilters),
        onToggle: unref(toggleArrayFilter),
        onPrice: (min, max) => unref(pushQuery)({ minPrice: min, maxPrice: max }),
        onRemoveActive: unref(removeActiveFilter)
      }, null, _parent));
      _push(`<section class="catalog-content" aria-live="polite"><div class="${ssrRenderClass([{
        "catalog-content__top--stuck": unref(isCatalogTopStuck)
      }, "catalog-content__top"])}"><button class="catalog-content__filters toolbar__filters" type="button" aria-controls="filters-modal"${ssrRenderAttr("aria-expanded", unref(isFiltersModalOpen))}>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "catalog-content__filters-icon",
        name: "lucide:sliders-horizontal",
        size: "17"
      }, null, _parent));
      _push(`<span class="catalog-content__filters-label">${ssrInterpolate(unref(t)("catalog.filters"))}</span>`);
      if (unref(activeFilterCount)) {
        _push(`<b>${ssrInterpolate(unref(activeFilterCount))}</b>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button><b>${ssrInterpolate(unref(t)("catalog.devicesFound", { count: unref(data).total }))}</b><div class="${ssrRenderClass([{
        "catalog-content__sort--open": unref(isSortDropdownOpen)
      }, "catalog-content__sort"])}"><button class="catalog-content__sort-toggle" type="button"${ssrRenderAttr("aria-label", unref(t)("catalog.sortDevices"))}${ssrRenderAttr("aria-expanded", unref(isSortDropdownOpen))} aria-haspopup="listbox">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:arrow-up-down",
        size: "16"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(unref(selectedSortLabel))}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(isSortDropdownOpen) ? "lucide:chevron-up" : "lucide:chevron-down",
        size: "16"
      }, null, _parent));
      _push(`</button>`);
      if (unref(isSortDropdownOpen)) {
        _push(`<div class="catalog-content__sort-menu" role="listbox"${ssrRenderAttr("aria-label", unref(t)("catalog.sortDevices"))}><!--[-->`);
        ssrRenderList(unref(DEVICE_SORT_VALUES), (sort) => {
          _push(`<button class="${ssrRenderClass([{
            "catalog-content__sort-option--active": unref(filters).sort === sort
          }, "catalog-content__sort-option"])}" type="button" role="option"${ssrRenderAttr("aria-selected", unref(filters).sort === sort)}>`);
          if (unref(filters).sort === sort) {
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:check",
              size: "15"
            }, null, _parent));
          } else {
            _push(`<span></span>`);
          }
          _push(` ${ssrInterpolate(unref(sortLabel)(sort))}</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="device-grid">`);
      if (unref(pending)) {
        _push(`<!--[-->`);
        ssrRenderList(unref(data).limit, (n) => {
          _push(ssrRenderComponent(_component_DeviceSkeleton, { key: n }, null, _parent));
        });
        _push(`<!--]-->`);
      } else if (!unref(data).items.length) {
        _push(ssrRenderComponent(_component_EmptyState, null, null, _parent));
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(data).items, (device) => {
          _push(ssrRenderComponent(_component_DeviceCard, {
            key: device.id,
            device
          }, null, _parent));
        });
        _push(`<!--]-->`);
      }
      _push(`</div>`);
      if (unref(data).pages > 1) {
        _push(`<div class="pagination"${ssrRenderAttr("aria-label", unref(t)("catalog.pagination"))}>`);
        _push(ssrRenderComponent(_component_AppButton, {
          variant: "ghost",
          disabled: unref(data).page <= 1,
          onClick: ($event) => unref(pushQuery)({ page: unref(data).page - 1 })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:chevron-left",
                size: "16"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(unref(t)("common.previous"))}`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:chevron-left",
                  size: "16"
                }),
                createTextVNode(" " + toDisplayString(unref(t)("common.previous")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--[-->`);
        ssrRenderList(unref(data).pages, (page) => {
          _push(ssrRenderComponent(_component_AppButton, {
            key: page,
            variant: page === unref(data).page ? "primary" : "ghost",
            onClick: ($event) => unref(pushQuery)({ page })
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(page)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(page), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_AppButton, {
          variant: "ghost",
          disabled: unref(data).page >= unref(data).pages,
          onClick: ($event) => unref(pushQuery)({ page: unref(data).page + 1 })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("common.next"))} `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:chevron-right",
                size: "16"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("common.next")) + " ", 1),
                createVNode(_component_Icon, {
                  name: "lucide:chevron-right",
                  size: "16"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></div></div>`);
      _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/index-BDQryw3f');
//# sourceMappingURL=index-BDQryw3f.mjs.map
