<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-950 flex font-sans transition-colors duration-300" dir="rtl">
    
    <!-- Mobile Backdrop -->
    <div 
      v-if="isSidebarOpen" 
      @click="isSidebarOpen = false" 
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
    ></div>

    <!-- Sidebar -->
    <aside 
      class="w-72 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 flex flex-col fixed inset-y-0 right-0 z-50 transition-transform duration-300 lg:translate-x-0"
      :class="isSidebarOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'"
    >
      <!-- Brand Logo Header -->
      <div class="h-24 flex items-center justify-between px-6 border-b border-gray-100 dark:border-gray-800">
        <NuxtLink to="/" class="flex items-center gap-2">
          <NuxtImg src="/logo.png" alt="Bestolex Logo" class="h-10 object-contain dark:hidden" format="webp" loading="eager" />
          <NuxtImg src="/logo-dark-transparent.png" alt="Bestolex Logo" class="h-10 object-contain hidden dark:block" format="webp" loading="eager" />
        </NuxtLink>
        <button @click="isSidebarOpen = false" class="lg:hidden p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
          ✕
        </button>
      </div>

      <!-- Navigation Menu -->
      <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.path" 
          :to="item.path"
          @click="isSidebarOpen = false"
          class="flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold transition-all group"
          :class="route.path === item.path || (item.path !== '/dashboard' && route.path.startsWith(item.path))
            ? 'bg-primary text-white shadow-lg shadow-primary/30' 
            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white'"
        >
          <span class="text-xl group-hover:scale-110 transition-transform">{{ item.icon }}</span>
          <span class="text-sm">{{ item.name }}</span>
        </NuxtLink>
      </nav>

      <!-- User Info & Logout -->
      <div class="p-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
        <div class="flex items-center gap-3 px-3 py-2 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
          <div class="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-black">
            BX
          </div>
          <div class="overflow-hidden">
            <div class="text-xs font-bold text-gray-900 dark:text-white truncate">bestolex.qa@gmail.com</div>
            <div class="text-[10px] text-gray-400 font-medium">مسؤول النظام (Admin)</div>
          </div>
        </div>

        <button 
          @click="handleLogout" 
          class="w-full flex items-center justify-center gap-2 px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition font-bold text-sm"
        >
          <span>🚪</span>
          <span>تسجيل الخروج</span>
        </button>
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 lg:mr-72 p-4 lg:p-8 w-full overflow-x-hidden min-h-screen flex flex-col">
      <!-- Top Header Bar -->
      <header class="flex justify-between items-center mb-8 bg-white dark:bg-gray-900 p-4 lg:px-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
        <div class="flex items-center gap-4">
          <button 
            @click="isSidebarOpen = true" 
            class="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
          >
            ☰
          </button>
          <div>
            <h1 class="text-xl lg:text-2xl font-black text-gray-900 dark:text-white">{{ currentTitle }}</h1>
            <p class="text-gray-500 dark:text-gray-400 text-xs hidden sm:block">لوحة التحكم وإدارة المحتوى - بيستوليكس قطر</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <!-- View Live Site -->
          <NuxtLink 
            to="/" 
            target="_blank"
            class="hidden sm:inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-200 transition"
          >
            <span>🌐</span>
            <span>معاينة الموقع</span>
          </NuxtLink>

          <!-- Theme Switcher -->
          <ClientOnly>
            <button 
              @click="toggleTheme()" 
              class="p-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:scale-105 transition shadow-sm"
            >
              <span v-if="isDark">☀️</span>
              <span v-else>🌙</span>
            </button>
          </ClientOnly>
        </div>
      </header>

      <!-- Slot for Dashboard Pages -->
      <div class="flex-1">
        <slot />
      </div>
    </main>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleTheme = useToggle(isDark)

const route = useRoute()
const router = useRouter()
const isSidebarOpen = ref(false)

const navItems = [
  { name: 'الرئيسية والإحصائيات', path: '/dashboard', icon: '📊' },
  { name: 'إدارة المدونة والمقالات', path: '/dashboard/blog', icon: '📝' },
  { name: 'طلبات الأسعار والمواعيد', path: '/dashboard/quotes', icon: '💼' },
  { name: 'تحميلات الكتيبات والتفاعل', path: '/dashboard/analytics', icon: '📈' }
]

const currentTitle = computed(() => {
  if (route.path === '/dashboard') return 'لوحة التحكم والإحصائيات'
  if (route.path.startsWith('/dashboard/blog/create')) return 'إضافة مقال جديد'
  if (route.path.startsWith('/dashboard/blog/edit')) return 'تعديل المقال'
  if (route.path.startsWith('/dashboard/blog')) return 'إدارة المدونة والمقالات'
  if (route.path.startsWith('/dashboard/quotes')) return 'طلبات عروض الأسعار والمواعيد'
  if (route.path.startsWith('/dashboard/analytics')) return 'تقارير التحميلات والتفاعل'
  return 'لوحة التحكم'
})

const handleLogout = () => {
  const authCookie = useCookie('bestolex_admin_token')
  authCookie.value = null
  router.push('/dashboard/login')
}
</script>
