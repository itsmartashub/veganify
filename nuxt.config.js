export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',

  head: {
    title: 'veganify',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttes: {
      class: ['theme'],
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },
  // router: {
  //     prefetchLinks: false, // ionda kad hocemo ipak da neki link bude prefetch onda stavimo kod njega atribut prefetch
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/sass/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/fetchrecipes.server.js', '~/plugins/filters.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  loading: '~/components/Loader.vue',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['nuxt-gsap-module'], // enable gsap module

  // Add global page transition
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0,
        y: -100,
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done,
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        y: -100,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done,
      })
    },
  },

  // gsap: {
  // extraPlugins: {
  //         /**
  //          * After activation, plugins are automatically
  //          * registered and available globally
  //          */
  //         scrollTo: true,
  //         scrollTrigger: true
  //     },
  // extraEases: {
  //     expoScaleEase: true
  // }
  // },

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: 'https://api.spoonacular.com/',

    // headers: {
    //   common: {
    //     Authorization: 'c7a09e671f1942969e0934543114c7e3',
    //     // 'X-API-KEY': 'c7a09e671f1942969e0934543114c7e3',
    //   },
    // },
  }, // Used as fallback if no runtime config is provided

  // privateRuntimeConfig: {
  //   apiDefault: process.env.API_SECRET_DEFAULT,
  //   apiReserve: process.env.API_SECRET_RESERVE,
  // },

  // env: {
  //   baseUrl:
  //     process.env.NODE_ENV === 'dev'
  //       ? 'http://localhost:3000'
  //       : 'https://my-domain.com',
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
