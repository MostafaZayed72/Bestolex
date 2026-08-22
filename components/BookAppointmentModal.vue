<template>
  <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto px-4 py-8 sm:px-0">
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" @click="closeModal"></div>

    <!-- Modal Panel -->
    <div class="relative bg-white dark:bg-secondary rounded-3xl shadow-2xl w-full max-w-lg p-6 sm:p-8 transform transition-all border border-gray-100 dark:border-gray-800 flex flex-col max-h-full overflow-y-auto">
      <!-- Close Button -->
      <button @click="closeModal" class="absolute top-4 right-4 rtl:right-auto rtl:left-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition bg-gray-100 dark:bg-gray-800 rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="text-center mb-8">
        <div class="w-16 h-16 bg-orange-100 dark:bg-gray-800 text-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-2xl font-black text-gray-900 dark:text-white">{{ locale === 'ar' ? 'حجز موعد جديد' : 'Book an Appointment' }}</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm mt-2 font-medium">
          {{ locale === 'ar' ? 'قم بتعبئة البيانات وسنقوم بتأكيد الموعد عبر البريد الإلكتروني.' : 'Fill in the details and we will confirm your appointment via email.' }}
        </p>
      </div>

      <!-- Success Message -->
      <div v-if="submitSuccess" class="text-center py-8">
        <div class="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ locale === 'ar' ? 'تم استلام طلبك بنجاح' : 'Request Received Successfully' }}</h4>
        <p class="text-gray-500 dark:text-gray-400 mb-6">{{ locale === 'ar' ? 'تم إرسال رسالة تأكيد إلى بريدك الإلكتروني.' : 'A confirmation email has been sent to you.' }}</p>
        <button @click="closeModal" class="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          {{ locale === 'ar' ? 'إغلاق' : 'Close' }}
        </button>
      </div>

      <!-- Booking Form -->
      <form v-else @submit.prevent="submitBooking" class="space-y-5">
        <div v-if="submitError" class="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-sm font-medium border border-red-100 dark:border-red-900/30 text-center">
          {{ locale === 'ar' ? 'حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.' : 'An error occurred while submitting the request. Please try again.' }}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <!-- Name -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5 ltr:ml-1 rtl:mr-1">{{ locale === 'ar' ? 'الاسم بالكامل' : 'Full Name' }} *</label>
            <input v-model="form.name" type="text" required class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" :placeholder="locale === 'ar' ? 'أدخل اسمك الكريم' : 'Enter your name'">
          </div>

          <!-- Email -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5 ltr:ml-1 rtl:mr-1">{{ locale === 'ar' ? 'البريد الإلكتروني' : 'Email Address' }} *</label>
            <input v-model="form.email" type="email" required class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" dir="ltr" placeholder="email@example.com">
          </div>

          <!-- Phone -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5 ltr:ml-1 rtl:mr-1">{{ locale === 'ar' ? 'رقم الهاتف' : 'Phone Number' }} *</label>
            <input v-model="form.phone" type="tel" required class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition" dir="ltr" placeholder="+974 XXXXXXXX">
          </div>

          <!-- Date -->
          <div>
            <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5 ltr:ml-1 rtl:mr-1">{{ locale === 'ar' ? 'تاريخ الموعد' : 'Appointment Date' }} *</label>
            <input v-model="form.date" type="date" required :min="minDate" class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition">
          </div>

          <!-- Time -->
          <div>
            <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5 ltr:ml-1 rtl:mr-1">{{ locale === 'ar' ? 'وقت الموعد' : 'Appointment Time' }} *</label>
            <input v-model="form.time" type="time" required class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition">
          </div>
        </div>

        <div class="mt-8">
          <button type="submit" :disabled="isSubmitting" class="w-full py-4 bg-primary hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
            <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span v-else>{{ locale === 'ar' ? 'تأكيد الحجز' : 'Confirm Booking' }}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const { locale } = useI18n()

const form = ref({
  name: '',
  email: '',
  phone: '',
  date: '',
  time: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)

const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

const closeModal = () => {
  emit('close')
  // Reset after animation
  setTimeout(() => {
    submitSuccess.value = false
    submitError.value = false
    form.value = { name: '', email: '', phone: '', date: '', time: '' }
  }, 300)
}

const submitBooking = async () => {
  isSubmitting.value = true
  submitError.value = false
  
  try {
    const response = await $fetch('/api/book-appointment', {
      method: 'POST',
      body: {
        ...form.value,
        locale: locale.value
      }
    })
    
    if (response.success) {
      submitSuccess.value = true
    } else {
      submitError.value = true
    }
  } catch (error) {
    console.error('Booking submission error:', error)
    submitError.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>
