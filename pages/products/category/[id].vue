<template>
  <div class="py-12 md:py-20 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
    <div class="container mx-auto" v-if="category">
      
      <!-- Category Header Banner -->
      <div class="bg-[#121c2d] text-white rounded-3xl p-6 md:p-12 mb-12 shadow-2xl relative overflow-hidden" data-aos="fade-down">
        <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
        
        <div class="relative z-10">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <NuxtLink :to="localePath('/products')" class="inline-flex items-center gap-2 text-gray-400 hover:text-[#E99E15] transition font-semibold text-sm md:text-base">
              &larr; {{ locale === 'ar' ? 'العودة لجميع الأقسام' : 'Back to All Categories' }}
            </NuxtLink>
            <span class="bg-white/10 text-[#E99E15] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold border border-white/10">
              {{ category.title?.[locale] }}
            </span>
          </div>

          <h1 class="text-3xl md:text-5xl font-black mb-4 text-white">
            {{ category.title?.[locale] }}
          </h1>
          
          <div class="w-16 h-1 bg-[#E99E15] mb-6"></div>

          <p class="text-base md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            {{ category.description?.[locale] }}
          </p>
        </div>
      </div>

      <!-- Option A: Render Subcategories if present -->
      <div v-if="category.subcategories && category.subcategories.length" class="space-y-16">
        <div 
          v-for="sub in category.subcategories" 
          :key="sub.id"
          class="space-y-6"
          data-aos="fade-up"
        >
          <!-- Subcategory Title -->
          <div class="flex items-center gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
            <div class="w-3 h-8 bg-[#E99E15] rounded-full"></div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {{ sub.title?.[locale] }}
            </h2>
          </div>

          <!-- Subcategory Products Grid -->
          <div v-if="sub.products && sub.products.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div 
              v-for="(product, index) in sub.products" 
              :key="product.id" 
              class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group border border-gray-100 dark:border-gray-700 flex flex-col justify-between"
              :data-aos="'fade-up'" 
              :data-aos-delay="index * 80"
            >
              <div>
                <NuxtLink :to="localePath(`/products/${product.id}`)" class="block h-60 md:h-64 overflow-hidden relative bg-gray-100 dark:bg-gray-950 p-4">
                  <img 
                    :src="product.coverImage || product.images?.[0] || product.image" 
                    :alt="product.name?.[locale]" 
                    class="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                  >
                </NuxtLink>
                <div class="p-6">
                  <h3 class="font-bold text-xl md:text-2xl mb-3 text-gray-900 dark:text-white line-clamp-1">
                    <NuxtLink :to="localePath(`/products/${product.id}`)" class="hover:text-[#E99E15] transition">
                      {{ product.name?.[locale] }}
                    </NuxtLink>
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400 text-sm md:text-base line-clamp-3 leading-relaxed mb-4">
                    {{ product.description?.[locale] }}
                  </p>
                </div>
              </div>

              <div class="px-6 pb-6 pt-0">
                <NuxtLink 
                  :to="localePath(`/products/${product.id}`)" 
                  class="inline-flex items-center justify-center w-full bg-gray-900 dark:bg-gray-700 text-white py-3 px-4 rounded-xl font-bold hover:bg-[#E99E15] transition duration-300 shadow-md group-hover:shadow-lg text-sm md:text-base gap-2"
                >
                  <span>{{ locale === 'ar' ? 'عرض التفاصيل والخصائص' : 'View Details & Specs' }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Option B: Direct Category Products if present -->
      <div v-else-if="category.products && category.products.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div 
          v-for="(product, index) in category.products" 
          :key="product.id" 
          class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group border border-gray-100 dark:border-gray-700 flex flex-col justify-between"
          :data-aos="'fade-up'" 
          :data-aos-delay="index * 80"
        >
          <div>
            <NuxtLink :to="localePath(`/products/${product.id}`)" class="block h-60 md:h-64 overflow-hidden relative bg-gray-100 dark:bg-gray-950 p-4">
              <img 
                :src="product.coverImage || product.images?.[0] || product.image" 
                :alt="product.name?.[locale]" 
                class="w-full h-full object-contain group-hover:scale-105 transition duration-500"
              >
            </NuxtLink>
            <div class="p-6">
              <h3 class="font-bold text-xl md:text-2xl mb-3 text-gray-900 dark:text-white line-clamp-1">
                <NuxtLink :to="localePath(`/products/${product.id}`)" class="hover:text-[#E99E15] transition">
                  {{ product.name?.[locale] }}
                </NuxtLink>
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm md:text-base line-clamp-3 leading-relaxed mb-4">
                {{ product.description?.[locale] }}
              </p>
            </div>
          </div>

          <div class="px-6 pb-6 pt-0">
            <NuxtLink 
              :to="localePath(`/products/${product.id}`)" 
              class="inline-flex items-center justify-center w-full bg-gray-900 dark:bg-gray-700 text-white py-3 px-4 rounded-xl font-bold hover:bg-[#E99E15] transition duration-300 shadow-md group-hover:shadow-lg text-sm md:text-base gap-2"
            >
              <span>{{ locale === 'ar' ? 'عرض التفاصيل والخصائص' : 'View Details & Specs' }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Option C: Empty Category State (e.g. for Other Products) -->
      <div v-else class="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-16 text-center max-w-2xl mx-auto shadow-xl border border-gray-100 dark:border-gray-700" data-aos="fade-up">
        <div class="w-20 h-20 bg-[#E99E15]/10 text-[#E99E15] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {{ locale === 'ar' ? 'منتجات هذا القسم قيد التجهيز والإضافة قريباً' : 'Products for this category are being prepared' }}
        </h2>
        <p class="text-gray-500 dark:text-gray-400 mb-8 text-base md:text-lg">
          {{ locale === 'ar' ? 'يسعدنا تواصلك معنا مباشرة للاستفسار وطلب العروض الخاصة بمنتجات هذا القسم.' : 'Feel free to contact us directly for inquiries and special quotes for this category.' }}
        </p>
        <NuxtLink :to="localePath('/contact')" class="inline-block bg-[#E99E15] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition shadow-lg">
          {{ locale === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now' }}
        </NuxtLink>
      </div>

    </div>

    <!-- Category Not Found -->
    <div v-else class="container mx-auto text-center py-24">
      <h2 class="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6">
        {{ locale === 'ar' ? 'القسم غير موجود' : 'Category Not Found' }}
      </h2>
      <NuxtLink :to="localePath('/products')" class="bg-[#E99E15] text-white px-6 py-3 rounded-xl font-bold inline-block hover:bg-orange-600 transition">
        {{ locale === 'ar' ? 'العودة لجميع الأقسام' : 'Back to All Categories' }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import mockProducts from '@/data/products.json'

const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const category = ref(null)

const loadCategory = () => {
  const idStr = route.params.id
  category.value = mockProducts.find(c => c.id === idStr) || null
}

onMounted(() => {
  loadCategory()
})

watch(() => route.params.id, () => {
  loadCategory()
})
</script>
