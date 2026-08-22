<template>
  <NuxtLayout name="dashboard">
    <div class="space-y-8">
      
      <!-- Top Metric Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
          <div>
            <div class="text-xs font-bold text-gray-400 mb-1">إجمالي المقالات</div>
            <div class="text-3xl font-black text-gray-900 dark:text-white">{{ articlesCount }}</div>
            <div class="text-xs text-green-500 font-bold mt-2">منشورة ونشطة 🟢</div>
          </div>
          <div class="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-2xl font-bold">
            📝
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
          <div>
            <div class="text-xs font-bold text-gray-400 mb-1">طلبات عروض الأسعار</div>
            <div class="text-3xl font-black text-primary">{{ stats.totalQuotes }}</div>
            <div class="text-xs text-primary font-bold mt-2">طلب مستلم 📥</div>
          </div>
          <div class="w-14 h-14 bg-orange-100 dark:bg-gray-700 text-orange-500 rounded-2xl flex items-center justify-center text-2xl font-bold">
            💼
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
          <div>
            <div class="text-xs font-bold text-gray-400 mb-1">حجوزات المواعيد</div>
            <div class="text-3xl font-black text-blue-500">{{ stats.totalAppointments }}</div>
            <div class="text-xs text-blue-500 font-bold mt-2">استشارات مجدولة 📅</div>
          </div>
          <div class="w-14 h-14 bg-blue-50 dark:bg-gray-700 text-blue-500 rounded-2xl flex items-center justify-center text-2xl font-bold">
            🗓️
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
          <div>
            <div class="text-xs font-bold text-gray-400 mb-1">تحميلات الكتيبات (PDF)</div>
            <div class="text-3xl font-black text-emerald-500">{{ stats.brochureDownloads }}</div>
            <div class="text-xs text-emerald-500 font-bold mt-2">عملية تنزيل 📊</div>
          </div>
          <div class="w-14 h-14 bg-emerald-50 dark:bg-gray-700 text-emerald-500 rounded-2xl flex items-center justify-center text-2xl font-bold">
            📥
          </div>
        </div>
      </div>

      <!-- Quick Actions Banner -->
      <div class="bg-gradient-to-r from-[#121c2d] to-[#1e2d42] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <h2 class="text-xl sm:text-2xl font-black mb-2">مرحباً بك في لوحة تحكم بيستوليكس 🇶🇦</h2>
          <p class="text-gray-300 text-sm max-w-xl">يمكنك إدارة المقالات ونشر التحديثات ومتابعة كافة طلبات عروض الأسعار وحجوزات المواعيد في مكان واحد.</p>
        </div>
        <div class="flex flex-wrap gap-3">
          <NuxtLink to="/dashboard/blog/create" class="bg-primary hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg flex items-center gap-2 text-sm">
            <span>➕</span>
            <span>إضافة مقال جديد</span>
          </NuxtLink>
          <NuxtLink to="/dashboard/quotes" class="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-bold transition text-sm">
            عرض الطلبات
          </NuxtLink>
        </div>
      </div>

      <!-- Two Column Layout: Recent Quotes & Recent Articles -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <!-- Recent Quotes List -->
        <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                <span>💼</span>
                <span>أحدث طلبات عروض الأسعار</span>
              </h3>
              <NuxtLink to="/dashboard/quotes" class="text-primary hover:underline text-xs font-bold">عرض الكل &larr;</NuxtLink>
            </div>

            <div class="space-y-3">
              <div v-for="(q, i) in recentQuotes" :key="i" class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <div>
                  <h4 class="font-bold text-gray-900 dark:text-white text-sm">{{ q.company_name }}</h4>
                  <p class="text-xs text-gray-500 mt-0.5">{{ q.product_name || 'طلب عام' }} • {{ q.phone }}</p>
                </div>
                <span class="text-xs font-bold px-3 py-1 rounded-full" :class="q.status === 'new' ? 'bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400' : 'bg-green-100 text-green-600'">
                  {{ q.status === 'new' ? 'جديد' : 'تم التواصل' }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Articles List -->
        <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                <span>📝</span>
                <span>أحدث المقالات المنشورة</span>
              </h3>
              <NuxtLink to="/dashboard/blog" class="text-primary hover:underline text-xs font-bold">إدارة المدونة &larr;</NuxtLink>
            </div>

            <div class="space-y-3">
              <div v-for="(art, i) in recentArticles" :key="i" class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 flex-shrink-0">
                    <img :src="art.image" class="w-full h-full object-cover">
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 dark:text-white text-sm line-clamp-1">{{ art.title?.ar || art.title_ar }}</h4>
                    <p class="text-xs text-gray-400 mt-0.5">{{ art.category?.ar || art.category_ar }} • {{ art.date }}</p>
                  </div>
                </div>
                <NuxtLink :to="`/dashboard/blog/edit/${art.id}`" class="text-primary text-xs font-bold hover:underline">
                  تعديل
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'

definePageMeta({
  layout: false,
  middleware: 'auth'
})

const articlesCount = ref(6)
const stats = ref({
  brochureDownloads: 64,
  totalQuotes: 28,
  totalAppointments: 16
})

const recentQuotes = ref([])
const recentArticles = ref([])

onMounted(async () => {
  try {
    const [artsRes, quotesRes, analyticsRes] = await Promise.all([
      $fetch('/api/blog'),
      $fetch('/api/quotes'),
      $fetch('/api/analytics')
    ])

    if (artsRes) {
      articlesCount.value = artsRes.length
      recentArticles.value = artsRes.slice(0, 4)
    }

    if (quotesRes && quotesRes.quotes) {
      recentQuotes.value = quotesRes.quotes.slice(0, 4)
      stats.value.totalQuotes = quotesRes.quotes.length
      stats.value.totalAppointments = quotesRes.appointments?.length || 0
    }

    if (analyticsRes) {
      stats.value.brochureDownloads = analyticsRes.brochureDownloads
    }
  } catch (err) {
    console.warn('Dashboard stats load error:', err)
  }
})
</script>
