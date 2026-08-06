<template>
  <div class="py-20 px-4">
    <div class="container mx-auto text-center" data-aos="fade-up">
      <h1 class="text-4xl font-bold mb-8 text-primary">{{ locale === 'ar' ? 'من نحن' : 'About Us' }}</h1>
      <div class="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow">
        <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {{ locale === 'ar' ? 'سيتم إضافة المحتوى الخاص بصفحة من نحن قريباً بناءً على المعلومات التي ستقوم بتزويدنا بها...' : 'The About Us content will be added soon based on the information you provide...' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()
</script>
