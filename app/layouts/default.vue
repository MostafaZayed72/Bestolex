<template>
  <div :class="{ 'dark': isDark }" class="min-h-screen bg-white dark:bg-secondary text-gray-900 dark:text-white transition-colors duration-300 flex flex-col">
    <!-- Header -->
    <header class="shadow-sm bg-white/90 dark:bg-secondary/90 sticky top-0 z-40 backdrop-blur-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <!-- Logo placeholder -->
        <NuxtLink to="/" class="text-2xl font-bold text-primary flex items-center gap-1">
          <span>BX</span>
          <span class="text-secondary dark:text-white">BESTOLEX</span>
        </NuxtLink>

        <!-- Navigation -->
        <nav class="hidden md:flex gap-6">
          <NuxtLink to="/" class="hover:text-primary transition">{{ locale === 'ar' ? 'الرئيسية' : 'Home' }}</NuxtLink>
          <NuxtLink to="/products" class="hover:text-primary transition">{{ locale === 'ar' ? 'المنتجات' : 'Products' }}</NuxtLink>
          <NuxtLink to="/about" class="hover:text-primary transition">{{ locale === 'ar' ? 'من نحن' : 'About Us' }}</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-primary transition">{{ locale === 'ar' ? 'تواصل معنا' : 'Contact' }}</NuxtLink>
        </nav>

        <!-- Controls -->
        <div class="flex gap-2">
          <button @click="toggleDark()" class="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            {{ isDark ? '🌞' : '🌙' }}
          </button>
          <button @click="setLocale(locale === 'ar' ? 'en' : 'ar')" class="px-3 py-1 bg-primary text-white rounded-md font-bold hover:opacity-90 transition">
            {{ locale === 'ar' ? 'EN' : 'عربي' }}
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 dark:bg-gray-900 py-8 mt-12 border-t dark:border-gray-800">
      <div class="container mx-auto px-4 text-center">
        <p class="text-gray-600 dark:text-gray-400">
          &copy; {{ new Date().getFullYear() }} Bestolex. {{ locale === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.' }}
        </p>
      </div>
    </footer>

    <!-- Floating Buttons -->
    <div class="fixed bottom-4 flex flex-col gap-4 z-50" :class="locale === 'ar' ? 'left-4' : 'right-4'">
      <button v-if="y > 200" @click="scrollToTop" class="w-12 h-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:opacity-80 transition transform hover:scale-110" data-aos="fade-up">
        ↑
      </button>
      <a href="https://wa.me/123456789" target="_blank" class="w-12 h-12 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition transform hover:scale-110" data-aos="fade-up">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
      </a>
    </div>
  </div>
</template>

<script setup>
import { useDark, useToggle, useWindowScroll } from '@vueuse/core'
import AOS from 'aos'
import { onMounted } from 'vue'

const { locale, setLocale } = useI18n()

const isDark = useDark()
const toggleDark = useToggle(isDark)

const { y } = useWindowScroll()
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  })
})
</script>

<style>
html[lang="ar"] {
  direction: rtl;
}
html[lang="en"] {
  direction: ltr;
}
body {
  overflow-x: hidden;
}
</style>
