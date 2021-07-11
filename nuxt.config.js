export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    target: "static",

    head: {
        title: "veganify",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttes: {
            class: ["theme"]
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "preconnect", href: "https://fonts.gstatic.com" },
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            }
        ]
    },
    // router: {
    //     prefetchLinks: false, // ionda kad hocemo ipak da neki link bude prefetch onda stavimo kod njega atribut prefetch
    // },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~/assets/sass/app.scss"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ["~/plugins/fetchrecipes.server.js", "~/plugins/filters.js"],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxtjs/axios"],

    axios: {
        baseURL: "https://api.spoonacular.com/" // Used as fallback if no runtime config is provided
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
};
