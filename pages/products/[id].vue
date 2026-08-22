<template>
  <div class="product-page bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
    
    <!-- Loading State -->
    <div v-if="!product" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 border-t-primary rounded-full animate-spin mx-auto mb-6"></div>
        <p class="text-gray-500 dark:text-gray-400 text-lg">{{ locale === 'ar' ? 'جاري التحميل...' : 'Loading...' }}</p>
      </div>
    </div>

    <div v-else>
      <!-- General Hero Banner -->
      <section class="relative w-full h-[35vh] sm:h-[45vh] md:h-[50vh] max-h-[550px] flex items-center justify-center overflow-hidden bg-black">
        <NuxtImg 
          :src="product.coverImage || product.images?.[0] || product.image" 
          alt="Banner" 
          class="absolute inset-0 w-full h-full object-cover object-center opacity-90 transition-all duration-700"
          format="webp"
          loading="eager"
        />
        <!-- Subtle dark gradient overlay for text readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#121c2d] via-black/30 to-black/40"></div>
        
        <div class="relative z-10 text-center px-4" data-aos="fade-up">
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] tracking-tight">
            {{ product.name[locale] }}
          </h1>
        </div>
      </section>

      <!-- Hero Product Section (Restored Original Layout but Full Width Carousel) -->
      <section class="bg-[#121c2d] py-12 md:py-20 relative overflow-hidden">
        <!-- Subtle Pattern Background -->
        <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 24px 24px;"></div>
        
        <div class="container mx-auto px-4 md:px-8 relative z-10">
          <div class="flex flex-col gap-12 lg:gap-16 items-center">
            
            <!-- Product Info & Stats (Centered and Full Width) -->
            <div class="w-full lg:w-10/12 xl:w-8/12 flex flex-col items-center text-center" data-aos="fade-down">
              <!-- Breadcrumb -->
              <div class="flex items-center justify-center gap-2 text-gray-400 text-sm md:text-base mb-6 font-medium flex-wrap">
                <NuxtLink :to="localePath('/')" class="hover:text-white transition">{{ locale === 'ar' ? 'الرئيسية' : 'Home' }}</NuxtLink>
                <span>/</span>
                <NuxtLink :to="localePath('/products')" class="hover:text-white transition">{{ locale === 'ar' ? 'المنتجات' : 'Products' }}</NuxtLink>
                <span>/</span>
                <span class="text-[#E99E15]">{{ product.name[locale] }}</span>
              </div>
              
              <!-- Badge -->
              <div class="inline-block bg-gray-800/80 border border-gray-700 text-[#E99E15] rounded-full px-5 py-2 text-sm font-bold mb-6">
                <span class="w-2 h-2 rounded-full bg-[#E99E15] inline-block rtl:ml-2 ltr:mr-2"></span>
                {{ product.categoryTitle?.[locale] || (locale === 'ar' ? 'المخلفات وإعادة التدوير' : 'Waste & Recycling') }}
              </div>
              
              <!-- Title -->
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                {{ product.name[locale] }}
              </h1>
              
              <div class="w-20 h-1 bg-[#E99E15] mb-8"></div>
              
              <!-- Description -->
              <p class="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 whitespace-pre-line text-center">
                {{ product.description ? product.description[locale] : '' }}
              </p>
              
              <!-- Stats Cards -->
              <div v-if="product.stats && product.stats[locale]" class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 w-full">
                <div v-for="(stat, i) in product.stats[locale]" :key="i" class="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm hover:bg-white/10 transition">
                  <div class="text-[#E99E15] font-black text-2xl md:text-3xl mb-1">{{ stat.value }}</div>
                  <div class="text-gray-300 text-sm font-medium">{{ stat.label }}</div>
                </div>
              </div>
              
              <!-- Buttons -->
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button @click="scrollToQuote" class="bg-[#E99E15] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-500 transition shadow-lg hover:shadow-[#E99E15]/40 flex items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  {{ locale === 'ar' ? 'طلب عرض سعر' : 'Request a Quote' }}
                </button>
                <a v-if="product.pdf" :href="product.pdf" target="_blank" @click="trackBrochureDownload" class="bg-transparent border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:border-white transition flex items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  {{ locale === 'ar' ? 'تحميل الكتيب' : 'Download Brochure' }}
                </a>
              </div>
            </div>

            <!-- Product Images / Carousel (Full Width Row) -->
            <div class="w-full" data-aos="fade-up">
              <div class="bg-white rounded-[2rem] p-4 md:p-8 shadow-2xl relative group product-3d-container">
                <div class="h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden relative">
                  <transition name="fade">
                    <NuxtImg 
                      :key="currentDisplayImage"
                      :src="currentDisplayImage" 
                      :alt="product.name[locale]" 
                      class="absolute inset-0 w-full h-full object-contain p-4 md:p-8 floating-3d-image drop-shadow-2xl"
                      format="webp"
                      loading="eager"
                    />
                  </transition>
                </div>
              </div>
              
              <!-- Thumbnails -->
              <div v-if="allImages.length > 1" class="flex justify-center flex-wrap gap-4 mt-8">
                <button 
                  v-for="(img, idx) in allImages" 
                  :key="idx"
                  @click="setCurrentImage(idx)"
                  class="w-20 h-20 md:w-28 md:h-28 bg-white rounded-xl overflow-hidden border-2 transition-all p-2"
                  :class="currentImageIndex === idx ? 'border-[#E99E15] shadow-lg shadow-[#E99E15]/30 scale-110' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'"
                >
                  <NuxtImg :src="img" class="w-full h-full object-contain" format="webp" loading="lazy" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div class="container mx-auto px-3 md:px-8 lg:px-12 relative z-20 pb-16 md:pb-24">

        <!-- Features Section (2 cols on Desktop, 1 on Mobile) -->
        <div v-if="product.features && product.features[locale]" class="mt-16 md:mt-20" data-aos="fade-up">
          <div class="text-center mb-8 md:mb-12">
            <h2 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
              {{ locale === 'ar' ? 'أهم المميزات' : 'Key Features' }}
            </h2>
            <div class="h-1 w-20 md:w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <!-- Features Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <div 
              v-for="(feature, idx) in product.features[locale]" 
              :key="idx"
              class="bg-white dark:bg-gray-800 p-5 md:p-8 rounded-2xl shadow border border-gray-100 dark:border-gray-700 flex items-start gap-3 md:gap-4 hover:shadow-xl transition"
              data-aos="fade-up"
              :data-aos-delay="idx * 100"
            >
              <div class="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <p class="text-base md:text-lg font-bold text-gray-800 dark:text-gray-200">{{ feature }}</p>
              </div>
            </div>
          </div>
        </div>



        <!-- Technical Specs & Drawings -->
        <div v-if="(product.specs && product.specs[locale]) || (product.specDrawings && product.specDrawings.length)" class="mt-16 md:mt-20" data-aos="fade-up">
          <div class="text-center mb-8 md:mb-12">
            <h2 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
              {{ locale === 'ar' ? 'المواصفات الفنية والرسومات التقنية' : 'Technical Specifications & Drawings' }}
            </h2>
            <div class="h-1 w-20 md:w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div class="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
            <!-- Technical Specs Table -->
            <div v-if="product.specs && product.specs[locale]" class="w-full" :class="product.specDrawings?.length ? 'lg:w-1/2' : ''">
              <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div class="bg-gradient-to-r from-primary to-orange-500 px-5 py-4 md:px-6 md:py-4">
                  <h3 class="text-white font-black text-lg md:text-xl">{{ locale === 'ar' ? 'الجدول التقني' : 'Technical Table' }}</h3>
                </div>
                <div class="divide-y divide-gray-100 dark:divide-gray-700">
                  <div 
                    v-for="(spec, idx) in product.specs[locale]" 
                    :key="idx"
                    class="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-5 hover:bg-gray-50 dark:hover:bg-gray-750 transition"
                  >
                    <span class="text-gray-500 dark:text-gray-400 font-bold mb-1 sm:mb-0 text-sm md:text-base">{{ spec.label }}</span>
                    <span class="font-black text-gray-900 dark:text-white text-base md:text-lg sm:text-end">{{ spec.value }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Technical Drawings -->
            <div v-if="product.specDrawings && product.specDrawings.length" class="w-full lg:w-1/2">
              <h3 class="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-4 md:mb-6 text-center lg:text-start">
                {{ locale === 'ar' ? 'الرسومات التقنية' : 'Technical Drawings' }}
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div 
                  v-for="(drawing, idx) in product.specDrawings" 
                  :key="idx"
                  class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-xl transition group"
                  data-aos="zoom-in"
                  :data-aos-delay="idx * 100"
                >
                  <div class="aspect-square bg-white p-3 md:p-4 flex items-center justify-center">
                    <NuxtImg :src="drawing.image" :alt="drawing.label[locale]" class="w-full h-full object-contain group-hover:scale-110 transition duration-500" format="webp" loading="lazy" />
                  </div>
                  <div class="p-3 md:p-4 text-center border-t border-gray-100 dark:border-gray-700">
                    <p class="font-bold text-gray-800 dark:text-gray-200 text-sm md:text-base">{{ drawing.label[locale] }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature Images Grid -->
        <div v-if="product.featureImages && product.featureImages.length" class="mt-16 md:mt-20" data-aos="fade-up">
          <div class="text-center mb-8 md:mb-12">
            <h2 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
              {{ locale === 'ar' ? 'مكونات وتفاصيل' : 'Components & Details' }}
            </h2>
            <div class="h-1 w-20 md:w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div 
              v-for="(featImg, idx) in product.featureImages" 
              :key="idx"
              class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden group"
              data-aos="fade-up"
              :data-aos-delay="idx * 100"
            >
              <div class="w-full aspect-[4/3] md:aspect-video overflow-hidden bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
                <NuxtImg :src="featImg.image" :alt="featImg.label[locale]" class="w-full h-full object-contain group-hover:scale-105 transition duration-500" format="webp" loading="lazy" />
              </div>
              <div class="p-4 md:p-6 text-center">
                <h3 class="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{{ featImg.label[locale] }}</h3>
              </div>
            </div>
          </div>
        </div>

        <!-- Quote Form Section -->
        <div id="quote-form" class="mt-16 md:mt-24 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 p-6 md:p-16 max-w-4xl mx-auto" data-aos="fade-up">
          <div class="text-center mb-8 md:mb-10">
            <h2 class="text-2xl md:text-4xl font-black text-gray-900 dark:text-white mb-3 md:mb-4">
              {{ locale === 'ar' ? 'طلب عرض سعر للمنتج' : 'Request a Quote for this Product' }}
            </h2>
            <p class="text-base md:text-lg text-gray-500 dark:text-gray-400">
              {{ locale === 'ar' ? 'املأ النموذج التالي وسيقوم فريقنا بالتواصل معك في أقرب وقت.' : 'Fill out the form below and our team will contact you shortly.' }}
            </p>
          </div>
          
          <form @submit.prevent="submitQuote" class="space-y-4 md:space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'اسم الشركة*' : 'Company Name*' }}</label>
                <input v-model="form.name" type="text" required class="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary outline-none text-gray-900 dark:text-white transition">
              </div>
              <div>
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'المسمى الوظيفي*' : 'Job Title*' }}</label>
                <input v-model="form.jobTitle" type="text" required class="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary outline-none text-gray-900 dark:text-white transition">
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
              <div>
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'البريد الإلكتروني*' : 'Email*' }}</label>
                <input v-model="form.email" type="email" required class="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary outline-none text-gray-900 dark:text-white transition">
              </div>
              <div>
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'رقم الهاتف*' : 'Phone Number*' }}</label>
                <input v-model="form.phone" type="text" required class="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary outline-none text-gray-900 dark:text-white transition">
              </div>
            </div>
            
            <div>
              <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'الرسالة' : 'Message' }}</label>
              <textarea v-model="form.message" rows="4" class="w-full px-4 py-3 md:px-5 md:py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary outline-none text-gray-900 dark:text-white transition resize-none"></textarea>
            </div>
            
            <button type="submit" :disabled="loading" class="w-full bg-primary text-white py-4 md:py-5 rounded-xl font-bold text-lg md:text-xl hover:bg-orange-600 transition shadow-lg hover:shadow-primary/40 disabled:opacity-50">
              <span v-if="loading">{{ locale === 'ar' ? 'جاري الإرسال...' : 'Sending...' }}</span>
              <span v-else>{{ locale === 'ar' ? 'إرسال الطلب' : 'Submit Request' }}</span>
            </button>
            
            <p v-if="statusMessage" :class="statusType === 'success' ? 'text-green-600' : 'text-red-600'" class="text-center font-bold mt-4 text-base md:text-lg">
              {{ statusMessage }}
            </p>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import mockProducts from '@/data/products.json'

