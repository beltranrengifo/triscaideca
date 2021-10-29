export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Triscaideca - Arquitectura de interiores',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Arquitectura de interiores y proyectos de interiorismo',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/slick.js', '@/plugins/state.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      'nuxt-i18n',
      {
        baseUrl: process.env.BASE_URL,
        seo: false,
        vueI18n: {
          fallbackLocale: 'es',
        },
        locales: [
          {
            code: 'es',
            iso: 'es-ES',
            file: 'es.js',
          },
        ],
        langDir: 'lang/',
        defaultLocale: 'es',
        lazy: true,
        detectBrowserLanguage: {
          useCookie: true,
          alwaysRedirect: true,
        },
      },
    ],
    'vue-social-sharing/nuxt',
    'nuxt-leaflet',
  ],

  styleResources: {
    scss: [
      '@/assets/scss/_config.functions.scss',
      '@/assets/scss/_config.colors.scss',
      '@/assets/scss/_config.responsive.scss',
    ],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    nestedProperties: ['project.tag'],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
