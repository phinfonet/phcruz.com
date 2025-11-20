import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'pt-br',
        name: 'Português (Brasil)',
        iso: 'pt-BR',
        file: 'pt-br.json'
      },
      {
        code: 'es-cl',
        name: 'Español (Chile)',
        iso: 'es-CL',
        file: 'es-cl.json'
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.json'
      }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'pt-br',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  css: ['~/assets/css/main.css'],

  fonts: {
    families: [
      { name: 'Marcellus', provider: 'google', download: true },
      {
        name: 'Inter',
        provider: 'google',
        download: true,
        weights: ['400', '500', '600']
      }
    ]
  },

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    }
  },

  vite: {
    plugins: [tailwindcss({ config: './tailwind.config.ts' })]
  }
})
