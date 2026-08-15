<template>
  <div class="py-20 px-4 bg-white dark:bg-secondary min-h-screen">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold mb-4 text-center text-primary" data-aos="fade-up">
        {{ locale === 'ar' ? 'أقسام المنتجات' : 'Product Categories' }}
      </h1>
      <p class="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        {{ locale === 'ar' ? 'تصفح تشكيلة واسعة من المعدات والأنظمة الصناعية لتلبية كافة متطلباتك.' : 'Browse a wide range of industrial equipment and systems to meet all your requirements.' }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(category, index) in products" :key="category.id" class="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition group border border-transparent hover:border-primary" :data-aos="'fade-up'" :data-aos-delay="index * 100">
          <NuxtLink :to="localePath(`/products/category/${category.id}`)" class="block h-56 overflow-hidden relative">
            <img :src="category.image" :alt="category.title[locale]" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <h2 class="font-bold text-2xl text-white">{{ category.title[locale] }}</h2>
            </div>
          </NuxtLink>
          <div class="p-6">
            <p class="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">{{ category.description[locale] }}</p>
            <NuxtLink :to="localePath(`/products/category/${category.id}`)" class="inline-flex items-center gap-2 text-primary font-bold hover:text-orange-600 transition">
              {{ locale === 'ar' ? 'عرض منتجات القسم' : 'View Category Products' }} &rarr;
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import mockProducts from '@/data/products.json'

const { locale } = useI18n()
const localePath = useLocalePath()
const products = ref(mockProducts)
</script>