const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const product = ref(null)

useHead(() => {
  if (!product.value) return {}
  const title = product.value.name?.[locale.value] || 'Bestolex Product'
  const desc = product.value.description?.[locale.value]?.substring(0, 160) || ''
  const img = product.value.coverImage || product.value.image || ''

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.value.name?.en || title,
    'description': product.value.description?.en || desc,
    'image': img,
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock',
      'seller': {
        '@type': 'Organization',
        'name': 'Bestolex'
      }
    }
  }

  return {
    title: `${title} | Bestolex Qatar`,
    meta: [
      { name: 'description', content: desc },
      { property: 'og:title', content: `${title} | Bestolex` },
      { property: 'og:description', content: desc },
      { property: 'og:image', content: img }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(jsonLd)
      }
    ]
  }
})

const getEmbedYoutubeUrl = (url) => {
  if (!url) return ''
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11)
    ? `https://www.youtube.com/embed/${match[2]}`
    : url
}

// For image gallery and autoplay
const currentImageIndex = ref(0)
let carouselInterval = null

const allImages = computed(() => {
  if (!product.value) return []
  if (product.value.images && product.value.images.length > 0) return product.value.images
  if (product.value.image) return [product.value.image]
  return []
})

const currentDisplayImage = computed(() => {
  return allImages.value[currentImageIndex.value] || ''
})

