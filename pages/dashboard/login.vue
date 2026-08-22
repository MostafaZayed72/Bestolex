<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4 font-sans transition-colors duration-300" dir="rtl">
    <div class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-2xl rounded-3xl p-8 sm:p-12 w-full max-w-md text-center">
      
      <!-- Logo -->
      <div class="flex justify-center mb-6">
        <NuxtImg src="/logo.png" alt="Bestolex Logo" class="h-12 object-contain dark:hidden" format="webp" loading="eager" />
        <NuxtImg src="/logo-dark-transparent.png" alt="Bestolex Logo" class="h-12 object-contain hidden dark:block" format="webp" loading="eager" />
      </div>

      <h1 class="text-2xl font-black text-gray-900 dark:text-white mb-2">تسجيل دخول لوحة التحكم</h1>
      <p class="text-gray-500 dark:text-gray-400 text-sm mb-8">أدخل بيانات المسؤول للوصول إلى لوحة إدارة الموقع</p>

      <!-- Error Alert -->
      <div v-if="errorMessage" class="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-sm font-bold border border-red-100 dark:border-red-900/30">
        {{ errorMessage }}
      </div>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="space-y-5 text-start">
        <div>
          <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">البريد الإلكتروني</label>
          <input 
            v-model="email" 
            type="email" 
            required 
            dir="ltr"
            placeholder="bestolex.qa@gmail.com" 
            class="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
          >
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">كلمة المرور</label>
          <input 
            v-model="password" 
            type="password" 
            required 
            placeholder="••••••" 
            class="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
          >
        </div>

        <div class="pt-4">
          <button 
            type="submit" 
            :disabled="isLoading"
            class="w-full py-4 bg-primary hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            <svg v-if="isLoading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span v-else>تسجيل الدخول</span>
          </button>
        </div>
      </form>

      <!-- Back to site link -->
      <div class="mt-8">
        <NuxtLink to="/" class="text-xs font-bold text-gray-400 hover:text-primary transition">
          &larr; العودة إلى الموقع الرئيسي
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: false,
  middleware: 'auth'
})

const router = useRouter()
const email = ref('bestolex.qa@gmail.com')
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      }
    })

    if (response.success) {
      const authCookie = useCookie('bestolex_admin_token')
      authCookie.value = response.token
      router.push('/dashboard')
    } else {
      errorMessage.value = response.message || 'بيانات الدخول غير صحيحة'
    }
  } catch (error) {
    // Local fallback comparison
    if (email.value === 'bestolex.qa@gmail.com' && password.value === '123456') {
      const authCookie = useCookie('bestolex_admin_token')
      authCookie.value = 'bestolex_admin_authenticated'
      router.push('/dashboard')
    } else {
      errorMessage.value = 'البريد الإلكتروني أو كلمة المرور غير صحيحة'
    }
  } finally {
    isLoading.value = false
  }
}
</script>
