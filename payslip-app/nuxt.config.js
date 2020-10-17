import colors from 'vuetify/es5/util/colors'

export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        titleTemplate: '%s - payslip-app',
        title: 'payslip-app',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'built with Nuxt' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Custom loading bar component
    loading: '~/components/loading.vue',

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/firebase.js',
        '~/plugins/firebasestore.js'
    ],

    // Route settings
    router: {
        middleware: ['authenticated']
    },

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // PWA Modules
    pwa: {
        manifest: {
            name: 'My Payslip',
            short_name: 'Payslip',
            lang: 'en',
            description: 'My Payslip',
            orientation: 'portrait',
            background_color: '#000',
            start_url: ' /',
            theme_color: '#000',
            icons: [{
                src: './static/icon.png',
                sizes: '196x196',
                type: 'image/png',
                purpose: 'any maskable'
            }, ]
        },

    },
    icon: {
        iconSrc: './static/icon.png',
        purpose: 'any maskable'
    },

    // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

    //Page transition
    pageTransition: {
        name: 'fade',
        mode: 'out-in'
    },

    // Runtime Config
    publicRuntimeConfig: {},
    privateRuntimeConfig: {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseUrl: process.env.DATABASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    server: {
        port: process.env.PORT || 80
    }
}