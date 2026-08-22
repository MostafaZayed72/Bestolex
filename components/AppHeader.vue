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
        
        <!-- Products Mega Menu Dropdown (Desktop) -->
        <div class="relative group">
          <NuxtLink :to="localePath('/products')" class="hover:text-primary dark:hover:text-primary transition font-medium flex items-center gap-1" active-class="text-primary">
            {{ t('products') }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:rotate-180 duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </NuxtLink>
          
          <div class="absolute top-full rtl:right-0 ltr:left-0 mt-2 w-[720px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex overflow-hidden border border-gray-100 dark:border-gray-700 z-50">
            <!-- Left Side: Main Categories -->
            <div class="w-1/3 bg-white dark:bg-gray-800 py-3 border-l rtl:border-l rtl:border-r-0 ltr:border-r border-gray-100 dark:border-gray-700">
              <div
                v-for="category in productsData"
                :key="category.id"
                class="px-4 py-3 cursor-pointer flex justify-between items-center transition-colors group/item"
                :class="{ 'bg-gray-50 dark:bg-gray-700 text-primary': activeProductCategory?.id === category.id, 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary': activeProductCategory?.id !== category.id }"
                @mouseenter="activeProductCategory = category"
              >
                <NuxtLink :to="localePath(`/products/category/${category.id}`)" class="font-bold text-sm w-full text-start group-hover/item:text-primary transition-colors">
                  {{ category.title[locale] }}
                </NuxtLink>
                <span class="rtl:rotate-180 text-gray-400 group-hover/item:text-primary transition-colors text-xs opacity-70">
                  &rarr;
                </span>
              </div>
            </div>

            <!-- Right Side: Subcategories / Products -->
            <div class="w-2/3 p-6 bg-gray-50 dark:bg-gray-900 overflow-y-auto max-h-[420px]">
              <div v-if="activeProductCategory?.subcategories" class="grid grid-cols-2 gap-6">
                <div v-for="sub in activeProductCategory.subcategories" :key="sub.id">
                  <h4 class="font-black text-xs text-primary uppercase tracking-wider mb-2 border-b border-gray-200 dark:border-gray-700 pb-1">{{ sub.title[locale] }}</h4>
                  <ul class="space-y-1.5">
                    <li v-for="prod in sub.products" :key="prod.id">
                      <NuxtLink :to="localePath(`/products/${prod.id}`)" class="text-xs text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition block font-medium">
                        {{ prod.name[locale] }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div v-else-if="activeProductCategory?.products" class="grid grid-cols-2 gap-4">
                <div v-for="prod in activeProductCategory.products" :key="prod.id" class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                  <NuxtLink :to="localePath(`/products/${prod.id}`)" class="text-xs font-bold text-gray-800 dark:text-gray-200 hover:text-primary transition block">
                    {{ prod.name[locale] }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Services Dropdown (Desktop) -->
        <div class="relative group">
          <NuxtLink :to="localePath('/services')" class="hover:text-primary dark:hover:text-primary transition font-medium flex items-center gap-1" active-class="text-primary">
            {{ locale === 'ar' ? 'الخدمات' : 'Services' }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:rotate-180 duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </NuxtLink>

          <!-- Services Mega Dropdown -->
          <div class="absolute top-full rtl:right-0 ltr:left-0 mt-2 w-[580px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 z-50">
            <div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-700 mb-4">
              <div class="text-xs font-black uppercase tracking-wider text-primary">
                {{ locale === 'ar' ? 'خدماتنا الهندسية واللوجستية' : 'Engineering & Logistics Services' }}
              </div>
              <NuxtLink :to="localePath('/services')" class="text-xs font-bold text-gray-500 hover:text-primary transition">
                {{ locale === 'ar' ? 'عرض الكل &larr;' : 'View All &rarr;' }}
              </NuxtLink>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <NuxtLink 
                v-for="(service, sIdx) in servicesList" 
                :key="sIdx"
                :to="localePath('/services')"
                class="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/60 transition group/serv"
              >
                <div class="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg flex-shrink-0 group-hover/serv:bg-primary group-hover/serv:text-white transition">
                  {{ service.icon }}
                </div>
                <div>
                  <h4 class="font-bold text-xs text-gray-900 dark:text-white group-hover/serv:text-primary transition leading-snug">
                    {{ service.title[locale] }}
                  </h4>
                  <p class="text-[11px] text-gray-400 line-clamp-1 mt-0.5">
                    {{ service.desc[locale] }}
                  </p>
                </div>
              </NuxtLink>
            </div>

            <div class="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-xs bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl">
              <span class="text-gray-500 font-medium">
                {{ locale === 'ar' ? 'هل تحتاج إلى استشارة هندسية في موقعك؟' : 'Need an on-site engineering consultation?' }}
              </span>
              <button @click="isBookingModalOpen = true" class="text-primary font-bold hover:underline">
                {{ locale === 'ar' ? 'حجز موعد الآن' : 'Book Now' }}
              </button>
            </div>
          </div>
        </div>

        <!-- Blog Multi-Level Dropdown (Desktop) -->
        <div class="relative group">
          <NuxtLink :to="localePath('/blog')" class="hover:text-primary dark:hover:text-primary transition font-medium flex items-center gap-1" active-class="text-primary">
            {{ locale === 'ar' ? 'المدونة' : 'Blog' }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:rotate-180 duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </NuxtLink>

          <!-- Blog Multi-Level Flyout / Mega Dropdown -->
          <div class="absolute top-full rtl:right-0 ltr:left-0 mt-2 w-[760px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex overflow-hidden border border-gray-100 dark:border-gray-700 z-50">
            <!-- Left Side: Categories List -->
            <div class="w-2/5 bg-white dark:bg-gray-800 py-3 border-l rtl:border-l rtl:border-r-0 ltr:border-r border-gray-100 dark:border-gray-700 flex flex-col justify-between">
              <div>
                <div class="px-4 pb-2 text-[11px] font-black text-gray-400 uppercase tracking-wider">
                  {{ locale === 'ar' ? 'أقسام المقالات' : 'Article Categories' }}
                </div>
                <div
                  v-for="cat in blogCategories"
                  :key="cat.name_ar"
                  class="px-4 py-3 cursor-pointer flex justify-between items-center transition-colors group/bcat"
                  :class="{ 
                    'bg-primary/10 text-primary font-bold border-r-2 rtl:border-r-2 rtl:border-l-0 ltr:border-l-2 border-primary': activeBlogCategory === cat.name_ar, 
                    'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-primary font-medium': activeBlogCategory !== cat.name_ar 
                  }"
                  @mouseenter="activeBlogCategory = cat.name_ar"
                >
                  <div class="flex items-center gap-2">
                    <span class="text-xs">🏷️</span>
                    <span class="text-xs">{{ locale === 'ar' ? cat.name_ar : (cat.name_en || cat.name_ar) }}</span>
                  </div>
                  <span class="text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">
                    {{ getCategoryArticles(cat.name_ar).length }}
                  </span>
                </div>
              </div>

              <!-- View All Articles Link -->
              <div class="p-3 border-t border-gray-100 dark:border-gray-700 mt-2">
                <NuxtLink :to="localePath('/blog')" class="flex items-center justify-between text-xs font-bold text-primary hover:underline px-2">
                  <span>{{ locale === 'ar' ? 'تصفح كافة المقالات' : 'Browse All Articles' }}</span>
                  <span class="rtl:rotate-180">&rarr;</span>
                </NuxtLink>
              </div>
            </div>

            <!-- Right Side: Sub-Articles for the Selected Category -->
            <div class="w-3/5 p-5 bg-gray-50 dark:bg-gray-900 overflow-y-auto max-h-[440px] flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-800 mb-3">
                  <h4 class="text-xs font-bold text-gray-900 dark:text-white">
                    {{ locale === 'ar' ? `مقالات قسم: ${activeBlogCategory}` : `Articles in: ${activeBlogCategory}` }}
                  </h4>
                  <span class="text-[11px] text-gray-400 font-mono">
                    {{ getCategoryArticles(activeBlogCategory).length }} {{ locale === 'ar' ? 'مقالات' : 'articles' }}
                  </span>
                </div>

                <!-- Articles Cards List -->
                <div v-if="getCategoryArticles(activeBlogCategory).length > 0" class="space-y-2.5">
                  <NuxtLink
                    v-for="art in getCategoryArticles(activeBlogCategory)"
                    :key="art.id"
                    :to="localePath(`/blog/${art.id}`)"
                    class="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition flex items-center gap-3 group/art shadow-sm hover:shadow"
                  >
                    <img 
                      :src="art.image" 
                      class="w-12 h-12 rounded-lg object-cover flex-shrink-0 bg-gray-100 dark:bg-gray-700 group-hover/art:scale-105 transition"
                    >
                    <div class="flex-1 min-w-0">
                      <h5 class="text-xs font-bold text-gray-900 dark:text-white group-hover/art:text-primary transition line-clamp-1">
                        {{ art.title?.[locale] || art.title_ar }}
                      </h5>
                      <div class="flex items-center gap-2 text-[10px] text-gray-400 mt-1">
                        <span>📅 {{ art.date }}</span>
                        <span>•</span>
                        <span>⏱️ {{ art.readTime?.[locale] || art.read_time_ar || '5 دقائق' }}</span>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
                <div v-else class="py-12 text-center text-xs text-gray-400">
                  {{ locale === 'ar' ? 'لا توجد مقالات مضافة في هذا القسم حالياً.' : 'No articles in this category currently.' }}
                </div>
              </div>
            </div>
          </div>
        </div>

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
      <nav class="flex flex-col gap-5 text-base font-bold mb-8 flex-grow">
        <NuxtLink @click="isMobileMenuOpen = false" :to="localePath('/')" class="hover:text-primary transition" active-class="text-primary">{{ t('home') }}</NuxtLink>
        <NuxtLink @click="isMobileMenuOpen = false" :to="localePath('/about')" class="hover:text-primary transition" active-class="text-primary">{{ t('about') }}</NuxtLink>
        
        <!-- Mobile Products Accordion -->
        <div class="border-y border-gray-100 dark:border-gray-800 py-3">
          <div class="flex items-center justify-between cursor-pointer" @click="toggleMobileProducts">
            <span :class="{'text-primary': isMobileProductsOpen}">{{ t('products') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform" :class="{'rotate-180': isMobileProductsOpen}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div v-show="isMobileProductsOpen" class="mt-3 space-y-2 ltr:pl-4 rtl:pr-4 border-l-2 rtl:border-l-0 rtl:border-r-2 border-primary/30">
            <div v-for="category in productsData" :key="category.id" class="border-b border-gray-100 dark:border-gray-800 last:border-0 pb-2 last:pb-0">
              <div 
                class="flex items-center justify-between cursor-pointer py-2 font-bold text-xs text-gray-800 dark:text-gray-200"
                @click="expandedMobileCategoryId = expandedMobileCategoryId === category.id ? null : category.id"
              >
                <span :class="{'text-primary': expandedMobileCategoryId === category.id}">{{ category.title[locale] }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" :class="{'rotate-180': expandedMobileCategoryId === category.id}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div v-show="expandedMobileCategoryId === category.id" class="pt-2 pb-3 space-y-3">
                <div v-if="category.subcategories" class="ltr:pl-3 rtl:pr-3 space-y-3 border-l-2 rtl:border-l-0 rtl:border-r-2 border-gray-200 dark:border-gray-700">
                  <div v-for="sub in category.subcategories" :key="sub.id">
                    <div class="text-xs font-bold text-primary mb-1">{{ sub.title[locale] }}</div>
                    <div class="space-y-1.5 ltr:pl-2 rtl:pr-2">
                      <NuxtLink @click="isMobileMenuOpen = false" v-for="prod in sub.products" :key="prod.id" :to="localePath(`/products/${prod.id}`)" class="block text-xs text-gray-600 dark:text-gray-400 hover:text-primary">
                        {{ prod.name[locale] }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>
                <div v-else-if="category.products" class="ltr:pl-3 rtl:pr-3 space-y-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-gray-200 dark:border-gray-700">
                  <NuxtLink @click="isMobileMenuOpen = false" v-for="prod in category.products" :key="prod.id" :to="localePath(`/products/${prod.id}`)" class="block text-xs text-gray-600 dark:text-gray-400 hover:text-primary">
                    {{ prod.name[locale] }}
                  </NuxtLink>
                </div>
                
                <NuxtLink @click="isMobileMenuOpen = false" :to="localePath(`/products/category/${category.id}`)" class="block ltr:pl-3 rtl:pr-3 text-xs font-bold text-primary hover:underline mt-2">
                  {{ locale === 'ar' ? 'عرض كل منتجات القسم &larr;' : 'View all category products &rarr;' }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Services Accordion -->
        <div class="border-b border-gray-100 dark:border-gray-800 pb-3">
          <div class="flex items-center justify-between cursor-pointer" @click="isMobileServicesOpen = !isMobileServicesOpen">
            <span :class="{'text-primary': isMobileServicesOpen}">{{ locale === 'ar' ? 'الخدمات' : 'Services' }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform" :class="{'rotate-180': isMobileServicesOpen}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div v-show="isMobileServicesOpen" class="mt-3 space-y-2 ltr:pl-4 rtl:pr-4 border-l-2 rtl:border-l-0 rtl:border-r-2 border-primary/30">
            <NuxtLink 
              v-for="(service, sIdx) in servicesList" 
              :key="sIdx"
              @click="isMobileMenuOpen = false"
              :to="localePath('/services')"
              class="block py-1.5 text-xs text-gray-700 dark:text-gray-300 hover:text-primary font-medium"
            >
              {{ service.icon }} {{ service.title[locale] }}
            </NuxtLink>
            <NuxtLink @click="isMobileMenuOpen = false" :to="localePath('/services')" class="block text-xs font-bold text-primary pt-2 hover:underline">
              {{ locale === 'ar' ? 'عرض كافة الخدمات &larr;' : 'View all services &rarr;' }}
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile Blog Multi-Level Accordion -->
        <div class="border-b border-gray-100 dark:border-gray-800 pb-3">
          <div class="flex items-center justify-between cursor-pointer" @click="isMobileBlogOpen = !isMobileBlogOpen">
            <span :class="{'text-primary': isMobileBlogOpen}">{{ locale === 'ar' ? 'المدونة' : 'Blog' }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform" :class="{'rotate-180': isMobileBlogOpen}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div v-show="isMobileBlogOpen" class="mt-3 space-y-2 ltr:pl-4 rtl:pr-4 border-l-2 rtl:border-l-0 rtl:border-r-2 border-primary/30">
            <div v-for="cat in blogCategories" :key="cat.name_ar" class="border-b border-gray-100 dark:border-gray-800 last:border-0 pb-2">
              <div 
                class="flex items-center justify-between cursor-pointer py-1.5 font-bold text-xs text-gray-800 dark:text-gray-200"
                @click="expandedMobileBlogCat = expandedMobileBlogCat === cat.name_ar ? null : cat.name_ar"
              >
                <span>🏷️ {{ locale === 'ar' ? cat.name_ar : (cat.name_en || cat.name_ar) }}</span>
                <span class="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">{{ getCategoryArticles(cat.name_ar).length }}</span>
              </div>
              
              <!-- Sub-articles -->
              <div v-show="expandedMobileBlogCat === cat.name_ar" class="pt-2 pb-1 space-y-2 ltr:pl-3 rtl:pr-3 border-l-2 rtl:border-l-0 rtl:border-r-2 border-gray-200 dark:border-gray-700">
                <NuxtLink 
                  v-for="art in getCategoryArticles(cat.name_ar)" 
                  :key="art.id" 
                  @click="isMobileMenuOpen = false" 
                  :to="localePath(`/blog/${art.id}`)" 
                  class="block text-xs text-gray-600 dark:text-gray-400 hover:text-primary"
                >
                  • {{ art.title?.[locale] || art.title_ar }}
                </NuxtLink>
              </div>
            </div>

            <NuxtLink @click="isMobileMenuOpen = false" :to="localePath('/blog')" class="block text-xs font-bold text-primary pt-2 hover:underline">
              {{ locale === 'ar' ? 'تصفح كافة المقالات &larr;' : 'Browse all articles &rarr;' }}
            </NuxtLink>
          </div>
        </div>

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
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import mockProducts from '@/data/products.json'
import mockArticles from '@/data/articles.json'
import mockCategories from '@/data/categories.json'

const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const router = useRouter()

const isDark = useDark()
const toggleTheme = useToggle(isDark)

// Products Data
const productsData = ref(mockProducts)
const activeProductCategory = ref(mockProducts[0] || null)

// Blog Data & Multi-Level Dropdown
const blogArticles = ref(mockArticles)
const blogCategories = ref(mockCategories)
const activeBlogCategory = ref(mockCategories[0]?.name_ar || 'النظم الهيدروليكية')

// Services List
const servicesList = [
  { icon: '📋', title: { ar: 'دراسة الاحتياج والمعاينة', en: 'Requirement Assessment & Survey' }, desc: { ar: 'معاينة ميدانية وتقارير فنية دقيقة', en: 'Site survey & engineering reports' } },
  { icon: '💡', title: { ar: 'المقترح الفني والتجاري', en: 'Technical & Commercial Proposal' }, desc: { ar: 'اختيار الحل الهندسي الأنسب ومطابقة المواصفات', en: 'Optimal engineering solutions' } },
  { icon: '📦', title: { ar: 'التوريد والاعتماد الهندسي', en: 'Supply & Engineering Approval' }, desc: { ar: 'توريد معتمد من كبرى المصانع العالمية', en: 'Certified supply from top manufacturers' } },
  { icon: '🛠️', title: { ar: 'التركيب والإشراف الفني', en: 'Installation & Supervision' }, desc: { ar: 'تنفيذ ميداني بأيدي مهندسين معتمدين', en: 'Certified on-site engineering execution' } },
  { icon: '⚙️', title: { ar: 'التشغيل التجريبي والتدريب', en: 'Commissioning & Training' }, desc: { ar: 'فحص أنظمة الأمان وتدريب الكوادر', en: 'Safety checks & staff training' } },
  { icon: '🤝', title: { ar: 'الصيانة الوقائية وقطع الغيار', en: 'Preventive Maintenance' }, desc: { ar: 'عقود صيانة دورية واستجابة طارئة', en: 'Periodic maintenance & emergency support' } }
]

const getCategoryArticles = (catNameAr) => {
  return blogArticles.value.filter(a => {
    const artCat = a.category?.ar || a.category_ar || a.category
    return artCat === catNameAr
  })
}

// Fetch live articles & categories if available
onMounted(async () => {
  try {
    const [arts, cats] = await Promise.all([
      $fetch('/api/blog'),
      $fetch('/api/blog/categories')
    ])
    if (arts && arts.length) blogArticles.value = arts
    if (cats && cats.length) {
      blogCategories.value = cats
      activeBlogCategory.value = cats[0].name_ar
    }
  } catch (err) {}
})

// Mobile Menu State
const isMobileMenuOpen = ref(false)
const isMobileProductsOpen = ref(false)
const isMobileServicesOpen = ref(false)
const isMobileBlogOpen = ref(false)
const expandedMobileCategoryId = ref(null)
const expandedMobileBlogCat = ref(null)

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
