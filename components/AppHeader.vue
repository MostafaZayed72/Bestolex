<template>
  <header class="bg-white dark:bg-secondary text-gray-900 dark:text-white shadow-md sticky top-0 z-50 transition-colors duration-300">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="flex items-center gap-2 z-50 relative">
        <NuxtImg src="/logo.png" alt="Bestolex Logo" class="h-10 md:h-12 object-contain dark:hidden" format="webp" loading="eager" />
        <NuxtImg src="/logo-dark-transparent.png" alt="Bestolex Logo" class="h-10 md:h-12 object-contain hidden dark:block" format="webp" loading="eager" />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-6">
        <NuxtLink :to="localePath('/')" class="hover:text-primary dark:hover:text-primary transition font-medium" active-class="text-primary">{{ t('home') }}</NuxtLink>
        <NuxtLink :to="localePath('/about')" class="hover:text-primary dark:hover:text-primary transition font-medium" active-class="text-primary">{{ t('about') }}</NuxtLink>
        
        <!-- Products Dropdown (Desktop) -->
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
              <div v-if="activeCategory?.subcategories" class="grid grid-cols-2 lg:grid-cols-3 gap-6">
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

        <NuxtLink :to="localePath('/services')" class="hover:text-primary dark:hover:text-primary transition font-medium" active-class="text-primary">{{ locale === 'ar' ? 'الخدمات' : 'Services' }}</NuxtLink>
        <NuxtLink :to="localePath('/blog')" class="hover:text-primary dark:hover:text-primary transition font-medium" active-class="text-primary">{{ locale === 'ar' ? 'المدونة' : 'Blog' }}</NuxtLink>
        <NuxtLink :to="localePath('/contact')" class="hover:text-primary dark:hover:text-primary transition font-medium" active-class="text-primary">{{ t('contact') }}</NuxtLink>
      </nav>

      <!-- Desktop Actions (Language & Theme) -->
      <div class="hidden md:flex items-center gap-4">
        <button @click="isBookingModalOpen = true" class="group flex items-center gap-2 bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-2 px-5 rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{{ locale === 'ar' ? 'حجز موعد' : 'Book Appointment' }}</span>
        </button>
        <button @click="toggleLanguage" class="hover:text-primary transition font-medium border border-gray-300 dark:border-gray-600 px-3 py-1 rounded">
          {{ locale === 'ar' ? 'English' : 'العربية' }}
        </button>
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

      <!-- Mobile Hamburger Button -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-primary transition z-50 relative">
        <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div 
      class="fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 pb-6 px-6 overflow-y-auto"
      :class="isMobileMenuOpen ? 'translate-x-0' : (locale === 'ar' ? 'translate-x-full' : '-translate-x-full')"
    >
      <!-- Navigation Links -->
      <nav class="flex flex-col gap-6 text-lg font-bold mb-8 flex-grow">
        <NuxtLink @click="isMobileMenuOpen = false" :to="localePath('/')" class="hover:text-primary transition" active-class="text-primary">{{ t('home') }}</NuxtLink>
        <NuxtLink @click="isMobileMenuOpen = false" :to="localePath('/about')" class="hover:text-primary transition" active-class="text-primary">{{ t('about') }}</NuxtLink>
        
        <!-- Mobile Products Accordion -->
        <div class="border-y border-gray-100 dark:border-gray-800 py-4">
          <div class="flex items-center justify-between cursor-pointer" @click="toggleMobileProducts">
            <span :class="{'text-primary': isMobileProductsOpen}">{{ t('products') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform" :class="{'rotate-180': isMobileProductsOpen}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div v-show="isMobileProductsOpen" class="mt-4 space-y-2 ltr:pl-4 rtl:pr-4 border-l-2 rtl:border-l-0 rtl:border-r-2 border-primary/30">
            <div v-for="category in productsData" :key="category.id" class="border-b border-gray-100 dark:border-gray-800 last:border-0 pb-2 last:pb-0">
              <div 
                class="flex items-center justify-between cursor-pointer py-2 font-bold text-gray-800 dark:text-gray-200"
                @click="expandedMobileCategoryId = expandedMobileCategoryId === category.id ? null : category.id"
              >
                <span :class="{'text-primary': expandedMobileCategoryId === category.id}">{{ category.title[locale] }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" :class="{'rotate-180': expandedMobileCategoryId === category.id}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <!-- Subcategories / Products (Nested Accordion Content) -->
              <div v-show="expandedMobileCategoryId === category.id" class="pt-2 pb-3 space-y-4">
                <div v-if="category.subcategories" class="ltr:pl-4 rtl:pr-4 space-y-4 border-l-2 rtl:border-l-0 rtl:border-r-2 border-gray-200 dark:border-gray-700">
                  <div v-for="sub in category.subcategories" :key="sub.id">
                    <div class="text-sm font-bold text-primary mb-2">{{ sub.title[locale] }}</div>
                    <div class="space-y-2 ltr:pl-2 rtl:pr-2">
                      <NuxtLink @click="isMobileMenuOpen = false" v-for="prod in sub.products" :key="prod.id" :to="localePath(`/products/${prod.id}`)" class="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary">
                        {{ prod.name[locale] }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>
                <div v-else-if="category.products" class="ltr:pl-4 rtl:pr-4 space-y-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-gray-200 dark:border-gray-700">
                  <NuxtLink @click="isMobileMenuOpen = false" v-for="prod in category.products" :key="prod.id" :to="localePath(`/products/${prod.id}`)" class="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary">
                    {{ prod.name[locale] }}
                  </NuxtLink>
                </div>
                
                <NuxtLink @click="isMobileMenuOpen = false" :to="localePath(`/products/category/${category.id}`)" class="block ltr:pl-4 rtl:pr-4 text-sm font-bold text-primary hover:underline mt-2">
                  {{ locale === 'ar' ? 'عرض كل منتجات القسم' : 'View all category products' }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <NuxtLink @click="isMobileMenuOpen = false" :to="localePath('/services')" class="hover:text-primary transition" active-class="text-primary">{{ locale === 'ar' ? 'الخدمات' : 'Services' }}</NuxtLink>
        <NuxtLink @click="isMobileMenuOpen = false" :to="localePath('/blog')" class="hover:text-primary transition" active-class="text-primary">{{ locale === 'ar' ? 'المدونة' : 'Blog' }}</NuxtLink>
        <NuxtLink @click="isMobileMenuOpen = false" :to="localePath('/contact')" class="hover:text-primary transition" active-class="text-primary">{{ t('contact') }}</NuxtLink>
      </nav>

      <!-- Mobile Actions (Language & Theme) -->
      <div class="flex flex-col gap-4 mt-auto">
        <button @click="openBookingModalMobile" class="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white py-3 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{{ locale === 'ar' ? 'حجز موعد' : 'Book Appointment' }}</span>
        </button>
        
        <button @click="toggleLanguage" class="w-full flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-700 py-3 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          {{ locale === 'ar' ? 'English' : 'العربية' }}
        </button>
        
        <ClientOnly>
          <button @click="toggleTheme()" class="w-full flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-700 py-3 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition">
            <template v-if="isDark">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>{{ locale === 'ar' ? 'الوضع النهاري' : 'Light Mode' }}</span>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <span>{{ locale === 'ar' ? 'الوضع الليلي' : 'Dark Mode' }}</span>
            </template>
          </button>
          <template #fallback>
            <div class="h-12 w-full"></div>
          </template>
        </ClientOnly>
      </div>
    </div>

    <!-- Booking Modal -->
    <BookAppointmentModal :is-open="isBookingModalOpen" @close="isBookingModalOpen = false" />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import mockProducts from '@/data/products.json'

const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const router = useRouter()

const isDark = useDark()
const toggleTheme = useToggle(isDark)

const productsData = ref(mockProducts)
const activeCategory = ref(mockProducts[0] || null)

// Mobile Menu State
const isMobileMenuOpen = ref(false)
const isMobileProductsOpen = ref(false)
const expandedMobileCategoryId = ref(null)

// Booking Modal State
const isBookingModalOpen = ref(false)

const openBookingModalMobile = () => {
  isBookingModalOpen.value = true
  isMobileMenuOpen.value = false
}

// Close mobile menu on route change
router.afterEach(() => {
  isMobileMenuOpen.value = false
})

const toggleMobileProducts = () => {
  isMobileProductsOpen.value = !isMobileProductsOpen.value
}

const toggleLanguage = () => {
  setLocale(locale.value === 'ar' ? 'en' : 'ar')
  isMobileMenuOpen.value = false
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
