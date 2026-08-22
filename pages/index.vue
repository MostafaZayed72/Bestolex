<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[80vh] flex items-center justify-center bg-gray-900 overflow-hidden">
      <!-- Video Background -->
      <div class="absolute inset-0 z-0">
        <video
          src="https://electrocreative-cdn.b-cdn.net/doctors.oralign.co_case-details_461%20(1).webm"
          referrerpolicy="no-referrer"
          autoplay
          loop
          muted
          playsinline
          class="w-full h-full object-cover opacity-60 dark:opacity-40"
        ></video>
        <!-- Optional overlay gradient for better text readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
      </div>
      <div class="relative z-10 text-center px-4" data-aos="fade-up">
        <div class="flex justify-center mb-8">
          <NuxtImg src="/logo.png" alt="Bestolex Logo" class="h-20 md:h-32 object-contain drop-shadow-xl filter brightness-0 invert" format="webp" loading="eager" />
        </div>
        <p class="text-xl md:text-3xl font-medium mb-8 text-gray-100 drop-shadow-md">
          {{ locale === 'ar' ? 'لتجارة الآلات والمعدات الثقيلة' : 'FOR TRADING OF HEAVY MACHINERY AND EQUIPMENT' }}
        </p>
        <NuxtLink :to="localePath('/products')" class="inline-block bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition shadow-lg shadow-primary/30 hover:scale-105">
          {{ locale === 'ar' ? 'اكتشف منتجاتنا' : 'Explore Our Products' }}
        </NuxtLink>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="py-20 bg-white dark:bg-secondary">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          {{ locale === 'ar' ? 'أبرز الأقسام' : 'Featured Categories' }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(category, index) in products" :key="category.id" class="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-xl transition group" :data-aos="'fade-up'" :data-aos-delay="index * 100">
            <div class="h-48 overflow-hidden relative">
              <NuxtImg :src="category.image" :alt="category.title[locale]" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" format="webp" loading="lazy" />
              <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2 text-primary">{{ category.title[locale] }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ category.description[locale] }}</p>
              <NuxtLink :to="localePath('/products')" class="text-secondary dark:text-white font-semibold hover:text-primary dark:hover:text-primary transition flex items-center gap-2">
                {{ locale === 'ar' ? 'عرض المزيد' : 'View More' }} &rarr;
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-aos="fade-up">
          {{ locale === 'ar' ? 'الأخبار والأحداث' : 'News & Events' }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(item, idx) in news" :key="item.id" class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300" :data-aos="'fade-up'" :data-aos-delay="idx * 100">
            <div class="h-48 overflow-hidden">
              <NuxtImg :src="item.image" :alt="item.title" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" format="webp" loading="lazy" />
            </div>
            <div class="p-6 text-center">
              <h3 class="font-bold text-lg text-gray-900 dark:text-white mb-3">{{ item.title }}</h3>
              <p class="text-gray-500 dark:text-gray-400 text-sm mb-6">{{ item.desc }}</p>
              <button class="bg-primary hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-bold transition-colors">
                {{ locale === 'ar' ? 'عرض التفاصيل' : 'View Details' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-24 bg-gray-50 dark:bg-[#0b0f17]">
      <div class="container mx-auto px-4 md:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div class="inline-block bg-primary/10 text-primary font-extrabold px-4 py-1.5 rounded-lg text-sm mb-4">
            {{ locale === 'ar' ? 'رحلة الخدمة المتكاملة' : 'Integrated Service Journey' }}
          </div>
          <h2 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            {{ locale === 'ar' ? 'خدماتنا الهندسية واللوجستية' : 'Our Engineering & Logistics Services' }}
          </h2>
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ locale === 'ar' 
              ? 'نرافقكم من دراسة الاحتياج والتصميم، حتى التوريد والتركيب والتشغيل وخدمات الصيانة والدعم الفني.' 
              : 'Accompanying you from requirement assessment to supply, installation, commissioning, and maintenance.' 
            }}
          </p>
        </div>

        <!-- 4 Services Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div 
            v-for="(service, idx) in homeServices" 
            :key="idx" 
            class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex flex-col group"
            data-aos="fade-up"
            :data-aos-delay="idx * 100"
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
                {{ service.stage[locale] }}
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

        <!-- View More Services Button -->
        <div class="text-center" data-aos="fade-up">
          <NuxtLink 
            :to="localePath('/services')" 
            class="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 text-lg"
          >
            <span>{{ locale === 'ar' ? 'عرض المزيد من الخدمات' : 'Explore All Services' }}</span>
            <span class="rtl:rotate-180 text-xl">&rarr;</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-24 relative bg-gray-900 overflow-hidden text-white">
      <div class="absolute inset-0 opacity-20" style="background-image: url('https://sabtech.com.sa/wp-content/uploads/2021/04/Hydraulic-Bollard-3.jpg'); background-size: cover; background-position: center; background-attachment: fixed;"></div>
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl md:text-5xl font-bold text-center mb-6 drop-shadow-lg" data-aos="fade-up">
          <span class="text-primary">{{ locale === 'ar' ? 'لماذا نختار ' : 'Why Choose ' }}</span>بيستوليكس
        </h2>
        <p class="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg drop-shadow-md" data-aos="fade-up" data-aos-delay="100">
          {{ locale === 'ar' ? 'يستفيد العملاء عند اختيار بيستوليكس حيث يمكنهم الوصول إلى المزايا والاختيارات الموضحة أدناه، حيث أننا نسعى جاهدين لتقديم منتجات عالية الجودة وموثوقة.' : 'Customers benefit when choosing Bestolex as they can access the advantages and choices shown below.' }}
        </p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 max-w-4xl mx-auto text-center">
          <div v-for="(feat, idx) in features" :key="idx" class="flex flex-col items-center group" :data-aos="'zoom-in'" :data-aos-delay="idx * 100">
            <div class="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 border-2 border-primary group-hover:bg-primary transition-colors duration-300 shadow-[0_0_15px_rgba(233,158,21,0.5)] group-hover:shadow-[0_0_30px_rgba(233,158,21,0.8)]">
              <span class="text-4xl filter grayscale contrast-200 group-hover:filter-none transition-all">{{ feat.icon }}</span>
            </div>
            <h4 class="font-bold text-lg drop-shadow-md">{{ feat.title }}</h4>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import mockProducts from '@/data/products.json'

const { locale } = useI18n()
const localePath = useLocalePath()
const products = ref(mockProducts)

// Mock Data for new sections
const news = [
  { id: 1, title: 'استكشاف أعطال تسربات الهيدروليك', image: '/images/news/news1.jpg', desc: 'تشكل الأنظمة الهيدروليكية عمليات حيوية في مصانع التصنيع ومعدات مناولة المواد...' },
  { id: 2, title: 'مقارنة بين حواجز مفجر الإطارات وحواجز المسامير', image: '/images/news/news2.jpg', desc: 'يُعد التحكم في حركة المركبات عند نقاط الدخول والخروج أمراً أساسياً للمرافق...' },
  { id: 3, title: 'دليل اختيار الزيوت الهيدروليكية', image: '/images/news/news3.jpg', desc: 'تتعرض الأنظمة الهيدروليكية العاملة في المملكة لبعض من أقسى الظروف البيئية...' }
]

const homeServices = [
  {
    icon: '📋',
    stage: { ar: 'المرحلة 01', en: 'Stage 01' },
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
    title: { ar: 'دراسة الاحتياج والمعاينة', en: 'Requirement Assessment & Site Survey' },
    desc: { ar: 'دراسة دقيقة لاحتياجات العميل ومعاينة ميدانية للموقع لفهم ظروف التشغيل والمتطلبات الفنية.', en: 'Comprehensive assessment of customer needs and site survey to understand operating conditions.' },
    highlight: { ar: 'معاينة ميدانية وتقارير فنية', en: 'Site survey & technical reporting' }
  },
  {
    icon: '💡',
    stage: { ar: 'المرحلة 02', en: 'Stage 02' },
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    title: { ar: 'المقترح الفني والتجاري', en: 'Technical & Commercial Proposal' },
    desc: { ar: 'اختيار الحل الهندسي الأنسب وإعداد عروض فنية ومالية شفافة ومطابقة للمواصفات.', en: 'Selecting optimal engineering solutions and preparing transparent technical proposals.' },
    highlight: { ar: 'عروض أسعار ودراسات متكاملة', en: 'Complete proposals & studies' }
  },
  {
    icon: '🛠️',
    stage: { ar: 'المرحلة 04', en: 'Stage 04' },
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    title: { ar: 'التركيب والإشراف الفني', en: 'Installation & Technical Supervision' },
    desc: { ar: 'تنفيذ أعمال التركيب الميداني بأيدي مهندسين وفنيين معتمدين وفق معايير السلامة المهنية.', en: 'Executing site installations by certified engineers following strict safety standards.' },
    highlight: { ar: 'إشراف هندسي معتمد', en: 'Certified engineering supervision' }
  },
  {
    icon: '🔧',
    stage: { ar: 'المرحلة 07', en: 'Stage 07' },
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80',
    title: { ar: 'الصيانة الوقائية والتصحيحية', en: 'Preventive & Corrective Maintenance' },
    desc: { ar: 'عقود صيانة دورية مرنة واستجابة سريعة للأعطال للحفاظ على استمرارية الإنتاج.', en: 'Flexible routine maintenance contracts and rapid fault response to ensure uptime.' },
    highlight: { ar: 'عقود صيانة دورية ومرنة', en: 'Flexible maintenance contracts' }
  }
]

const features = [
  { icon: '🔬', title: 'البحث والتطوير' },
  { icon: '⚙️', title: 'التصنيع والصيانة' },
  { icon: '👷', title: 'مهندسين' },
  { icon: '🤝', title: 'خدمات مابعد البيع' },
  { icon: '🛠️', title: 'التركيب' },
  { icon: '📦', title: 'منتجات حسب الطلب' }
]

const testimonials = [
  { id: 1, name: 'أحمد محمود', company: 'مدير المشتريات', text: 'معدات ذات كفاءة عالية وخدمة ما بعد البيع ممتازة. أنصح بالتعامل معهم. سرعة في التوريد واحترافية في التركيب فاق توقعاتنا.' },
  { id: 2, name: 'مؤسسة السيف للمقاولات', company: 'إدارة المشاريع', text: 'سرعة في التوريد واحترافية في التركيب. أداء المكابس فاق توقعاتنا بكثير وتتحمل العمل الشاق بشكل ممتاز.' },
  { id: 3, name: 'خالد عبد الرحمن', company: 'مصنع البلاستيك الوطني', text: 'أبواب الرول الصناعية لديهم تتحمل ضغط العمل الشاق ومصممة بعناية فائقة. فريق الصيانة متجاوب دائماً.' }
]

const activeTestimonial = ref(0)
let testimonialInterval = null

onMounted(() => {
  testimonialInterval = setInterval(() => {
    activeTestimonial.value = (activeTestimonial.value + 1) % testimonials.length
  }, 4000)
})

onUnmounted(() => {
  if (testimonialInterval) clearInterval(testimonialInterval)
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
