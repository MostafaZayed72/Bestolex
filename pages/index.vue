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
          <img src="/logo.png" alt="Bestolex Logo" class="h-20 md:h-32 object-contain drop-shadow-xl filter brightness-0 invert" />
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
              <img :src="category.image" :alt="category.title[locale]" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
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
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
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
    <section class="py-20 bg-white dark:bg-[#0d0d0d]">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white" data-aos="fade-up">
          {{ locale === 'ar' ? 'خدماتنا' : 'Our Services' }}
        </h2>
        <p class="text-center text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
          {{ locale === 'ar' ? 'تقوم بيستوليكس بتصميم وإصلاح جميع أنواع النظم الهيدروليكية (وحدات الطاقة) لاستخدامات مختلفة وفقاً لمتطلبات العملاء باستخدام الأجزاء ذات العلامات التجارية الحاصلة على أعلى شهادات الاختيار.' : 'Bestolex designs and repairs all types of hydraulic systems according to customer requirements using top branded parts.' }}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="(srv, idx) in services" :key="srv.id" class="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow bg-gray-50 dark:bg-gray-900 group" :data-aos="'fade-up'" :data-aos-delay="idx * 100">
            <div class="h-40 overflow-hidden bg-white dark:bg-black p-4 flex items-center justify-center">
              <img :src="srv.image" :alt="srv.title" class="max-h-full object-contain group-hover:scale-105 transition-transform" />
            </div>
            <div class="p-4 flex items-center justify-between text-primary font-bold">
              <span>{{ srv.title }}</span>
              <span class="text-xl">&larr;</span>
            </div>
          </div>
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

    <!-- Clients Marquee -->
    <section class="py-16 bg-white dark:bg-gray-800 overflow-hidden border-y border-gray-100 dark:border-gray-700">
      <div class="container mx-auto px-4 mb-8">
        <h2 class="text-3xl font-bold text-center text-primary" data-aos="fade-up">
          {{ locale === 'ar' ? 'عملائنا' : 'Our Clients' }}
        </h2>
      </div>
      <div class="flex space-x-12 animate-marquee whitespace-nowrap items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
        <!-- Mock client texts instead of logos for now -->
        <span v-for="n in 10" :key="n" class="text-2xl font-black text-gray-400 dark:text-gray-500 mx-8">
          LOGO {{ n }}
        </span>
        <span v-for="n in 10" :key="'dup'+n" class="text-2xl font-black text-gray-400 dark:text-gray-500 mx-8">
          LOGO {{ n }}
        </span>
      </div>
    </section>

    <!-- Testimonials Section - Automated Carousel -->
    <section class="py-24 bg-gradient-to-br from-primary/10 via-white to-primary/5 dark:from-gray-900 dark:via-black dark:to-gray-900 relative">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-16 text-gray-900 dark:text-white" data-aos="fade-up">
          {{ locale === 'ar' ? 'آراء عملائنا' : 'Client Testimonials' }}
        </h2>
        <div class="max-w-4xl mx-auto relative h-64 flex items-center justify-center">
          <transition-group name="fade-slide" tag="div" class="w-full relative h-full">
            <div v-for="(t, idx) in testimonials" :key="t.id" v-show="activeTestimonial === idx" class="absolute inset-0 flex flex-col items-center justify-center w-full">
              <span class="text-6xl text-primary opacity-30 absolute top-0 left-1/2 -translate-x-1/2 -mt-8 font-serif">"</span>
              <p class="text-2xl md:text-3xl italic mb-8 text-gray-700 dark:text-gray-300 font-medium leading-relaxed relative z-10">
                {{ t.text }}
              </p>
              <div class="flex flex-col items-center relative z-10">
                <div class="w-12 h-1 bg-primary rounded-full mb-4"></div>
                <div class="font-black text-lg text-gray-900 dark:text-white">{{ t.name }}</div>
                <div class="text-sm text-primary font-bold">{{ t.company }}</div>
              </div>
            </div>
          </transition-group>
        </div>
        
        <!-- Indicators -->
        <div class="flex justify-center gap-3 mt-8">
          <button v-for="(_, idx) in testimonials" :key="idx" @click="activeTestimonial = idx"
            :class="['w-3 h-3 rounded-full transition-all duration-300', activeTestimonial === idx ? 'bg-primary w-8' : 'bg-gray-300 dark:bg-gray-700 hover:bg-primary/50']">
          </button>
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

const services = [
  { id: 1, title: 'مضخات، محركات وصمامات', image: '/images/services/srv1.png' },
  { id: 2, title: 'مركز صيانة للتدريب الهيدروليكي', image: '/images/services/srv2.png' },
  { id: 3, title: 'طلاء الكروم وتنعيم مواسير البستم', image: '/images/services/srv3.png' },
  { id: 4, title: 'نظم الهيدروليك', image: '/images/services/srv4.png' },
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
