<template>
  <div class="py-20 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="container mx-auto" data-aos="fade-up">
      <h1 class="text-4xl font-bold mb-12 text-center text-primary">{{ locale === 'ar' ? 'تواصل معنا' : 'Contact Us' }}</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <!-- Contact Info Placeholder -->
        <div class="bg-white dark:bg-secondary p-8 rounded-2xl shadow-lg" data-aos="fade-right">
          <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">{{ locale === 'ar' ? 'معلومات التواصل' : 'Contact Information' }}</h2>
          <div class="space-y-4 text-gray-600 dark:text-gray-300">
            <p>{{ locale === 'ar' ? 'بانتظار تزويدنا بمعلومات التواصل (رقم الهاتف، البريد الإلكتروني، العنوان)...' : 'Waiting for contact details (Phone, Email, Address)...' }}</p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white dark:bg-secondary p-8 rounded-2xl shadow-lg" data-aos="fade-left">
          <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">{{ locale === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message' }}</h2>
          <form class="space-y-4" @submit.prevent>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'الاسم' : 'Name' }}</label>
              <input type="text" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none dark:bg-gray-800 dark:border-gray-700">
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'البريد الإلكتروني' : 'Email' }}</label>
              <input type="email" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none dark:bg-gray-800 dark:border-gray-700">
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">{{ locale === 'ar' ? 'الرسالة' : 'Message' }}</label>
              <textarea rows="4" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none dark:bg-gray-800 dark:border-gray-700"></textarea>
            </div>
            <button type="submit" class="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition shadow">
              {{ locale === 'ar' ? 'إرسال' : 'Send' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()
</script>
