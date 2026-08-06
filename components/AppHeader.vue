<template>
  <header class="bg-white dark:bg-secondary text-gray-900 dark:text-white shadow-md sticky top-0 z-50 transition-colors duration-300">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="flex items-center gap-2">
        <img src="/logo.png" alt="Bestolex Logo" class="h-10 md:h-12 object-contain" />
      </NuxtLink>

      <!-- Navigation -->
      <nav class="hidden md:flex items-center gap-6">
        <NuxtLink :to="localePath('/')" class="hover:text-primary dark:hover:text-primary transition font-medium" active-class="text-primary">{{ t('home') }}</NuxtLink>
        <NuxtLink :to="localePath('/about')" class="hover:text-primary dark:hover:text-primary transition font-medium" active-class="text-primary">{{ t('about') }}</NuxtLink>
        
        <!-- Products Dropdown -->
        <div class="relative group">
          <NuxtLink :to="localePath('/products')" class="hover:text-primary dark:hover:text-primary transition font-medium flex items-center gap-1" active-class="text-primary">
            {{ t('products') }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </NuxtLink>
          <!-- Mega Menu Dropdown -->
          <div class="absolute top-full rtl:right-0 ltr:left-0 mt-2 w-[700px] bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex overflow-hidden border border-gray-100 dark:border-gray-700">
            <!-- Left Side: Main Categories -->
            <div class="w-1/3 bg-white dark:bg-gray-800 py-2 border-l border-gray-100 dark:border-gray-700">
              <div
                v-for="category in productsData"
                :key="category.id"
                class="px-4 py-3 cursor-pointer flex justify-between items-center transition-colors group/item"
                :class="{ 'bg-gray-50 dark:bg-gray-700 text-primary': activeCategory?.id === category.id, 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary': activeCategory?.id !== category.id }"
                @mouseenter="activeCategory = category"
              >
                <NuxtLink :to="localePath(`/products/category/${category.id}`)" class="font-medium w-full text-start group-hover/item:text-primary transition-colors">
                  {{ category.title[locale] }}
                </NuxtLink>
                <span class="rtl:-scale-x-100 text-gray-400 group-hover/item:text-primary transition-colors text-sm opacity-70">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>

            <!-- Right Side: Subcategories / Products -->
            <div class="w-2/3 p-6 bg-gray-50 dark:bg-gray-900 overflow-y-auto max-h-[400px]">
              <!-- If category has subcategories -->
              <div v-if="activeCategory?.subcategories" class="grid grid-cols-2 gap-6">
                <div v-for="sub in activeCategory.subcategories" :key="sub.id">
                  <h4 class="font-bold text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary cursor-default transition-colors mb-3 border-b border-gray-200 dark:border-gray-700 pb-1">{{ sub.title[locale] }}</h4>
                  <ul class="space-y-2">
                    <li v-for="prod in sub.products" :key="prod.id">
                      <NuxtLink :to="localePath(`/products/${prod.id}`)" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition block">
                        {{ prod.name[locale] }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- If category has only products (old format fallback) -->
              <div v-else-if="activeCategory?.products" class="grid grid-cols-2 gap-6">
                <div>
                  <h4 class="font-bold text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary cursor-default transition-colors mb-3 border-b border-gray-200 dark:border-gray-700 pb-1">{{ activeCategory.title[locale] }}</h4>
                  <ul class="space-y-2">
                    <li v-for="prod in activeCategory.products" :key="prod.id">
                      <NuxtLink :to="localePath(`/products/${prod.id}`)" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition block">
                        {{ prod.name[locale] }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NuxtLink :to="localePath('/contact')" class="hover:text-primary dark:hover:text-primary transition font-medium" active-class="text-primary">{{ t('contact') }}</NuxtLink>
      </nav>

      <!-- Actions (Language & Theme) -->
      <div class="flex items-center gap-4">
        <!-- Language Switcher -->
        <button @click="toggleLanguage" class="hover:text-primary transition font-medium border border-gray-300 dark:border-gray-600 px-3 py-1 rounded">
          {{ locale === 'ar' ? 'English' : 'العربية' }}
        </button>
        <!-- Dark Mode Toggle -->
        <ClientOnly>
          <button @click="toggleTheme()" class="hover:text-primary transition">
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
          <template #fallback>
            <div class="w-6 h-6"></div>
          </template>
        </ClientOnly>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import mockProducts from '@/data/products.json'

const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

const isDark = useDark()
const toggleTheme = useToggle(isDark)

const productsData = ref(mockProducts)
const activeCategory = ref(mockProducts[0] || null)

const toggleLanguage = () => {
  setLocale(locale.value === 'ar' ? 'en' : 'ar')
}

const t = (key) => {
  const translations = {
    home: { ar: 'الرئيسية', en: 'Home' },
    about: { ar: 'من نحن', en: 'About Us' },
    products: { ar: 'المنتجات', en: 'Products' },
    contact: { ar: 'تواصل معنا', en: 'Contact' }
  }
  return translations[key][locale.value]
}
</script>
