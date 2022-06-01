export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Veganify',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content:
                    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
            },
            {
                hid: 'theme-color-light',
                name: 'theme-color',
                media: '(prefers-color-scheme: light)',
                content: '#0ed8a5',
            },
            {
                hid: 'theme-color-dark',
                name: 'theme-color',
                media: '(prefers-color-scheme: dark)',
                content: '#0ed8a5',
            },
            {
                hid: 'author',
                name: 'author',
                content: 'Bires Marta, marta.dev.bires@gmail.com',
            },
            { name: 'format-detection', content: 'telephone=no' },
            {
                hid: 'keywords',
                name: 'keywords',
                content:
                    'vegan, vegetarian, recipes, smoothies, vegetarian recipes, gluten free recipes, vegetarian smoothie recipes, smoothie recipes',
            },
            {
                hid: 'copyright',
                name: 'copyright',
                content: 'Bires Marta',
            },
            {
                hid: 'robots',
                name: 'robots',
                content: 'index,follow',
            },
        ],
        link: [
            {
                rel: 'shortcut icon',
                type: 'image/x-icon',
                href: '/favicon-32x32.ico',
            },

            {
                rel: 'shortcut icon',
                type: 'image/png',
                sizes: '192x192',
                href: '/favicon-192x192.png',
            },
        ],
    },

    vue: {
        config: {
            productionTip: true,
            devtools: false,
        },
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/sass/app.scss'],

    loading: '@/components/Loader.vue',

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/theme.server.js',
        '~/plugins/fetchrecipes.server.js',
        '~/plugins/filters.js',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['@nuxtjs/google-fonts'],

    googleFonts: {
        families: {
            Poppins: [300, 400, 500, 600, 700],
        },
        display: 'swap',
        useStylesheet: true,
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        [
            // With options
            'cookie-universal-nuxt',
            { alias: 'cookiz' },
        ],
        '@nuxtjs/robots', //! mora biti posl item
        '@nuxtjs/sitemap', //! mora biti posl item
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: 'https://api.spoonacular.com/',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        // analyze: true,
        // postcss: {
        //     // plugins: {
        //     //     // Disable `postcss-url`
        //     //     'postcss-url': false,
        //     //     // Add some plugins
        //     //     'postcss-nested': {},
        //     //     'postcss-responsive-type': {},
        //     //     'postcss-hexrgba': {},
        //     // },
        //     preset: {
        //         autoprefixer: {
        //             grid: true,
        //         },
        //     },
        // },
    },

    robots: [
        {
            UserAgent: '*',
            Disallow: '',
        },
    ],

    sitemap: {
        hostname: process.env.BASE_URL || 'https://localhost:3000',
        path: '/sitemap.xml',
        cacheTime: 1000 * 60 * 60 * 2,
        trailingSlash: true,
        gzip: true,
    },

    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                path: '*',
                redirect: '/',
                component: resolve(__dirname, 'pages/index.vue'),
            })
        },
    },

    //? ZA MOBILE
    // server: {
    //     port: 8000, // default: 3000
    //     host: '0.0.0.0', // default: localhost
    // },
}
