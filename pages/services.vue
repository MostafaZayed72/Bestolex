<template>
  <div class="services-page bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
    
    <!-- Hero Section with Dynamic Background Carousel -->
    <section class="relative py-24 md:py-36 bg-[#121c2d] text-white overflow-hidden flex items-center justify-center">
      <!-- Background Carousel Slides -->
      <div class="absolute inset-0 w-full h-full overflow-hidden">
        <div 
          v-for="(slide, index) in heroSlides" 
          :key="slide.image" 
          class="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
          :class="currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'"
        >
          <NuxtImg 
            :src="slide.image" 
            :alt="slide.title[locale]" 
            class="w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ease-out"
            :class="currentSlide === index ? 'scale-105' : 'scale-100'"
            format="webp"
            loading="eager"
          />
          <!-- Dark Gradient Overlay for Maximum Readability -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#121c2d] via-[#121c2d]/80 to-[#121c2d]/55"></div>
        </div>
      </div>

      <!-- Subtle Dot Pattern -->
      <div class="absolute inset-0 opacity-15" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 24px 24px;"></div>

      <!-- Hero Content -->
      <div class="container mx-auto px-4 md:px-8 relative z-10 text-center" data-aos="fade-up">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 bg-[#E99E15]/20 border border-[#E99E15]/40 text-[#E99E15] px-5 py-2 rounded-full font-bold text-sm md:text-base mb-6 backdrop-blur-md shadow-lg">
          <span class="w-2.5 h-2.5 rounded-full bg-[#E99E15] animate-ping"></span>
          <span>{{ locale === 'ar' ? 'خدمات هندسية ولوجستية متكاملة' : 'Integrated Engineering & Logistics Services' }}</span>
        </div>

        <h1 class="text-3xl sm:text-5xl md:text-6xl font-black mb-6 text-white leading-tight tracking-tight max-w-4xl mx-auto drop-shadow-lg">
          {{ locale === 'ar' ? 'خدمات تلبي تطلعات أعمالكم باحترافية' : 'Services That Meet Your Business Aspirations' }}
        </h1>

        <div class="w-24 h-1.5 bg-[#E99E15] mx-auto mb-6 rounded-full shadow-md shadow-[#E99E15]/50"></div>

        <p class="text-lg md:text-2xl text-gray-200 font-medium max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow">
          {{ locale === 'ar' 
            ? 'نرافقكم من دراسة الاحتياج والتصميم، حتى التوريد والتركيب والتشغيل وخدمات الصيانة والدعم الفني طويل الأمد.' 
            : 'We accompany you from requirement assessment and design, through supply, installation, commissioning, and long-term maintenance.' 
          }}
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-10">
          <button 
            @click="isBookingOpen = true" 
            class="group flex items-center gap-3 bg-gradient-to-r from-[#E99E15] to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-black px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-[#E99E15]/30 hover:shadow-[#E99E15]/50 hover:-translate-y-1 text-base md:text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{{ locale === 'ar' ? 'حجز موعد استشارة' : 'Book a Consultation' }}</span>
          </button>

          <NuxtLink 
            :to="localePath('/contact')" 
            class="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-2xl font-bold transition-all hover:-translate-y-1 text-base md:text-lg flex items-center gap-2"
          >
            <span>{{ locale === 'ar' ? 'تواصل مع الفريق الفني' : 'Contact Technical Team' }}</span>
            <span class="rtl:rotate-180">&rarr;</span>
          </NuxtLink>
        </div>

        <!-- Carousel Indicators -->
        <div class="flex justify-center items-center gap-3">
          <button 
            v-for="(slide, idx) in heroSlides" 
            :key="idx" 
            @click="setSlide(idx)"
            class="h-2.5 rounded-full transition-all duration-500"
            :class="currentSlide === idx ? 'w-10 bg-[#E99E15]' : 'w-2.5 bg-white/40 hover:bg-white/70'"
            :aria-label="'Slide ' + (idx + 1)"
          ></button>
        </div>
      </div>
    </section>

    <!-- Main Content Container -->
    <div class="container mx-auto px-4 md:px-8 py-16 md:py-24 space-y-24">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto" data-aos="fade-up">
        <div class="inline-block bg-primary/10 text-primary font-extrabold px-4 py-1.5 rounded-lg text-sm mb-4">
          {{ locale === 'ar' ? 'رحلة الخدمة المتكاملة' : 'Integrated Service Journey' }}
        </div>
        <h2 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
          {{ locale === 'ar' ? 'منهجية عمل هندسية من البداية حتى التسليم' : 'Engineering Methodology from Survey to Handover' }}
        </h2>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          {{ locale === 'ar' 
            ? 'تُقدَّم خدماتنا وفق أعلى معايير الجودة العالمية لضمان استدامة وكفاءة تشغيل منشآتكم ومشاريعكم في دولة قطر.' 
            : 'Our services are delivered according to the highest international quality standards to ensure efficiency and reliability.' 
          }}
        </p>
      </div>

      <!-- Services Grid with Imagery & Rich Details -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(service, idx) in services" 
          :key="idx" 
          class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex flex-col group"
          data-aos="fade-up"
          :data-aos-delay="(idx % 4) * 100"
        >
          <!-- Card Image Header -->
          <div class="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
            <NuxtImg 
              :src="service.image" 
              :alt="service.title[locale]" 
              class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              format="webp"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            
            <!-- Step Badge -->
            <div class="absolute top-4 rtl:right-4 ltr:left-4 bg-[#121c2d]/90 backdrop-blur-md text-[#E99E15] font-black text-xs px-3 py-1.5 rounded-full border border-[#E99E15]/30">
              {{ locale === 'ar' ? `المرحلة 0${idx + 1}` : `Stage 0${idx + 1}` }}
            </div>

            <!-- Icon Overlay -->
            <div class="absolute bottom-3 rtl:right-4 ltr:left-4 text-3xl drop-shadow-md">
              {{ service.icon }}
            </div>
          </div>

          <!-- Card Body -->
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                {{ service.title[locale] }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                {{ service.desc[locale] }}
              </p>
            </div>

            <!-- Features Mini Bullet Points -->
            <div class="pt-4 border-t border-gray-100 dark:border-gray-700/60 mt-auto">
              <div class="flex items-center gap-2 text-xs font-bold text-[#E99E15]">
                <span>✓</span>
                <span>{{ service.highlight[locale] }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature Highlight Banner (Why Bestolex Services) -->
      <section class="bg-gradient-to-r from-[#121c2d] to-[#1e2d42] text-white rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden" data-aos="fade-up">
        <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
        
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-8 space-y-6">
            <div class="inline-flex items-center gap-2 bg-[#E99E15]/20 text-[#E99E15] border border-[#E99E15]/30 px-4 py-1.5 rounded-full font-bold text-xs md:text-sm">
              <span>⭐</span>
              <span>{{ locale === 'ar' ? 'التزام الجودة والموثوقية' : 'Commitment to Quality & Reliability' }}</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-black leading-tight text-white">
              {{ locale === 'ar' ? 'فريق هندسي متخصص ودعم فني مستمر' : 'Dedicated Engineering Team & Continuous Support' }}
            </h2>
            <p class="text-gray-300 text-base md:text-lg leading-relaxed">
              {{ locale === 'ar' 
                ? 'نحن لا نكتفي بتوريد المعدات، بل نوفر حلولاً هندسية مصممة خصيصاً لتناسب منشأتكم، مع توفير عقود الصيانة الدورية وقطع الغيار الأصلية لضمان استمرارية أعمالكم دون انقطاع.' 
                : 'We do not just supply equipment; we provide engineered solutions tailored to your facility, supported by maintenance contracts and genuine spare parts.' 
              }}
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div class="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                <div class="text-[#E99E15] font-black text-2xl mb-1">24/7</div>
                <div class="text-xs text-gray-300 font-bold">{{ locale === 'ar' ? 'استجابة سريعة' : 'Rapid Response' }}</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                <div class="text-[#E99E15] font-black text-2xl mb-1">100%</div>
                <div class="text-xs text-gray-300 font-bold">{{ locale === 'ar' ? 'قطع غيار أصلية' : 'Genuine Spare Parts' }}</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                <div class="text-[#E99E15] font-black text-2xl mb-1">+25</div>
                <div class="text-xs text-gray-300 font-bold">{{ locale === 'ar' ? 'سنة خبرة صناعية' : 'Years Experience' }}</div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-4 flex flex-col items-center justify-center gap-4">
            <div class="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-3xl text-center w-full max-w-sm">
              <div class="w-16 h-16 bg-[#E99E15] text-white rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg shadow-[#E99E15]/30">
                📅
              </div>
              <h3 class="text-xl font-bold mb-2">{{ locale === 'ar' ? 'هل لديك مشروع جديد؟' : 'Have a New Project?' }}</h3>
              <p class="text-gray-300 text-sm mb-6">{{ locale === 'ar' ? 'احجز موعداً مع مهندسينا لمعاينة الموقع واقتراح الحل الأمثل.' : 'Book a meeting with our engineers for a site survey and solution.' }}</p>
              <button 
                @click="isBookingOpen = true" 
                class="w-full bg-[#E99E15] hover:bg-orange-500 text-white font-bold py-3.5 rounded-xl transition shadow-lg"
              >
                {{ locale === 'ar' ? 'احجز موعد الآن' : 'Book Appointment' }}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom Call To Action -->
      <section class="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700" data-aos="fade-up">
        <h2 class="text-2xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
          {{ locale === 'ar' ? 'نحن هنا لمساعدتكم في تحقيق أعلى كفاءة تشغيلية' : 'We Are Here to Help You Achieve Peak Operational Efficiency' }}
        </h2>
        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-base md:text-lg">
          {{ locale === 'ar' 
            ? 'تواصل مع فريق المبيعات والاستشارات الفنية للحصول على عرض فني وتجاري مخصص.' 
            : 'Contact our sales and technical consulting team for a customized proposal.' 
          }}
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            @click="isBookingOpen = true" 
            class="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg shadow-primary/30"
          >
            {{ locale === 'ar' ? 'حجز موعد استشارة' : 'Book a Consultation' }}
          </button>
          <NuxtLink 
            :to="localePath('/products')" 
            class="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-bold text-lg transition"
          >
            {{ locale === 'ar' ? 'استعراض المنتجات والمعدات' : 'Browse Products & Equipment' }}
          </NuxtLink>
        </div>
      </section>

    </div>

    <!-- Booking Modal -->
    <BookAppointmentModal :is-open="isBookingOpen" @close="isBookingOpen = false" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const localePath = useLocalePath()
const isBookingOpen = ref(false)

const isAr = computed(() => locale.value === 'ar')

useSeoMeta({
  title: isAr.value
    ? 'خدماتنا الهندسية واللوجستية | دراسة الاحتياج، التوريد، التركيب والصيانة - بيستوليكس قطر'
    : 'Engineering & Logistics Services | Site Survey, Supply, Installation & Maintenance - Bestolex Qatar',
  description: isAr.value
    ? 'خدمات متكاملة من 8 مراحل تغطي دورة حياة المشاريع الصناعية: دراسة الموقع، التصميم الهندسي، التوريد المعتمد، التركيب الميداني، التدريب على التشغيل، وعقود الصيانة الدورية في قطر.'
    : 'Comprehensive 8-stage industrial services lifecycle in Qatar: site assessment, engineering design, certified supply, field installation, commissioning, and preventive maintenance.',
  keywords: isAr.value
    ? 'خدمات صيانة هيدروليك قطر, تركيب مصدات أمنية الدوحة, تركيب منصات تحميل قطر, عقود صيانة سنوية معدات صناعية, تدريب تشغيل مكابس, فحص ميداني واستشارات هندسية قطر'
    : 'hydraulic maintenance Qatar, security bollard installation Doha, dock leveler maintenance, industrial maintenance contracts Qatar, engineering survey Doha',
  ogTitle: isAr.value ? 'خدمات بيستوليكس الهندسية والصناعية المتكاملة - قطر' : 'Bestolex Integrated Engineering Services - Qatar',
  ogDescription: isAr.value ? 'من دراسة الاحتياج إلى التركيب والتشغيل والدعم الفني المستمر.' : 'From site assessment to installation, commissioning, and continuous technical support.',
  ogImage: '/images/categories/docking-systems.jpg'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'serviceType': 'Industrial & Hydraulic Engineering Services',
        'provider': {
          '@type': 'Organization',
          'name': 'Bestolex Trading & Contracting'
        },
        'areaServed': {
          '@type': 'Country',
          'name': 'Qatar'
        },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Engineering & After-Sales Services',
          'itemListElement': [
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'دراسة الاحتياج والمعاينة الميدانية' } },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'التركيب والإشراف الهندسي' } },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'التشغيل التجريبي والتدريب' } },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'الصيانة الوقائية وقطع الغيار الأصلية' } }
          ]
        }
      })
    }
  ]
})

