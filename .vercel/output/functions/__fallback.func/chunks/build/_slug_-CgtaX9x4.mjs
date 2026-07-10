globalThis.__timing__.logStart('Load chunks/build/_slug_-CgtaX9x4');import { u as useDeviceI18n, _ as __nuxt_component_0, b as __nuxt_component_3, c as __nuxt_component_4, d as __nuxt_component_5, a as __nuxt_component_6 } from './SiteFooter-BHIUVIYh.mjs';
import { a as useLocalePath, u as useI18n, c as useRoute, e as useAsyncData, f as createError, g as useSeoMeta, _ as __nuxt_component_1$1 } from './server.mjs';
import __nuxt_component_2 from './index-CDB7uKN6.mjs';
import { defineComponent, computed, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const localePath = useLocalePath();
    const { t } = useI18n();
    const { categoryLabel, badgeLabel, availabilityLabel, specLabel } = useDeviceI18n();
    const route = useRoute();
    const slug = computed(() => String(route.params.slug ?? ""));
    const { data: device, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => `device:${slug.value}`,
      () => $fetch(`/api/devices/${slug.value}`),
      {
        server: true
      }
    )), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      throw createError({
        statusCode: 404,
        statusMessage: t("device.notFound")
      });
    }
    const fullName = computed(
      () => device.value ? `${device.value.brand} ${device.value.model}` : t("device.fallbackName")
    );
    useSeoMeta({
      title: () => `${fullName.value} | Device Hub`,
      description: () => t("device.detailsDescription", { name: fullName.value })
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_Icon = __nuxt_component_2;
      const _component_AppBadge = __nuxt_component_3;
      const _component_NuxtImg = __nuxt_component_4;
      const _component_AppPrice = __nuxt_component_5;
      const _component_SiteFooter = __nuxt_component_6;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "catalog-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
      if (unref(device)) {
        _push(`<section class="device-detail" aria-labelledby="device-title"><nav class="device-detail__breadcrumbs"${ssrRenderAttr("aria-label", unref(t)("device.catalog"))}>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("device.catalog"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("device.catalog")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:chevron-right",
          size: "14"
        }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)({
            path: "/",
            query: { categories: unref(device).category }
          })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(categoryLabel)(unref(device).category))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(categoryLabel)(unref(device).category)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:chevron-right",
          size: "14"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(unref(device).model)}</span></nav><div class="device-detail__grid"><section class="device-detail__media"${ssrRenderAttr(
          "aria-label",
          unref(t)("device.image", {
            name: `${unref(device).brand} ${unref(device).model}`
          })
        )}>`);
        if (unref(device).badge) {
          _push(ssrRenderComponent(_component_AppBadge, {
            class: "device-detail__badge",
            tone: unref(device).badge
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(badgeLabel)(unref(device).badge))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(badgeLabel)(unref(device).badge)), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: unref(device).image,
          alt: `${unref(device).brand} ${unref(device).model}`,
          width: "620",
          height: "620",
          sizes: "280px sm:420px md:560px",
          format: "webp",
          loading: "eager",
          draggable: "false"
        }, null, _parent));
        _push(`</section><aside class="device-detail__summary"><p>${ssrInterpolate(unref(device).brand)} · ${ssrInterpolate(unref(categoryLabel)(unref(device).category))}</p><h1 id="device-title">${ssrInterpolate(unref(fullName))}</h1><span class="${ssrRenderClass([{ "device-card__stock--out": !unref(device).inStock }, "device-card__stock"])}">${ssrInterpolate(unref(device).inStock ? unref(availabilityLabel)("in") : unref(availabilityLabel)("out"))}</span>`);
        _push(ssrRenderComponent(_component_AppPrice, {
          size: "lg",
          price: unref(device).priceMDL,
          "old-price": unref(device).oldPriceMDL
        }, null, _parent));
        _push(`<dl class="device-detail__quick-specs"><!--[-->`);
        ssrRenderList(unref(device).specs, (value, key) => {
          _push(`<div><dt>${ssrInterpolate(unref(specLabel)(String(key)))}</dt><dd>${ssrInterpolate(value)}</dd></div>`);
        });
        _push(`<!--]--></dl>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "device-detail__back",
          to: unref(localePath)("/")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-left",
                size: "16"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(unref(t)("device.backToCatalog"))}`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:arrow-left",
                  size: "16"
                }),
                createTextVNode(" " + toDisplayString(unref(t)("device.backToCatalog")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</aside></div><section class="device-detail__specs" aria-labelledby="tech-specs-title"><h2 id="tech-specs-title">${ssrInterpolate(unref(t)("device.techSpecs"))}</h2><dl><div><dt>${ssrInterpolate(unref(t)("device.brand"))}</dt><dd>${ssrInterpolate(unref(device).brand)}</dd></div><div><dt>${ssrInterpolate(unref(t)("device.category"))}</dt><dd>${ssrInterpolate(unref(categoryLabel)(unref(device).category))}</dd></div><!--[-->`);
        ssrRenderList(unref(device).specs, (value, key) => {
          _push(`<div><dt>${ssrInterpolate(unref(specLabel)(String(key)))}</dt><dd>${ssrInterpolate(value)}</dd></div>`);
        });
        _push(`<!--]--><div><dt>${ssrInterpolate(unref(t)("device.availability"))}</dt><dd>${ssrInterpolate(unref(device).inStock ? unref(availabilityLabel)("in") : unref(availabilityLabel)("out"))}</dd></div></dl></section></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/devices/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/_slug_-CgtaX9x4');
//# sourceMappingURL=_slug_-CgtaX9x4.mjs.map
