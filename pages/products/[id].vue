<template>
  <div class="product-page bg-white dark:bg-[#0d0d0d] min-h-screen transition-colors duration-500">
    
    <!-- ═══════════════════════════════════════════════════════
         HERO SECTION - Full Width Cinematic Banner
    ═══════════════════════════════════════════════════════ -->
    <section class="relative min-h-screen flex items-center overflow-hidden" v-if="product">
      <!-- Animated Background -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 hero-gradient"></div>
        <div class="hero-particles"></div>
        <!-- Diagonal line decorations -->
        <div class="absolute top-0 right-0 w-1/2 h-full opacity-10 overflow-hidden">
          <div class="diagonal-lines"></div>
        </div>
      </div>

      <!-- Content -->
      <div class="container mx-auto px-4 md:px-12 py-24 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <!-- Left Info -->
          <div class="lg:w-1/2 text-white" data-aos="fade-right" data-aos-duration="900">
            <!-- Breadcrumb -->
            <div class="flex items-center gap-2 mb-8 opacity-70 text-sm flex-wrap">
              <NuxtLink :to="localePath('/')" class="hover:opacity-100 transition">{{ locale === 'ar' ? 'الرئيسية' : 'Home' }}</NuxtLink>
              <span class="opacity-50">/</span>
              <NuxtLink :to="localePath('/products')" class="hover:opacity-100 transition">{{ locale === 'ar' ? 'المنتجات' : 'Products' }}</NuxtLink>
              <span class="opacity-50">/</span>
              <span class="text-primary font-semibold">{{ product.name[locale] }}</span>
            </div>

            <!-- Category Badge -->
            <div class="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary rounded-full px-4 py-2 text-sm font-bold mb-6 backdrop-blur-sm" data-aos="fade-right" data-aos-delay="100">
              <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              {{ product.categoryTitle?.[locale] || (locale === 'ar' ? 'مكبس' : 'Baler') }}
            </div>

            <h1 class="text-4xl md:text-6xl xl:text-7xl font-black leading-tight mb-6" data-aos="fade-right" data-aos-delay="150">
              {{ product.name[locale] }}
            </h1>

            <div class="h-1 w-24 bg-gradient-to-r from-primary to-orange-400 rounded-full mb-8" data-aos="fade-right" data-aos-delay="200"></div>

            <p class="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl" data-aos="fade-right" data-aos-delay="250">
              {{ product.description ? product.description[locale] : '' }}
            </p>

            <!-- Stats Row -->
            <div class="grid grid-cols-3 gap-4 mb-10" data-aos="fade-up" data-aos-delay="300">
              <div class="stat-card text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <div class="text-3xl font-black text-primary mb-1">100</div>
                <div class="text-xs text-gray-400 font-medium">{{ locale === 'ar' ? 'طن ضغط' : 'Ton Press' }}</div>
              </div>
              <div class="stat-card text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <div class="text-3xl font-black text-primary mb-1">100%</div>
                <div class="text-xs text-gray-400 font-medium">{{ locale === 'ar' ? 'أمان' : 'Safety' }}</div>
              </div>
              <div class="stat-card text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <div class="text-3xl font-black text-primary mb-1">24/7</div>
                <div class="text-xs text-gray-400 font-medium">{{ locale === 'ar' ? 'دعم فني' : 'Support' }}</div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="350">
              <button @click="scrollToQuote" class="cta-btn-primary relative overflow-hidden px-10 py-4 rounded-2xl font-bold text-white text-lg group flex items-center gap-3 shadow-lg shadow-primary/30">
                <span class="relative z-10 flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  {{ locale === 'ar' ? 'طلب عرض سعر' : 'Request a Quote' }}
                </span>
              </button>
              <a v-if="product.pdf" :href="product.pdf" target="_blank" class="px-10 py-4 rounded-2xl font-bold text-white text-lg flex items-center gap-3 bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 group">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                {{ locale === 'ar' ? 'تحميل الكتيب' : 'Download Brochure' }}
              </a>
            </div>
          </div>

          <!-- Right - 3D Floating Product Image -->
          <div class="lg:w-1/2 flex items-center justify-center" data-aos="zoom-in" data-aos-duration="1000">
            <div class="product-3d-card relative">
              <div class="product-glow-ring"></div>
              <div class="product-floating-card">
                <img
                  v-if="product.images && product.images.length > 0"
                  :src="product.images[currentImageIndex]"
                  :alt="product.name[locale]"
                  class="w-full h-full object-contain drop-shadow-2xl"
                />
                <img v-else-if="product.image" :src="product.image" :alt="product.name[locale]" class="w-full h-full object-contain drop-shadow-2xl" />
              </div>
              <!-- Image Thumbnails -->
              <div v-if="product.images && product.images.length > 1" class="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                <button v-for="(img, idx) in product.images" :key="idx" @click="setImage(idx)"
                  :class="['w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-110 bg-white/10 backdrop-blur-sm', currentImageIndex === idx ? 'border-primary scale-110 shadow-lg shadow-primary/40' : 'border-white/20']">
                  <img :src="img" :alt="'Image ' + (idx+1)" class="w-full h-full object-cover" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce">
        <span class="text-xs">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
      </div>
    </section>

    <div v-if="product">
      <!-- ═══════════════════════════════════════════════════════
           FEATURES SECTION - Premium Cards
      ═══════════════════════════════════════════════════════ -->
      <section class="py-24 bg-gray-50 dark:bg-[#111] transition-colors duration-500 relative overflow-hidden">
        <!-- Section BG accent -->
        <div class="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div class="container mx-auto px-4 md:px-12">
          <div class="text-center mb-16" data-aos="fade-up">
            <div class="inline-block bg-primary/10 text-primary font-bold px-6 py-2 rounded-full text-sm mb-4 border border-primary/20">
              {{ locale === 'ar' ? '⚡ الإمكانيات' : '⚡ Capabilities' }}
            </div>
            <h2 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              {{ locale === 'ar' ? 'لماذا مكبس 100 طن؟' : 'Why the 100T Baler?' }}
            </h2>
            <p class="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">
              {{ locale === 'ar' ? 'تقنية ألمانية متطورة بمعايير أمان عالمية' : 'Advanced technology with global safety standards' }}
            </p>
          </div>

          <div v-if="product.features" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(feature, idx) in product.features[locale]" :key="idx"
              class="feature-card group relative p-8 rounded-3xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 shadow hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 cursor-default"
              :data-aos="'fade-up'"
              :data-aos-delay="idx * 100"
              :data-aos-duration="'800'">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <svg v-if="idx === 0" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <svg v-else-if="idx === 1" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <svg v-else-if="idx === 2" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <p class="text-gray-700 dark:text-gray-300 font-semibold leading-relaxed text-base">{{ feature }}</p>
              <!-- Bottom accent line that grows on hover -->
              <div class="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-orange-400 rounded-b-3xl transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════════
           VIDEO SECTION - Cinematic
      ═══════════════════════════════════════════════════════ -->
      <section v-if="product.video" class="py-24 relative overflow-hidden bg-gray-900">
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-[#1a0a00] opacity-95"></div>
          <div class="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
          <div class="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div class="container mx-auto px-4 md:px-12 relative z-10">
          <div class="text-center mb-16" data-aos="fade-up">
            <div class="inline-flex items-center gap-3 text-red-400 font-bold text-sm mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 animate-pulse" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="10" r="8" /><polygon fill="white" points="8,7 14,10 8,13" /></svg>
              {{ locale === 'ar' ? 'فيديو توضيحي حصري' : 'Exclusive Product Demo' }}
            </div>
            <h2 class="text-3xl md:text-5xl font-black text-white mb-4">
              {{ locale === 'ar' ? 'شاهد المكبس في العمل' : 'See It In Action' }}
            </h2>
            <p class="text-gray-400 max-w-xl mx-auto">
              {{ locale === 'ar' ? 'اكتشف القوة الحقيقية للمكبس في فيديو توضيحي مباشر' : 'Discover the real power of the baler in a live demo video' }}
            </p>
          </div>

          <!-- Video Player -->
          <div class="max-w-4xl mx-auto" data-aos="zoom-in" data-aos-duration="800">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/70 border border-white/10 video-container">
              <!-- Glowing border effect -->
              <div class="absolute -inset-0.5 bg-gradient-to-r from-primary via-orange-400 to-primary rounded-3xl blur opacity-30 animate-pulse -z-10"></div>
              
              <div class="relative" style="padding-top: 56.25%;">
                <template v-if="isVideoVisible">
                  <iframe
                    v-if="!isDirectVideo(videoSrc)"
                    :src="videoSrc"
                    title="Product Video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    class="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                  <video
                    v-else
                    :src="videoSrc"
                    autoplay
                    loop
                    muted
                    playsinline
                    class="absolute top-0 left-0 w-full h-full object-cover"
                  ></video>
                </template>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════════
           FEATURE IMAGES SECTION - Interactive Grid
      ═══════════════════════════════════════════════════════ -->
      <section v-if="product.featureImages && product.featureImages.length" class="py-24 bg-white dark:bg-[#0d0d0d] transition-colors duration-500 relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl"></div>
        </div>
        <div class="container mx-auto px-4 md:px-12 relative z-10">
          <div class="text-center mb-16" data-aos="fade-up">
            <div class="inline-block bg-primary/10 text-primary font-bold px-6 py-2 rounded-full text-sm mb-4 border border-primary/20">
              🔩 {{ locale === 'ar' ? 'مكونات المكبس' : 'Baler Components' }}
            </div>
            <h2 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              {{ locale === 'ar' ? 'تصميم هندسي متكامل' : 'Complete Engineering Design' }}
            </h2>
            <p class="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">
              {{ locale === 'ar' ? 'كل جزء في المكبس مصمم بدقة عالية لضمان أقصى أداء وأطول عمر تشغيلي' : 'Every component is precision-engineered for maximum performance and longest operating life' }}
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <div
              v-for="(feat, idx) in product.featureImages"
              :key="idx"
              class="feature-img-card group relative bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl md:rounded-3xl border border-gray-100 dark:border-white/5 overflow-hidden cursor-pointer hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
              :data-aos="'fade-up'"
              :data-aos-delay="(idx % 4) * 80"
              :data-aos-duration="'700'"
              @click="selectedFeature = feat"
            >
              <!-- Image -->
              <div class="aspect-square overflow-hidden bg-white dark:bg-[#222] flex items-center justify-center p-4">
                <img
                  :src="feat.image"
                  :alt="feat.label[locale]"
                  class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <!-- Label -->
              <div class="p-3 md:p-4 text-center">
                <p class="font-bold text-gray-800 dark:text-gray-200 text-sm md:text-base">{{ feat.label[locale] }}</p>
              </div>
              <!-- Hover overlay -->
              <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl md:rounded-3xl"></div>
              <!-- Corner accent -->
              <div class="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-orange-400 group-hover:w-full transition-all duration-500 rounded-b-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════════
           TECHNICAL SPECS SECTION
      ═══════════════════════════════════════════════════════ -->
      <section v-if="product.specs" class="py-24 bg-gray-50 dark:bg-[#111] transition-colors duration-500 relative overflow-hidden">
        <div class="container mx-auto px-4 md:px-12">
          <div class="text-center mb-16" data-aos="fade-up">
            <div class="inline-block bg-primary/10 text-primary font-bold px-6 py-2 rounded-full text-sm mb-4 border border-primary/20">
              📐 {{ locale === 'ar' ? 'المواصفات الفنية' : 'Technical Specifications' }}
            </div>
            <h2 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">
              {{ locale === 'ar' ? 'مواصفات دقيقة وموثوقة' : 'Precise & Reliable Specs' }}
            </h2>
          </div>

          <div class="flex flex-col lg:flex-row gap-12 items-start">
            <!-- Specs Table -->
            <div class="lg:w-1/2" data-aos="fade-right" data-aos-duration="800">
              <div class="bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-lg border border-gray-100 dark:border-white/5 overflow-hidden">
                <div class="bg-gradient-to-r from-primary to-orange-500 px-8 py-5">
                  <h3 class="text-white font-black text-xl">{{ locale === 'ar' ? 'الجدول التقني' : 'Technical Table' }}</h3>
                </div>
                <div class="divide-y divide-gray-100 dark:divide-white/5">
                  <div
                    v-for="(spec, idx) in product.specs[locale]"
                    :key="idx"
                    class="flex items-center justify-between px-8 py-4 hover:bg-primary/3 dark:hover:bg-primary/5 transition-colors duration-200 group"
                    :data-aos="'fade-right'"
                    :data-aos-delay="idx * 60"
                  >
                    <span class="text-gray-500 dark:text-gray-400 font-medium text-sm md:text-base flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {{ spec.label }}
                    </span>
                    <span class="font-black text-gray-900 dark:text-white text-sm md:text-base text-end">{{ spec.value }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Technical Drawings -->
            <div v-if="product.specDrawings" class="lg:w-1/2" data-aos="fade-left" data-aos-duration="800">
              <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-6">
                {{ locale === 'ar' ? 'الرسومات التقنية' : 'Technical Drawings' }}
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div
                  v-for="(drawing, idx) in product.specDrawings"
                  :key="idx"
                  class="group bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-400 cursor-pointer hover:-translate-y-1"
                  :data-aos="'zoom-in'"
                  :data-aos-delay="idx * 100"
                  @click="selectedDrawing = drawing"
                >
                  <div class="aspect-[4/5] overflow-hidden bg-gray-50 dark:bg-[#222] flex items-center justify-center p-3">
                    <img
                      :src="drawing.image"
                      :alt="drawing.label[locale]"
                      class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div class="px-4 py-3 text-center border-t border-gray-100 dark:border-white/5">
                    <p class="font-bold text-primary text-sm">{{ locale === 'ar' ? 'نموذج' : 'View' }} <span class="text-gray-700 dark:text-gray-300">{{ drawing.label[locale] }}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- ═══════════════════════════════════════════════════════
           QUOTE REQUEST FORM - Premium Design
      ═══════════════════════════════════════════════════════ -->
      <section id="quote-form" class="py-24 bg-gray-50 dark:bg-[#111] transition-colors duration-500 relative overflow-hidden">
        <!-- BG decorations -->
        <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div class="container mx-auto px-4 md:px-12">
          <div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <!-- Left info panel -->
            <div class="lg:w-2/5" data-aos="fade-right" data-aos-duration="800">
              <div class="inline-block bg-primary/10 text-primary font-bold px-6 py-2 rounded-full text-sm mb-6 border border-primary/20">
                {{ locale === 'ar' ? '💬 تواصل معنا' : '💬 Contact Us' }}
              </div>
              <h2 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                {{ locale === 'ar' ? 'اطلب عرض سعر مجاني' : 'Request a Free Quote' }}
              </h2>
              <p class="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8">
                {{ locale === 'ar' ? 'تواصل مع فريقنا الآن للحصول على عرض سعر مخصص لاحتياجاتك. سنرد عليك في أقل من 24 ساعة.' : 'Contact our team for a custom quote tailored to your needs. We will respond within 24 hours.' }}
              </p>

              <!-- Contact badges -->
              <div class="space-y-4">
                <div class="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 shadow-sm hover:border-primary/30 transition-all duration-300">
                  <div class="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <div class="font-bold text-gray-900 dark:text-white">{{ locale === 'ar' ? 'رد سريع' : 'Fast Response' }}</div>
                    <div class="text-sm text-gray-500">{{ locale === 'ar' ? 'خلال 24 ساعة كحد أقصى' : 'Within 24 hours max' }}</div>
                  </div>
                </div>
                <div class="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 shadow-sm hover:border-primary/30 transition-all duration-300">
                  <div class="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <div>
                    <div class="font-bold text-gray-900 dark:text-white">{{ locale === 'ar' ? 'بيانات آمنة' : 'Secure Data' }}</div>
                    <div class="text-sm text-gray-500">{{ locale === 'ar' ? 'معلوماتك في أمان تام' : 'Your info is fully protected' }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right form -->
            <div class="lg:w-3/5" data-aos="fade-left" data-aos-duration="800">
              <div class="bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5 p-8 md:p-12">
                <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-100 dark:border-white/5">
                  {{ locale === 'ar' ? 'الطلب - ' + product.name[locale] : 'Request - ' + product.name[locale] }}
                </h3>

                <form @submit.prevent="submitQuote" class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="form-group">
                      <label class="form-label">{{ locale === 'ar' ? 'الإسم*' : 'Full Name*' }}</label>
                      <input v-model="form.name" type="text" required :placeholder="locale === 'ar' ? 'محمد أحمد' : 'John Doe'" class="form-input">
                    </div>
                    <div class="form-group">
                      <label class="form-label">{{ locale === 'ar' ? 'الإيميل*' : 'Email*' }}</label>
                      <input v-model="form.email" type="email" required :placeholder="locale === 'ar' ? 'example@mail.com' : 'example@mail.com'" class="form-input">
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="form-label">{{ locale === 'ar' ? 'أرقام الإتصال*' : 'Contact Numbers*' }}</label>
                    <input v-model="form.phone" type="text" required :placeholder="locale === 'ar' ? '+966 5X XXX XXXX' : '+966 5X XXX XXXX'" class="form-input">
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="form-group">
                      <label class="form-label">{{ locale === 'ar' ? 'الدولة*' : 'Country*' }}</label>
                      <div class="relative">
                        <select v-model="form.country" required class="form-input appearance-none cursor-pointer pe-10">
                          <option value="" disabled>{{ locale === 'ar' ? '— اختر الدولة —' : '— Choose Country —' }}</option>
                          <option v-for="c in countries" :key="c.code" :value="c.name">{{ c.name }}</option>
                        </select>
                        <div class="absolute inset-y-0 end-3 flex items-center pointer-events-none text-gray-400">
                          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label">{{ locale === 'ar' ? 'المدينة*' : 'City*' }}</label>
                      <input v-model="form.city" type="text" required :placeholder="locale === 'ar' ? 'الرياض' : 'Riyadh'" class="form-input">
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="form-label">{{ locale === 'ar' ? 'رسالتك*' : 'Your Message*' }}</label>
                    <textarea v-model="form.message" rows="4" required :placeholder="locale === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'" class="form-input resize-none"></textarea>
                  </div>

                  <!-- Captcha -->
                  <div class="p-4 bg-gray-50 dark:bg-black/20 rounded-2xl border border-gray-100 dark:border-white/5">
                    <label class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-3 block">
                      {{ locale === 'ar' ? 'سؤال التحقق: ما هو' : 'Security Question: What is' }} {{ captchaA }} × {{ captchaB }} ?
                    </label>
                    <input v-model="form.captcha" type="number" required :placeholder="locale === 'ar' ? 'اكتب الجواب...' : 'Type your answer...'" class="form-input w-full md:w-48 text-center font-bold text-lg">
                  </div>

                  <button type="submit" class="w-full cta-btn-primary py-5 rounded-2xl font-black text-white text-lg flex items-center justify-center gap-3 group">
                    <span class="relative z-10 flex items-center gap-3">
                      {{ locale === 'ar' ? 'إرسال الطلب' : 'Submit Request' }}
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Loading -->
    <div v-if="!product" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 border-t-primary rounded-full animate-spin mx-auto mb-6"></div>
        <p class="text-gray-500 dark:text-gray-400 text-lg">{{ locale === 'ar' ? 'جاري التحميل...' : 'Loading...' }}</p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import mockProducts from '@/data/products.json'

const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const product = ref(null)

// ── Carousel ──────────────────────────────────────
const currentImageIndex = ref(0)
let carouselInterval = null

const nextImage = () => {
  if (product.value?.images) {
    currentImageIndex.value = (currentImageIndex.value + 1) % product.value.images.length
  }
}
const prevImage = () => {
  if (product.value?.images) {
    currentImageIndex.value = (currentImageIndex.value - 1 + product.value.images.length) % product.value.images.length
  }
}
const setImage = (idx) => {
  currentImageIndex.value = idx
}
const startCarousel = () => {
  carouselInterval = setInterval(nextImage, 4000)
}

// ── Video ──────────────────────────────────────────
const isVideoVisible = ref(false)

const isDirectVideo = (url) => {
  return url && (url.endsWith('.mp4') || url.endsWith('.webm'))
}

const videoSrc = computed(() => {
  if (!product.value?.video) return ''
  const url = product.value.video
  // Handle full YouTube URL or embed URL
  let videoId = ''
  if (url.includes('youtube.com/embed/')) {
    videoId = url.split('youtube.com/embed/')[1].split('?')[0]
  } else if (url.includes('watch?v=')) {
    videoId = url.split('watch?v=')[1].split('&')[0]
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0]
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1` : url
})

// ── Quote Form ────────────────────────────────────
const form = ref({ name: '', email: '', phone: '', country: '', city: '', message: '', captcha: '' })
const selectedFeature = ref(null)
const selectedDrawing = ref(null)
const captchaA = ref(Math.floor(Math.random() * 10) + 1)
const captchaB = ref(Math.floor(Math.random() * 10) + 1)

const scrollToQuote = () => {
  const el = document.getElementById('quote-form')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const submitQuote = () => {
  if (parseInt(form.value.captcha) !== captchaA.value * captchaB.value) {
    alert(locale.value === 'ar' ? 'إجابة سؤال التحقق غير صحيحة!' : 'Security answer is incorrect!')
    return
  }
  alert(locale.value === 'ar' ? '✅ تم إرسال طلبك بنجاح! سنتواصل معك قريباً.' : '✅ Request sent! We will contact you soon.')
  form.value = { name: '', email: '', phone: '', country: '', city: '', message: '', captcha: '' }
  captchaA.value = Math.floor(Math.random() * 10) + 1
  captchaB.value = Math.floor(Math.random() * 10) + 1
}

// ── Countries ─────────────────────────────────────
const countries = [
  { code: 'SA', name: 'المملكة العربية السعودية' },
  { code: 'AE', name: 'الإمارات العربية المتحدة' },
  { code: 'EG', name: 'مصر' },
  { code: 'KW', name: 'الكويت' },
  { code: 'QA', name: 'قطر' },
  { code: 'BH', name: 'البحرين' },
  { code: 'OM', name: 'عمان' },
  { code: 'JO', name: 'الأردن' },
  { code: 'LB', name: 'لبنان' },
  { code: 'IQ', name: 'العراق' },
  { code: 'SY', name: 'سوريا' },
  { code: 'YE', name: 'اليمن' },
  { code: 'SD', name: 'السودان' },
  { code: 'LY', name: 'ليبيا' },
  { code: 'MA', name: 'المغرب' },
  { code: 'DZ', name: 'الجزائر' },
  { code: 'TN', name: 'تونس' },
  { code: 'MR', name: 'موريتانيا' },
  { code: 'SO', name: 'الصومال' },
  { code: 'DJ', name: 'جيبوتي' },
  { code: 'KM', name: 'جزر القمر' },
  { code: 'PS', name: 'فلسطين' },
  { code: 'TR', name: 'تركيا' },
  { code: 'GB', name: 'المملكة المتحدة' },
  { code: 'DE', name: 'ألمانيا' },
  { code: 'FR', name: 'فرنسا' },
  { code: 'US', name: 'الولايات المتحدة' },
  { code: 'OTHER', name: 'أخرى / Other' }
]

// ── Mount ─────────────────────────────────────────
onMounted(async () => {
  const idStr = route.params.id
  let foundProduct = null
  let foundCatTitle = null

  for (const category of mockProducts) {
    if (category.products && Array.isArray(category.products)) {
      const prod = category.products.find(p => p.id === idStr)
      if (prod) { foundProduct = prod; foundCatTitle = category.title; break }
    }
    if (category.subcategories && Array.isArray(category.subcategories)) {
      for (const sub of category.subcategories) {
        if (sub.products && Array.isArray(sub.products)) {
          const prod = sub.products.find(p => p.id === idStr)
          if (prod) { foundProduct = prod; foundCatTitle = category.title; break }
        }
      }
    }
    if (foundProduct) break
  }

  if (foundProduct) {
    product.value = { ...foundProduct, categoryTitle: foundCatTitle }
    if (product.value.images?.length > 1) startCarousel()
    await nextTick()
    isVideoVisible.value = true
  }
})

onUnmounted(() => {
  if (carouselInterval) clearInterval(carouselInterval)
})
</script>

<style scoped>
/* ═══════════════ Hero Gradient ═══════════════ */
.hero-gradient {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #1a1a2e 100%);
}

/* ═══════════════ 3D Product Card ═══════════════ */
.product-3d-card {
  width: clamp(280px, 45vw, 520px);
  height: clamp(280px, 45vw, 520px);
  perspective: 1000px;
}

.product-floating-card {
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 2rem;
  backdrop-filter: blur(20px);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float3d 6s ease-in-out infinite;
  box-shadow:
    0 0 0 1px rgba(233,158,21,0.1),
    0 20px 80px rgba(0,0,0,0.5),
    0 0 120px rgba(233,158,21,0.05);
  transform-style: preserve-3d;
}

.product-glow-ring {
  position: absolute;
  inset: -20px;
  border-radius: 2.5rem;
  background: radial-gradient(circle at center, rgba(233,158,21,0.15) 0%, transparent 70%);
  animation: pulse-ring 4s ease-in-out infinite;
}

@keyframes float3d {
  0%, 100% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
  25% { transform: translateY(-12px) rotateX(4deg) rotateY(-4deg); }
  50% { transform: translateY(-6px) rotateX(-2deg) rotateY(4deg); }
  75% { transform: translateY(-18px) rotateX(3deg) rotateY(-2deg); }
}

@keyframes pulse-ring {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}

/* ═══════════════ Hero Particles ═══════════════ */
.hero-particles {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle, rgba(233,158,21,0.15) 1px, transparent 1px),
    radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 80px 80px, 40px 40px;
  background-position: 0 0, 20px 20px;
  animation: particles-drift 20s linear infinite;
}

@keyframes particles-drift {
  0% { background-position: 0 0, 20px 20px; }
  100% { background-position: 80px 80px, 60px 60px; }
}

/* ═══════════════ Diagonal Lines ═══════════════ */
.diagonal-lines {
  width: 200%;
  height: 200%;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(233,158,21,0.05) 10px,
    rgba(233,158,21,0.05) 12px
  );
}

/* ═══════════════ CTA Button ═══════════════ */
.cta-btn-primary {
  background: linear-gradient(135deg, #E99E15 0%, #d4890a 50%, #bf7500 100%);
  transition: all 0.3s ease;
}
.cta-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(233,158,21,0.4);
}
.cta-btn-primary:active { transform: translateY(-1px); }

/* ═══════════════ Stat Cards ═══════════════ */
.stat-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ═══════════════ Feature Cards ═══════════════ */
.feature-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ═══════════════ Form Inputs ═══════════════ */
.form-group { display: flex; flex-direction: column; }
.form-label {
  font-weight: 700;
  font-size: 0.875rem;
  color: #374151;
  margin-bottom: 0.5rem;
}
.dark .form-label { color: #d1d5db; }
.form-input {
  width: 100%;
  padding: 0.875rem 1rem;
  border-radius: 0.875rem;
  border: 2px solid #e5e7eb;
  background: #f9fafb;
  color: #111827;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  outline: none;
}
.dark .form-input {
  border-color: rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.05);
  color: #f3f4f6;
}
.form-input:focus {
  border-color: #E99E15;
  box-shadow: 0 0 0 4px rgba(233,158,21,0.15);
  background: #fff;
}
.dark .form-input:focus { background: rgba(233,158,21,0.05); }

/* ═══════════════ Gallery Fade ═══════════════ */
.gallery-fade-enter-active, .gallery-fade-leave-active { transition: opacity 0.5s ease, transform 0.5s ease; }
.gallery-fade-enter-from { opacity: 0; transform: scale(0.97); }
.gallery-fade-leave-to { opacity: 0; transform: scale(1.03); }

/* ═══════════════ Hero Fade ═══════════════ */
.fade-enter-active, .fade-leave-active { transition: opacity 0.6s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
