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
    '@nuxt/scripts'
  ],

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
