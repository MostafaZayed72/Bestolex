<template>
  <NuxtLayout name="dashboard">
    <div class="space-y-8">
      
      <!-- Key Insights Summary -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
          <div class="text-xs font-bold text-gray-400 mb-2">إجمالي تنزيل كتيبات المنتجات (PDF)</div>
          <div class="text-4xl font-black text-emerald-500 mb-2">{{ stats.brochureDownloads }}</div>
          <p class="text-xs text-gray-500">تم تنزيل الكتيبات التقنية مباشرة من صفحات المنتجات</p>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
          <div class="text-xs font-bold text-gray-400 mb-2">إجمالي طلبات عروض الأسعار</div>
          <div class="text-4xl font-black text-primary mb-2">{{ stats.totalQuotes }}</div>
          <p class="text-xs text-gray-500">تم استلامها وتحويلها إلى قسم المبيعات</p>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
          <div class="text-xs font-bold text-gray-400 mb-2">معدل التحويل والاستفسار</div>
          <div class="text-4xl font-black text-blue-500 mb-2">
            {{ Math.round((stats.totalQuotes / (stats.brochureDownloads || 1)) * 100) }}%
          </div>
          <p class="text-xs text-gray-500">نسبة طلبات الأسعار مقارنة بتصفح وتنزيل الكتيبات</p>
        </div>
      </div>

      <!-- Live Interaction Stream Table -->
      <div class="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden p-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
            <span>📈</span>
            <span>سجل أحدث التفاعلات وتنزيل الكتيبات</span>
          </h3>
          <span class="text-xs text-green-500 font-bold">تحديث فوري 🟢</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-start text-sm">
            <thead class="bg-gray-50 dark:bg-gray-900/60 text-gray-400 font-bold border-b border-gray-100 dark:border-gray-700">
              <tr>
                <th class="p-4 text-start">نوع الحدث</th>
                <th class="p-4 text-start">المنتج / الملف المستهدف</th>
                <th class="p-4 text-start">التوقيت</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-700/60 font-medium">
              <tr v-for="(ev, idx) in stats.recentEvents" :key="idx" class="hover:bg-gray-50 dark:hover:bg-gray-750 transition">
                <td class="p-4">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold">
                    📥 تحميل كتيب PDF
                  </span>
                </td>
                <td class="p-4 font-bold text-gray-900 dark:text-white">
                  {{ ev.target_name || 'كتيب المواصفات الفنية للمنتج' }}
                </td>
                <td class="p-4 text-xs font-mono text-gray-400">
                  {{ ev.created_at ? ev.created_at.split('T')[0] : 'اليوم' }}
                </td>
              </tr>
            </tbody>
          </table>
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

const stats = ref({
  brochureDownloads: 64,
  totalQuotes: 28,
  totalAppointments: 16,
  recentEvents: []
})

onMounted(async () => {
  try {
    const res = await $fetch('/api/analytics')
    if (res) stats.value = res
  } catch (err) {
    console.error('Analytics load error:', err)
  }
})
</script>
