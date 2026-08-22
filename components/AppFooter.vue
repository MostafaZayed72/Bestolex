<template>
  <footer class="bg-gray-900 text-gray-300 py-12">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <div class="mb-4">
          <NuxtImg src="/logo-dark-transparent.png" alt="Bestolex Logo" class="h-12 object-contain" format="webp" loading="lazy" />
        </div>
        <p class="mb-4 text-gray-400 leading-relaxed">
          {{ locale === 'ar' ? 'شركة قطرية متخصصة في حلول المعدات الثقيلة واللوجستيات' : 'A Qatari company specialized in heavy equipment and logistics solutions' }}
        </p>
        <div class="space-y-2 mt-6 text-sm">
          <div class="flex items-center gap-2"><span class="text-primary font-bold">{{ locale === 'ar' ? 'سجل تجاري:' : 'C.R:' }}</span><span class="text-gray-300 tabular-nums">248416</span></div>
          <div class="flex items-center gap-2"><span class="text-primary font-bold">{{ locale === 'ar' ? 'الرخصة التجارية:' : 'Trade License:' }}</span><span class="text-gray-300 tabular-nums">337386</span></div>
          <div class="flex items-center gap-2"><span class="text-primary font-bold">{{ locale === 'ar' ? 'الرقم الضريبي:' : 'Tax No:' }}</span><span class="text-gray-300 tabular-nums">5009022658</span></div>
        </div>

        <div class="mt-6 inline-flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg border border-gray-700">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span class="text-sm font-medium text-gray-300">
            {{ locale === 'ar' ? 'الوكيل الحصري لشركة SABTECH في قطر' : 'Exclusive agent for SABTECH in Qatar' }}
          </span>
        </div>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white mb-4">{{ locale === 'ar' ? 'روابط سريعة' : 'Quick Links' }}</h3>
        <ul class="space-y-2">
          <li><NuxtLink :to="localePath('/')" class="hover:text-primary transition">{{ locale === 'ar' ? 'الرئيسية' : 'Home' }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/about')" class="hover:text-primary transition">{{ locale === 'ar' ? 'من نحن' : 'About Us' }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/services')" class="hover:text-primary transition">{{ locale === 'ar' ? 'الخدمات' : 'Services' }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/products')" class="hover:text-primary transition">{{ locale === 'ar' ? 'المنتجات' : 'Products' }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/privacy')" class="hover:text-primary transition">{{ locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy' }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/contact')" class="hover:text-primary transition">{{ locale === 'ar' ? 'تواصل معنا' : 'Contact' }}</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white mb-4">{{ locale === 'ar' ? 'المنتجات' : 'Products' }}</h3>
        <ul class="space-y-2">
          <li v-for="category in categories" :key="category.id">
            <NuxtLink :to="localePath(`/products/category/${category.id}`)" class="hover:text-primary transition">{{ category.title[locale] }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white mb-4">{{ locale === 'ar' ? 'تواصل معنا' : 'Contact Us' }}</h3>
        <p>Email: info@bestolex.com</p>
        <p>Phone: +974 5070 8833 / +974 5150 5014</p>
      </div>
    </div>
    <div class="text-center mt-12 pt-8 border-t border-gray-800 text-gray-500">
      &copy; {{ new Date().getFullYear() }} Bestolex. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import mockProducts from '@/data/products.json'

const { locale } = useI18n()
const localePath = useLocalePath()

const categories = mockProducts.slice(0, 5)
</script>