// Hero Carousel Slides
const heroSlides = [
  {
    image: 'https://sabtech.com.sa/wp-content/uploads/2020/12/neuer-slider-HighTech2.jpg',
    title: { ar: 'تصنيع وهندسة متقدمة', en: 'Advanced Manufacturing & Engineering' }
  },
  {
    image: '/images/categories/docking-systems.jpg',
    title: { ar: 'أنظمة التحميل والمستودعات', en: 'Loading & Warehouse Systems' }
  },
  {
    image: '/images/categories/waste-management.jpg',
    title: { ar: 'حلول إدارة وتدوير النفايات', en: 'Waste Management & Recycling Solutions' }
  },
  {
    image: '/images/categories/perimeter-protection.jpg',
    title: { ar: 'أنظمة حماية المحيط والأمان', en: 'Perimeter Protection & Security' }
  },
  {
    image: '/images/categories/industrial-doors.jpg',
    title: { ar: 'الأبواب الصناعية والحلول اللوجستية', en: 'Industrial Doors & Logistics' }
  }
]

const currentSlide = ref(0)
let slideInterval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length
}

const setSlide = (index) => {
  currentSlide.value = index
  resetSlideTimer()
}

const resetSlideTimer = () => {
  if (slideInterval) clearInterval(slideInterval)
  slideInterval = setInterval(nextSlide, 4500)
}

