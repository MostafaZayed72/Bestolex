<template>
  <div class="py-20 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="container mx-auto" data-aos="fade-up">
      <h1 class="text-4xl font-bold mb-12 text-center text-primary">{{ locale === 'ar' ? 'تواصل معنا' : 'Contact Us' }}</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <!-- Contact Info Placeholder -->
        <div class="bg-white dark:bg-secondary p-8 rounded-2xl shadow-lg" data-aos="fade-right">
          <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">{{ locale === 'ar' ? 'معلومات التواصل' : 'Contact Information' }}</h2>
          <div class="space-y-4 text-gray-600 dark:text-gray-300">
            <p><strong>{{ locale === 'ar' ? 'البريد الإلكتروني:' : 'Email:' }}</strong> <a href="mailto:info@bestolex.com" class="text-primary hover:underline">info@bestolex.com</a></p>
            <p><strong>{{ locale === 'ar' ? 'رقم الهاتف:' : 'Phone:' }}</strong> <span dir="ltr">+974 5070 8833</span> | <span dir="ltr">+974 5150 5014</span></p>
            <p><strong>{{ locale === 'ar' ? 'العنوان:' : 'Address:' }}</strong> {{ locale === 'ar' ? 'الدوحة، المنتزه، مركز المنتزه التجاري، منطقة 24، شارع 830، مبنى 16، الطابق 7، مكتب 714، صندوق البريد: 37439، دولة قطر' : 'Doha, Al Muntazah, Al Muntazah Commercial Center, Zone 24, Street 830, Building 16, Floor 7, Office 714, P.O. Box 37439, State of Qatar' }}</p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white dark:bg-secondary p-8 rounded-2xl shadow-lg" data-aos="fade-left">
          <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">{{ locale === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message' }}</h2>
          
          <form class="space-y-4" @submit.prevent="submitForm">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'الاسم' : 'Name' }}</label>
              <input v-model="form.name" type="text" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none dark:bg-gray-800 dark:border-gray-700">
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'البريد الإلكتروني' : 'Email' }}</label>
              <input v-model="form.email" type="email" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none dark:bg-gray-800 dark:border-gray-700">
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'رقم الهاتف (اختياري)' : 'Phone (Optional)' }}</label>
              <input v-model="form.phone" type="text" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none dark:bg-gray-800 dark:border-gray-700">
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'الرسالة' : 'Message' }}</label>
              <textarea v-model="form.message" rows="4" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none dark:bg-gray-800 dark:border-gray-700"></textarea>
            </div>
            
            <button type="submit" :disabled="loading" class="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition shadow disabled:opacity-50">
              <span v-if="loading">{{ locale === 'ar' ? 'جاري الإرسال...' : 'Sending...' }}</span>
              <span v-else>{{ locale === 'ar' ? 'إرسال' : 'Send' }}</span>
            </button>
            
            <p v-if="statusMessage" :class="statusType === 'success' ? 'text-green-600' : 'text-red-600'" class="mt-4 text-center font-bold">
              {{ statusMessage }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()

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