const setCurrentImage = (idx) => {
  currentImageIndex.value = idx
  resetCarousel()
}

const startCarousel = () => {
  if (allImages.value.length > 1) {
    carouselInterval = setInterval(() => {
      currentImageIndex.value = (currentImageIndex.value + 1) % allImages.value.length
    }, 3000)
  }
}

const resetCarousel = () => {
  if (carouselInterval) clearInterval(carouselInterval)
  startCarousel()
}

// Form State
const form = ref({ name: '', jobTitle: '', email: '', phone: '', message: '' })
const loading = ref(false)
const statusMessage = ref('')
const statusType = ref('')

const scrollToQuote = () => {
  const el = document.getElementById('quote-form')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const trackBrochureDownload = () => {
  try {
    $fetch('/api/analytics/track', {
      method: 'POST',
      body: {
        event_type: 'brochure_download',
        target_name: `كتيب ${product.value?.name?.ar || product.value?.name?.en || 'منتج'}`
      }
    })
  } catch (e) {}
}

const submitQuote = async () => {
  loading.value = true
  statusMessage.value = ''
  
  const productNameAr = product.value?.name?.ar || ''
  const productNameEn = product.value?.name?.en || ''
  const catTitle = product.value?.categoryTitle?.[locale.value] || product.value?.categoryTitle?.ar || ''

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        ...form.value,
        productId: product.value?.id,
        productName: `${productNameAr} - ${productNameEn}`,
        productNameAr,
        productNameEn,
        categoryTitle: catTitle,
        productUrl: typeof window !== 'undefined' ? window.location.href : '',
        isQuoteRequest: true
      }
    })
    
    statusType.value = 'success'
    statusMessage.value = locale.value === 'ar' ? 'تم إرسال طلب عرض السعر بنجاح! سنتواصل معك قريباً.' : 'Your quote request has been sent successfully! We will contact you soon.'
    form.value = { name: '', email: '', phone: '', message: '' }
  } catch (error) {
    statusType.value = 'error'
    statusMessage.value = locale.value === 'ar' ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' : 'An error occurred while sending. Please try again.'
    console.error(error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
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
      if (foundProduct) break
    }
  }

  if (foundProduct) {
    product.value = { ...foundProduct, categoryTitle: foundCatTitle }
    startCarousel()
  }
})

