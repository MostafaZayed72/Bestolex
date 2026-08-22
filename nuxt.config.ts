// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  srcDir: '.', // Use root directory for app files
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    '@nuxt/image'
  ],
  image: {
    format: ['webp', 'avif', 'jpeg', 'png'],
    quality: 80,
    domains: [
      'electrocreative-cdn.b-cdn.net',
      'sabtech.com.sa',
      'cdn-bdndb.nitrocdn.com',
      'images.unsplash.com'
    ]
  },
  runtimeConfig: {
    gmailUser: process.env.GMAIL_USER,
    gmailPass: process.env.GMAIL_PASS
  },
  i18n: {
    locales: [
      { code: 'ar', iso: 'ar-SA', dir: 'rtl', name: 'العربية' },
      { code: 'en', iso: 'en-US', dir: 'ltr', name: 'English' }
    ],
    defaultLocale: 'ar',
    detectBrowserLanguage: false
  },
  supabase: {
    url: process.env.SUPABASE_URL || 'https://example.supabase.co',
    key: process.env.SUPABASE_KEY || 'example-key',
    redirect: false
  },
  css: [
    'aos/dist/aos.css'
  ],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap' }
      ]
    }
  }
})
