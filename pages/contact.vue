<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <!-- Hero Section -->
    <div class="relative w-full h-[30vh] sm:h-[40vh] min-h-[250px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-black/60 z-10"></div>
      <img src="/images/services/srv1.png" alt="Contact Us" class="absolute inset-0 w-full h-full object-cover z-0 filter blur-[2px]" />
      <div class="relative z-20 text-center px-4" data-aos="fade-down">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{{ locale === 'ar' ? 'تواصل معنا' : 'Contact Us' }}</h1>
        <p class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
          {{ locale === 'ar' ? 'نحن هنا للإجابة على استفساراتك وتلبية احتياجاتك. لا تتردد في الاتصال بنا.' : 'We are here to answer your questions and meet your needs. Feel free to contact us.' }}
        </p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="container mx-auto px-4 py-16 -mt-10 relative z-30">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
        
        <!-- Contact Info (Left/RTL-Right) -->
        <div class="lg:col-span-2 space-y-6" data-aos="fade-right">
          <div class="bg-white dark:bg-secondary p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 transform hover:-translate-y-1 transition duration-300 h-full flex flex-col">
            <h2 class="text-2xl font-extrabold mb-8 text-gray-800 dark:text-white border-b-2 border-primary pb-3 inline-block">
              {{ locale === 'ar' ? 'معلومات التواصل' : 'Contact Information' }}
            </h2>
            
            <div class="space-y-8 text-gray-600 dark:text-gray-300 flex-grow">
              <!-- Email -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-orange-100 dark:bg-gray-800 text-primary rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-800 dark:text-white text-lg mb-1">{{ locale === 'ar' ? 'البريد الإلكتروني' : 'Email' }}</h4>
                  <a href="mailto:info@bestolex.com" class="text-primary hover:underline font-medium transition">info@bestolex.com</a>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-orange-100 dark:bg-gray-800 text-primary rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-800 dark:text-white text-lg mb-1">{{ locale === 'ar' ? 'رقم الهاتف' : 'Phone' }}</h4>
                  <p dir="ltr" class="font-medium">+974 5070 8833</p>
                  <p dir="ltr" class="font-medium">+974 5150 5014</p>
                </div>
              </div>

              <!-- Address -->
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-orange-100 dark:bg-gray-800 text-primary rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-800 dark:text-white text-lg mb-1">{{ locale === 'ar' ? 'العنوان' : 'Address' }}</h4>
                  <p class="leading-relaxed text-sm font-medium">
                    {{ locale === 'ar' ? 'الدوحة، المنتزه، مركز المنتزه التجاري، منطقة 24، شارع 830، مبنى 16، الطابق 7، مكتب 714، صندوق البريد: 37439، دولة قطر' : 'Doha, Al Muntazah, Al Muntazah Commercial Center, Zone 24, Street 830, Building 16, Floor 7, Office 714, P.O. Box 37439, State of Qatar' }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Google Map -->
            <div class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 w-full">
              <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-gray-800 dark:text-white text-lg">{{ locale === 'ar' ? 'موقعنا على الخريطة' : 'Our Location' }}</h4>
                <a href="https://maps.app.goo.gl/dsPskLm4xnu1zEmy7?g_st=ipc" target="_blank" class="text-sm text-primary hover:underline font-bold flex items-center gap-1">
                  {{ locale === 'ar' ? 'فتح في خرائط جوجل' : 'Open in Google Maps' }}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                </a>
              </div>
              <div class="w-full rounded-2xl overflow-hidden shadow-inner border border-gray-100 dark:border-gray-700 h-64">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2045155609355!2d51.5222045!3d25.2636952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x221711200b21a37c!2sAl%20Muntazah%2C%20Doha%2C%20Qatar!5e0!3m2!1sen!2sus!4v1714902000000!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form (Right/RTL-Left) -->
        <div class="lg:col-span-3" data-aos="fade-left">
          <div class="bg-white dark:bg-secondary p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden h-full">
            <!-- Decorative circle -->
            <div class="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            
            <h2 class="text-3xl font-bold mb-8 text-gray-800 dark:text-white">{{ locale === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message' }}</h2>
            
            <form class="space-y-6 relative z-10" @submit.prevent="submitForm">
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name Input -->
                <div>
                  <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'الاسم' : 'Name' }}</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 rtl:right-0 ltr:left-0 flex items-center rtl:pr-4 ltr:pl-4 pointer-events-none">
                      <svg class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                    <input v-model="form.name" type="text" required class="w-full rtl:pr-12 ltr:pl-12 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition text-gray-800 dark:text-white" :placeholder="locale === 'ar' ? 'الاسم بالكامل' : 'Full Name'">
                  </div>
                </div>

                <!-- Phone Input -->
                <div>
                  <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'رقم الهاتف (اختياري)' : 'Phone (Optional)' }}</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 rtl:right-0 ltr:left-0 flex items-center rtl:pr-4 ltr:pl-4 pointer-events-none">
                      <svg class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <input v-model="form.phone" type="text" class="w-full rtl:pr-12 ltr:pl-12 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition text-gray-800 dark:text-white" :placeholder="locale === 'ar' ? 'رقم الموبايل' : 'Phone Number'">
                  </div>
                </div>
              </div>

              <!-- Email Input -->
              <div>
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'البريد الإلكتروني' : 'Email' }}</label>
                <div class="relative">
                  <div class="absolute inset-y-0 rtl:right-0 ltr:left-0 flex items-center rtl:pr-4 ltr:pl-4 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <input v-model="form.email" type="email" required class="w-full rtl:pr-12 ltr:pl-12 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition text-gray-800 dark:text-white" :placeholder="locale === 'ar' ? 'example@mail.com' : 'example@mail.com'">
                </div>
              </div>

              <!-- Message Input -->
              <div>
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'الرسالة' : 'Message' }}</label>
                <div class="relative">
                  <div class="absolute top-4 rtl:right-0 ltr:left-0 flex items-start rtl:pr-4 ltr:pl-4 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                  </div>
                  <textarea v-model="form.message" rows="5" required class="w-full rtl:pr-12 ltr:pl-12 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition text-gray-800 dark:text-white resize-none" :placeholder="locale === 'ar' ? 'اكتب رسالتك هنا...' : 'Type your message here...'"></textarea>
                </div>
              </div>
              
              <!-- Submit Button -->
              <button type="submit" :disabled="loading" class="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2 mt-4">
                <span v-if="loading" class="flex items-center gap-2">
                  <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ locale === 'ar' ? 'جاري الإرسال...' : 'Sending...' }}
                </span>
                <span v-else class="flex items-center gap-2">
                  {{ locale === 'ar' ? 'إرسال الرسالة' : 'Send Message' }}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>
              </button>
              
              <div v-if="statusMessage" :class="statusType === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'" class="p-4 rounded-xl border flex items-center gap-3">
                <svg v-if="statusType === 'success'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="font-medium">{{ statusMessage }}</p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const { locale } = useI18n()