useSeoMeta({
  title: () => {
    if (!product.value) return 'المنتجات | بيستوليكس قطر'
    const name = product.value.name?.[locale.value] || product.value.name?.ar || ''
    return `${name} | بيستوليكس للمعدات الصناعية قطر`
  },
  description: () => {
    if (!product.value) return ''
    return product.value.description?.[locale.value] || product.value.description?.ar || ''
  },
  keywords: () => {
    if (!product.value) return ''
    const name = product.value.name?.[locale.value] || ''
    const cat = product.value.categoryTitle?.[locale.value] || ''
    return `${name}, ${cat}, سعر ${name} في قطر, مواصفات ${name}, توريد ${name} الدوحة, بيستوليكس قطر`
  },
  ogTitle: () => product.value?.name?.[locale.value] || 'Bestolex Product',
  ogDescription: () => product.value?.description?.[locale.value] || '',
  ogImage: () => product.value?.images?.[0] || '/images/hero/hero-bg.jpg'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': product.value?.name?.[locale.value] || 'Bestolex Equipment',
        'image': product.value?.images || [],
        'description': product.value?.description?.[locale.value] || '',
        'brand': {
          '@type': 'Brand',
          'name': 'Bestolex / SAB TECH'
        },
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'QAR',
          'availability': 'https://schema.org/InStock',
          'seller': {
            '@type': 'Organization',
            'name': 'Bestolex Trading & Contracting'
          }
        }
      })
    }
  ]
})

onUnmounted(() => {
  if (carouselInterval) clearInterval(carouselInterval)
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #E99E15;
  border-radius: 10px;
}

/* Fade Animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* 3D Floating Effect for Main Image */
.product-3d-container {
  perspective: 1000px;
}
.floating-3d-image {
  animation: float3d 5s ease-in-out infinite;
  transform-style: preserve-3d;
}
@keyframes float3d {
  0%, 100% {
    transform: translateY(0) rotateX(0deg) rotateY(0deg);
  }
  25% {
    transform: translateY(-8px) rotateX(3deg) rotateY(-2deg);
  }
  50% {
    transform: translateY(-4px) rotateX(-1deg) rotateY(3deg);
  }
  75% {
    transform: translateY(-12px) rotateX(2deg) rotateY(-1deg);
  }
}
</style>
