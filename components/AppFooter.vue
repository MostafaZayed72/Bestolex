<template>
  <footer class="bg-gray-900 text-gray-300 py-12">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div class="mb-4">
          <NuxtImg src="/logo-dark-transparent.png" alt="Bestolex Logo" class="h-12 object-contain" format="webp" loading="lazy" />
        </div>
        <p class="mb-4">
          {{ locale === 'ar' ? 'نحن متخصصون في توفير أفضل المعدات الصناعية وأبواب التحميل لعملائنا.' : 'We specialize in providing the best industrial equipment and loading doors to our clients.' }}
        </p>
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
const { locale } = useI18n()
const localePath = useLocalePath()
</script>