const isAr = computed(() => locale.value === 'ar')

useSeoMeta({
  title: isAr.value
    ? 'تواصل معنا | طلب عروض الأسعار والاستشارات الهندسية - بيستوليكس قطر'
    : 'Contact Us | Request Quotes & Engineering Consultations - Bestolex Qatar',
  description: isAr.value
    ? 'تواصل مباشرة مع فريق بيستوليكس في الدوحة، قطر لطلب عروض الأسعار، المعاينة الميدانية، والاستشارات الهندسية للمعدات الهيدروليكية وحلول حماية المحيط والمستودعات.'
    : 'Contact Bestolex Trading in Doha, Qatar for quotes, site survey requests, and technical consultations on hydraulic and industrial systems.',
  keywords: isAr.value
    ? 'تواصل مع بيستوليكس, رقم هاتف بيستوليكس قطر, طلب عرض سعر معدات صناعية قطر, حجز موعد استشارة هندسية الدوحة, عنوان شركة بيستوليكس'
    : 'contact Bestolex Qatar, Bestolex phone number, industrial quote request Doha, engineering consultation booking Qatar',
  ogTitle: isAr.value ? 'تواصل مع شركة بيستوليكس للتجارة والمقاولات قطر' : 'Contact Bestolex Trading & Contracting Qatar',
  ogDescription: isAr.value ? 'فريقنا الهندسي جاهز للإجابة على استفساراتكم وتقديم العروض الفنية.' : 'Our engineering team is ready to assist with technical proposals and inquiries.',
  ogImage: '/images/hero/hero-bg.jpg'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': 'تواصل معنا | Bestolex Qatar',
        'mainEntity': {
          '@type': 'LocalBusiness',
          'name': 'Bestolex Trading & Contracting',
          'email': 'bestolex.qa@gmail.com',
          'telephone': '+974 5555 1234',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Doha',
            'addressCountry': 'QA'
          }
        }
      })
    }
  ]
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const loading = ref(false)
const statusMessage = ref('')
const statusType = ref('') // 'success' or 'error'

const submitForm = async () => {
  loading.value = true
  statusMessage.value = ''
  
  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })
    
    statusType.value = 'success'
    statusMessage.value = locale.value === 'ar' ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' : 'Your message has been sent successfully! We will contact you soon.'
    
    // Reset form
    form.value = { name: '', email: '', phone: '', message: '' }
  } catch (error) {
    statusType.value = 'error'
    statusMessage.value = locale.value === 'ar' ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' : 'An error occurred while sending. Please try again.'
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>