onMounted(() => {
  resetSlideTimer()
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
})

// Services List with dedicated high-res contextual images & highlights
const services = [
  {
    icon: '📋',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
    title: { ar: 'دراسة الاحتياج والمعاينة', en: 'Requirement Assessment & Site Survey' },
    desc: { ar: 'دراسة دقيقة لاحتياجات العميل ومعاينة ميدانية للموقع لفهم ظروف التشغيل والمتطلبات الفنية.', en: 'Comprehensive assessment of customer needs and site survey to understand operating conditions and technical requirements.' },
    highlight: { ar: 'معاينة ميدانية وتقارير فنية', en: 'Site survey & technical reporting' }
  },
  {
    icon: '💡',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    title: { ar: 'المقترح الفني والتجاري', en: 'Technical & Commercial Proposal' },
    desc: { ar: 'اختيار الحل الهندسي الأنسب وإعداد عروض فنية ومالية شفافة ومطابقة للمواصفات.', en: 'Selecting the optimal engineering solution and preparing transparent technical and commercial proposals.' },
    highlight: { ar: 'دراسات جدوى وعروض أسعار متكاملة', en: 'Feasibility & complete proposals' }
  },
  {
    icon: '📦',
    image: '/images/categories/docking-systems.jpg',
    title: { ar: 'إدارة الخدمات اللوجستية', en: 'Supply & Logistics Management' },
    desc: { ar: 'إدارة سلاسل التوريد والشحن والتخليص الجمركي وفق الجداول الزمنية المعتمدة للمشروع.', en: 'Managing supply chain, shipping, and customs clearance strictly adhering to project timelines.' },
    highlight: { ar: 'شحن آمن والتزام دقيق بالمواعيد', en: 'Safe shipping & punctual delivery' }
  },
  {
    icon: '🛠️',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    title: { ar: 'التركيب والإشراف الفني', en: 'Installation & Technical Supervision' },
    desc: { ar: 'تنفيذ أعمال التركيب الميداني بأيدي مهندسين وفنيين معتمدين وفق معايير السلامة المهنية.', en: 'Executing site installations by certified engineers and technicians following strict safety standards.' },
    highlight: { ar: 'إشراف هندسي معتمد', en: 'Certified engineering supervision' }
  },
  {
    icon: '✅',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    title: { ar: 'الاختبار والتشغيل والتسليم', en: 'Testing, Commissioning & Handover' },
    desc: { ar: 'اختبار كفاءة الأنظمة وتشغيلها الفعلي تحت الضغط وتسليمها وفق معايير الجودة المعتمدة.', en: 'Load testing, operational verification, and formal handover according to approved quality benchmarks.' },
    highlight: { ar: 'شهادات فحص واختبار أداء', en: 'Inspection & test certificates' }
  },
  {
    icon: '👨‍🏫',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80',
    title: { ar: 'التدريب على التشغيل', en: 'Operational Training' },
    desc: { ar: 'تدريب كوادر العميل على التشغيل الصحيح والاستخدام الآمن وإجراءات الطوارئ.', en: 'Training customer personnel on proper operation, safe handling, and emergency protocols.' },
    highlight: { ar: 'تدريب عملي للكوادر الفنية', en: 'Hands-on operational training' }
  },
  {
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    title: { ar: 'الصيانة الوقائية والتصحيحية', en: 'Preventive & Corrective Maintenance' },
    desc: { ar: 'عقود صيانة دورية مرنة واستجابة سريعة للأعطال للحفاظ على استمرارية الإنتاج.', en: 'Flexible routine maintenance contracts and rapid fault response to maintain workflow continuity.' },
    highlight: { ar: 'عقود صيانة دورية ومرنة', en: 'Flexible routine maintenance contracts' }
  },
  {
    icon: '⚙️',
    image: '/images/categories/industrial-doors.jpg',
    title: { ar: 'توفير قطع الغيار الأصلية', en: 'Spare Parts & After-Sales Support' },
    desc: { ar: 'مخزون وفير من قطع الغيار الأصلية المعتمدة لضمان أطول عمر افتراضي للمعدات.', en: 'Extensive inventory of genuine certified spare parts ensuring the longest equipment service life.' },
    highlight: { ar: 'قطع أصلية وضمان معتمد', en: 'Original parts & certified warranty' }
  }
]
</script>

<style scoped>
/* Hero Crossfade Animation */
.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 1.2s ease-in-out;
}

.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}
</style>
