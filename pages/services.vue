<template>
  <div class="services-page bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300 py-24">
    <div class="container mx-auto px-4 md:px-8">
      
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <div class="inline-block bg-primary/10 text-primary font-extrabold px-4 py-1.5 rounded-lg text-sm mb-4">
          {{ locale === 'ar' ? 'رحلة الخدمة المتكاملة' : 'Integrated Service Journey' }}
        </div>
        <h1 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
          {{ locale === 'ar' ? 'خدمات تلبي تطلعات أعمالكم' : 'Services That Meet Your Business Aspirations' }}
        </h1>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {{ locale === 'ar' 
            ? 'تُقدَّم الخدمات التالية وفق طبيعة المنتج ونطاق العمل المتفق عليه لكل مشروع لضمان أعلى معايير الجودة والاعتمادية.' 
            : 'The following services are provided according to the product nature and agreed scope of work for each project, ensuring the highest standards of quality and reliability.' 
          }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(service, idx) in services" 
          :key="idx" 
          class="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 hover:-translate-y-2 hover:shadow-2xl transition duration-500 flex flex-col items-center text-center group"
          data-aos="fade-up"
          :data-aos-delay="idx * 100"
        >
          <div class="w-20 h-20 bg-gray-50 dark:bg-gray-700 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:bg-[#E99E15] group-hover:text-white transition-colors duration-500">
            {{ service.icon }}
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {{ service.title[locale] }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            {{ service.desc[locale] }}
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

useHead({
  title: locale.value === 'ar' ? 'الخدمات | بيستوليكس' : 'Services | Bestolex'
})

const services = [
  {
    icon: '📋',
    title: { ar: 'دراسة الاحتياج والمعاينة', en: 'Requirement Assessment & Site Survey' },
    desc: { ar: 'دراسة احتياجات العميل ومعاينة الموقع عند الحاجة لفهم ظروف التشغيل والمتطلبات الفنية.', en: 'Assessing customer requirements and surveying the site to understand operating conditions and technical needs.' }
  },
  {
    icon: '💡',
    title: { ar: 'المقترح الفني والتجاري', en: 'Technical & Commercial Proposal' },
    desc: { ar: 'اختيار الحل المناسب وإعداد المقترح الفني والتجاري وفق متطلبات المشروع.', en: 'Selecting the appropriate solution and preparing a technical and commercial proposal based on project requirements.' }
  },
  {
    icon: '📦',
    title: { ar: 'إدارة الخدمات اللوجستية', en: 'Supply & Logistics Management' },
    desc: { ar: 'إدارة عمليات التوريد والخدمات اللوجستية وفق الجدول الزمني ونطاق العمل المتفق عليه.', en: 'Managing supply and logistics activities according to the agreed schedule and scope of work.' }
  },
  {
    icon: '🛠️',
    title: { ar: 'التركيب والإشراف الفني', en: 'Installation & Technical Supervision' },
    desc: { ar: 'تنفيذ أعمال التركيب أو الإشراف الفني عليها وفق طبيعة المنتج ومتطلبات المشروع.', en: 'Performing or technically supervising installation activities according to product and project requirements.' }
  },
  {
    icon: '✅',
    title: { ar: 'الاختبار والتشغيل والتسليم', en: 'Testing, Commissioning & Handover' },
    desc: { ar: 'اختبار الأنظمة وتشغيلها وتسليمها وفق نطاق العمل المتفق عليه.', en: 'Testing, commissioning, and handing over the systems according to the agreed scope of work.' }
  },
  {
    icon: '👨‍🏫',
    title: { ar: 'التدريب على التشغيل', en: 'Operational Training' },
    desc: { ar: 'تدريب فريق العميل على التشغيل والاستخدام الآمن عند الحاجة.', en: 'Training the customer’s team on proper and safe operation when required.' }
  },
  {
    icon: '🔧',
    title: { ar: 'الصيانة الوقائية والتصحيحية', en: 'Preventive & Corrective Maintenance' },
    desc: { ar: 'توفير خدمات الصيانة الوقائية والتصحيحية وفق نوع المنتج واتفاقية الخدمة.', en: 'Providing preventive and corrective maintenance according to the product type and service agreement.' }
  },
  {
    icon: '⚙️',
    title: { ar: 'توفير قطع الغيار', en: 'Spare Parts & After-Sales Support' },
    desc: { ar: 'توفير قطع الغيار والدعم الفني وخدمات ما بعد البيع وفق نطاق المنتج والمشروع.', en: 'Providing spare parts, technical assistance, and after-sales support according to the product and project scope.' }
  }
]
</script>
