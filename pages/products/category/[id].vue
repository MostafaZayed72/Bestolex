<template>
  <div class="py-20 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="container mx-auto" v-if="category">
      <div class="mb-8 flex justify-between items-center">
        <h1 class="text-4xl font-bold text-primary" data-aos="fade-up">{{ category.title[locale] }}</h1>
        <NuxtLink :to="localePath('/products')" class="text-gray-500 hover:text-primary transition flex items-center gap-2">
          &larr; {{ locale === 'ar' ? 'العودة لجميع الأقسام' : 'Back to All Categories' }}
        </NuxtLink>
      </div>
      
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
        {{ category.description[locale] }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(product, index) in category.products" :key="product.id" class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group" :data-aos="'fade-up'" :data-aos-delay="index * 100">
          <NuxtLink :to="localePath(`/products/${product.id}`)" class="block h-64 overflow-hidden relative">
            <img :src="product.image" :alt="product.name[locale]" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
            <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition"></div>
          </NuxtLink>
          <div class="p-6">
            <h3 class="font-bold text-2xl mb-3 text-gray-800 dark:text-white">
              <NuxtLink :to="localePath(`/products/${product.id}`)" class="hover:text-primary transition">{{ product.name[locale] }}</NuxtLink>
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">{{ product.description[locale] }}</p>
            <NuxtLink :to="localePath(`/products/${product.id}`)" class="inline-block w-full text-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition shadow">
              {{ locale === 'ar' ? 'عرض التفاصيل' : 'View Details' }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="container mx-auto text-center py-20">
      <h2 class="text-2xl font-bold text-gray-500">{{ locale === 'ar' ? 'جاري التحميل أو القسم غير موجود...' : 'Loading or Category not found...' }}</h2>
      <NuxtLink :to="localePath('/products')" class="text-primary mt-4 inline-block">{{ locale === 'ar' ? 'العودة لجميع الأقسام' : 'Back to All Categories' }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import mockProducts from '@/data/products.json'

const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const category = ref(null)

onMounted(() => {
  const idStr = route.params.id
  category.value = mockProducts.find(c => c.id === idStr)
})
</script>
