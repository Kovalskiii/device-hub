// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@nuxt/icon', '@nuxt/image', '@nuxtjs/google-fonts'],

    components: [{ path: '~/components', pathPrefix: false }],

    css: [
        '~/assets/css/reset.css',
        '~/assets/css/variables.css',
        '~/assets/css/main.css',
    ],

    app: {
        head: {
            title: 'Device Hub',
            meta: [
                {
                    name: 'description',
                    content:
                        'Device-hub clean and user-friendly website for exploring electronic devices',
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
            ],
        },
    },

    googleFonts: {
        display: 'swap',
        families: {
            Inter: [400, 500, 600, 700, 800, 900],
        },
    },

    image: {
        quality: 86,
        format: ['webp'],
    },

    nitro: {
        preset: 'node-server',
    },

    typescript: {
        strict: true,
        typeCheck: true,
    },
})
