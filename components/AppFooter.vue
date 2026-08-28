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
        <div class="space-y-3 mt-6 text-sm">
          <!-- 1. Commercial Registration & Trade License (Ministry of Commerce) -->
          <div class="flex items-center justify-between gap-3 bg-gray-800/80 px-3.5 py-2.5 rounded-xl border border-gray-700/70 shadow-sm hover:border-gray-600 transition">
            <div class="flex flex-col gap-1 min-w-0">
              <div class="flex items-center gap-1.5 text-xs">
                <span class="text-primary font-bold">{{ locale === 'ar' ? 'السجل التجاري:' : 'C.R:' }}</span>
                <span class="text-gray-200 font-mono font-semibold">248416</span>
              </div>
              <div class="flex items-center gap-1.5 text-xs">
                <span class="text-primary font-bold">{{ locale === 'ar' ? 'الرخصة التجارية:' : 'Trade License:' }}</span>
                <span class="text-gray-300 font-mono font-medium">337386</span>
              </div>
            </div>
            <div class="w-24 h-11 bg-white rounded-lg p-1 flex items-center justify-center flex-shrink-0 shadow-inner">
              <img 
                src="https://electrocreative-cdn.b-cdn.net/8d9318ba-ec36-4557-890f-eeecd8451ba7.jpg" 
                alt="Ministry of Commerce and Industry" 
                class="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <!-- 2. Tax Number (General Tax Authority) -->
          <div class="flex items-center justify-between gap-3 bg-gray-800/80 px-3.5 py-2.5 rounded-xl border border-gray-700/70 shadow-sm hover:border-gray-600 transition">
            <div class="flex flex-col gap-0.5 min-w-0">
              <span class="text-[11px] text-gray-400 font-medium leading-none">
                {{ locale === 'ar' ? 'الهيئة العامة للضرائب' : 'General Tax Authority' }}
              </span>
              <div class="flex items-center gap-1.5 text-xs mt-1">
                <span class="text-primary font-bold">{{ locale === 'ar' ? 'الرقم الضريبي:' : 'Tax No:' }}</span>
                <span class="text-gray-200 font-mono font-semibold">5009022658</span>
              </div>
            </div>
            <div class="w-24 h-11 bg-white rounded-lg p-1 flex items-center justify-center flex-shrink-0 shadow-inner">
              <img 
                src="https://electrocreative-cdn.b-cdn.net/24b4dcd0-51bf-4cf5-877e-27af4553d650.jpg" 
                alt="General Tax Authority" 
                class="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <!-- 3. Sabtech Official Agent Badge with Logo -->
          <div class="flex items-center justify-between gap-3 bg-gray-800/80 px-3.5 py-2.5 rounded-xl border border-gray-700/70 shadow-sm hover:border-gray-600 transition">
            <div class="flex flex-col min-w-0">
              <span class="text-[11px] text-gray-400 font-medium leading-tight">
                {{ locale === 'ar' ? 'الوكيل الحصري المعتمد في قطر' : 'Official Exclusive Agent in Qatar' }}
              </span>
              <span class="text-xs font-bold text-white flex items-center gap-1.5 mt-1">
                <span class="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0"></span>
                <span class="truncate">{{ locale === 'ar' ? 'شركة ساب تك' : 'SABTECH' }}</span>
              </span>
            </div>
            <div class="w-24 h-11 bg-white rounded-lg p-1 flex items-center justify-center flex-shrink-0 shadow-inner">
              <img 
                src="https://cdn-bdndb.nitrocdn.com/eIrOlccsLlNnvyQrPazdcVenFMvRQVpc/assets/images/optimized/rev-62ed56e/sabtech.com.sa/wp-content/uploads/2019/05/logo-03-1-1.png" 
                alt="SABTECH Logo" 
                class="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-xl font-bold text-white mb-4">{{ locale === 'ar' ? 'روابط سريعة' : 'Quick Links' }}</h3>
        <ul class="space-y-2">
          <li><NuxtLink :to="localePath('/')" class="hover:text-primary transition">{{ locale === 'ar' ? 'الرئيسية' : 'Home' }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/about')" class="hover:text-primary transition">{{ locale === 'ar' ? 'من نحن' : 'About Us' }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/services')" class="hover:text-primary transition">{{ locale === 'ar' ? 'الخدمات' : 'Services' }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/products')" class="hover:text-primary transition">{{ locale === 'ar' ? 'المنتجات' : 'Products' }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/training')" class="hover:text-primary transition">{{ locale === 'ar' ? 'التدريب' : 'Training' }}</NuxtLink></li>
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
