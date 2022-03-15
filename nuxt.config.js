export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: "%s - Veganify",
    title: 'Veganify',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // vue: {
  //   config: {
  //     productionTip: true,
  //     devtools: false,
  //   },
  // },

  components: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/sass/app.scss'],

  loading: '@/components/Loader.vue',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/fetchrecipes.server.js', '~/plugins/filters.js'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      // basic
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      prefetch: true,
      preconnect: true,
      preload: true,
      useStylesheet: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://api.spoonacular.com/',
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
}
