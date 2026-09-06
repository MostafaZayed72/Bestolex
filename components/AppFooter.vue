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
        <div class="space-y-2.5 text-sm text-gray-400">
          <p class="flex items-center gap-2">
            <span class="text-primary font-bold">✉️</span>
            <a href="mailto:info@bestolex.com" class="hover:text-primary transition">info@bestolex.com</a>
          </p>
          <p class="flex items-center gap-2">
            <span class="text-primary font-bold">📞</span>
            <span dir="ltr" class="font-mono text-xs text-gray-300">+974 5070 8833 / +974 5150 5014</span>
          </p>
          <p class="flex items-center gap-2">
            <span class="text-green-500 font-bold">💬</span>
            <a href="https://wa.me/97451505015" target="_blank" rel="noopener noreferrer" class="hover:text-green-400 transition font-mono text-xs text-gray-300 flex items-center gap-1.5">
              <span>+974 5150 5015</span>
              <span class="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded">{{ locale === 'ar' ? 'واتساب' : 'WhatsApp' }}</span>
            </a>
          </p>
        </div>

        <!-- Social Media Links -->
        <div class="mt-6">
          <h4 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
            {{ locale === 'ar' ? 'تابعنا على وسائل التواصل' : 'Follow Us' }}
          </h4>
          <div class="flex items-center gap-3">
            <!-- WhatsApp -->
            <a 
              href="https://wa.me/97451505015" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl bg-gray-800 hover:bg-[#25D366] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 hover:shadow-green-500/30 group"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>

            <!-- Instagram -->
            <a 
              href="https://www.instagram.com/bestolex" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 hover:shadow-pink-500/30 group"
              title="Instagram"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <!-- Facebook -->
            <a 
              href="https://www.facebook.com/Bestolex" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl bg-gray-800 hover:bg-[#1877F2] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 hover:shadow-blue-500/30 group"
              title="Facebook"
              aria-label="Facebook"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
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
