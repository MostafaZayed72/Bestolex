<template>
  <NuxtLayout name="dashboard">
    <div class="space-y-6">
      
      <!-- Top Navigation Tabs (Quotes vs Appointments) -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3">
          <button 
            @click="activeTab = 'quotes'"
            :class="activeTab === 'quotes' ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
            class="px-6 py-3 rounded-2xl font-bold transition-all text-sm flex items-center gap-2"
          >
            <span>💼</span>
            <span>طلبات عروض الأسعار ({{ quotes.length }})</span>
          </button>
          <button 
            @click="activeTab = 'appointments'"
            :class="activeTab === 'appointments' ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'"
            class="px-6 py-3 rounded-2xl font-bold transition-all text-sm flex items-center gap-2"
          >
            <span>📅</span>
            <span>حجوزات المواعيد ({{ appointments.length }})</span>
          </button>
        </div>

        <button @click="loadData" class="text-xs font-bold text-gray-400 hover:text-primary transition flex items-center gap-1">
          <span>🔄</span>
          <span>تحديث البيانات</span>
        </button>
      </div>

      <!-- Quotes Table View -->
      <div v-show="activeTab === 'quotes'" class="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-start text-sm">
            <thead class="bg-gray-50 dark:bg-gray-900/60 text-gray-400 font-bold border-b border-gray-100 dark:border-gray-700">
              <tr>
                <th class="p-4 text-start">الشركة / العميل</th>
                <th class="p-4 text-start">المسمى الوظيفي</th>
                <th class="p-4 text-start">المنتج المطلوب</th>
                <th class="p-4 text-start">بيانات الاتصال</th>
                <th class="p-4 text-start">التاريخ</th>
                <th class="p-4 text-center">الحالة</th>
                <th class="p-4 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-700/60 font-medium">
              <tr v-if="loading">
                <td colspan="7" class="p-12 text-center text-gray-400">
                  <div class="animate-spin text-2xl mb-2">⏳</div>
                  <div>جاري تحميل الطلبات...</div>
                </td>
              </tr>
              <tr v-else-if="quotes.length === 0">
                <td colspan="7" class="p-12 text-center text-gray-400">
                  لا توجد طلبات عروض أسعار حتى الآن.
                </td>
              </tr>
              <tr v-for="quote in quotes" :key="quote.id" class="hover:bg-gray-50 dark:hover:bg-gray-750 transition">
                <td class="p-4 font-bold text-gray-900 dark:text-white">
                  {{ quote.company_name }}
                </td>
                <td class="p-4 text-gray-600 dark:text-gray-400">
                  {{ quote.job_title || 'غير محدد' }}
                </td>
                <td class="p-4">
                  <span class="font-bold text-primary text-xs">{{ quote.product_name || 'عام' }}</span>
                </td>
                <td class="p-4 text-xs font-mono">
                  <div>📞 <a :href="'tel:' + quote.phone" class="hover:text-primary">{{ quote.phone }}</a></div>
                  <div class="text-gray-400">✉️ <a :href="'mailto:' + quote.email" class="hover:text-primary">{{ quote.email }}</a></div>
                </td>
                <td class="p-4 text-xs font-mono text-gray-400">
                  {{ quote.created_at ? quote.created_at.split('T')[0] : 'اليوم' }}
                </td>
                <td class="p-4 text-center">
                  <select 
                    v-model="quote.status" 
                    @change="updateStatus(quote.id, quote.status, 'quote')"
                    class="text-xs font-bold px-3 py-1.5 rounded-full border-0 outline-none cursor-pointer"
                    :class="{
                      'bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400': quote.status === 'new',
                      'bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400': quote.status === 'contacted',
                      'bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400': quote.status === 'completed'
                    }"
                  >
                    <option value="new">جديد ⏳</option>
                    <option value="contacted">تم التواصل 📞</option>
                    <option value="completed">مكتمل ✅</option>
                  </select>
                </td>
                <td class="p-4 text-center">
                  <button 
                    @click="viewQuoteDetails(quote)" 
                    class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition"
                  >
                    عرض الرسالة 👁️
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Appointments Table View -->
      <div v-show="activeTab === 'appointments'" class="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-start text-sm">
            <thead class="bg-gray-50 dark:bg-gray-900/60 text-gray-400 font-bold border-b border-gray-100 dark:border-gray-700">
              <tr>
                <th class="p-4 text-start">الاسم</th>
                <th class="p-4 text-start">تاريخ الموعد</th>
                <th class="p-4 text-start">التوقيت</th>
                <th class="p-4 text-start">بيانات الاتصال</th>
                <th class="p-4 text-center">الحالة</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-700/60 font-medium">
              <tr v-if="appointments.length === 0">
                <td colspan="5" class="p-12 text-center text-gray-400">
                  لا توجد حجوزات مواعيد مسجلة.
                </td>
              </tr>
              <tr v-for="app in appointments" :key="app.id" class="hover:bg-gray-50 dark:hover:bg-gray-750 transition">
                <td class="p-4 font-bold text-gray-900 dark:text-white">
                  {{ app.name }}
                </td>
                <td class="p-4 font-mono font-bold text-blue-500">
                  📅 {{ app.date }}
                </td>
                <td class="p-4 font-mono font-bold text-gray-700 dark:text-gray-300">
                  ⏱️ {{ app.time }}
                </td>
                <td class="p-4 text-xs font-mono">
                  <div>📞 <a :href="'tel:' + app.phone" class="hover:text-primary">{{ app.phone }}</a></div>
                  <div class="text-gray-400">✉️ <a :href="'mailto:' + app.email" class="hover:text-primary">{{ app.email }}</a></div>
                </td>
                <td class="p-4 text-center">
                  <select 
                    v-model="app.status" 
                    @change="updateStatus(app.id, app.status, 'appointment')"
                    class="text-xs font-bold px-3 py-1.5 rounded-full border-0 outline-none cursor-pointer"
                    :class="{
                      'bg-orange-100 text-orange-600': app.status === 'new',
                      'bg-green-100 text-green-600': app.status === 'confirmed',
                      'bg-gray-100 text-gray-600': app.status === 'completed'
                    }"
                  >
                    <option value="new">قيد الانتظار ⏳</option>
                    <option value="confirmed">تم التأكيد 📅</option>
                    <option value="completed">منتهي ✅</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Quote Details Modal -->
      <div v-if="selectedQuote" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div class="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-gray-200 dark:border-gray-800 shadow-2xl space-y-6">
          <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">تفاصيل طلب عرض السعر</h3>
            <button @click="selectedQuote = null" class="text-gray-400 hover:text-gray-600 text-xl font-bold">✕</button>
          </div>

          <div class="space-y-3 text-sm">
            <div><strong class="text-gray-500">اسم الشركة:</strong> <span class="font-bold">{{ selectedQuote.company_name }}</span></div>
            <div><strong class="text-gray-500">المسمى الوظيفي:</strong> <span class="font-bold">{{ selectedQuote.job_title }}</span></div>
            <div><strong class="text-gray-500">المنتج المطلوب:</strong> <span class="font-bold text-primary">{{ selectedQuote.product_name }}</span></div>
            <div><strong class="text-gray-500">رقم الهاتف:</strong> <a :href="'tel:' + selectedQuote.phone" class="font-mono text-primary">{{ selectedQuote.phone }}</a></div>
            <div><strong class="text-gray-500">البريد الإلكتروني:</strong> <a :href="'mailto:' + selectedQuote.email" class="font-mono text-blue-500">{{ selectedQuote.email }}</a></div>
            
            <div class="pt-2">
              <strong class="text-gray-500 block mb-1">رسالة / ملاحظات العميل:</strong>
              <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-gray-700 dark:text-gray-300 leading-relaxed text-xs">
                {{ selectedQuote.message || 'لا توجد ملاحظات إضافية.' }}
              </div>
            </div>
          </div>

          <div class="pt-4 flex justify-end">
            <button @click="selectedQuote = null" class="px-6 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-bold text-sm">
              إغلاق
            </button>
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

const activeTab = ref('quotes')
const quotes = ref([])
const appointments = ref([])
const loading = ref(true)
const selectedQuote = ref(null)

const loadData = async () => {
  loading.value = true
  try {
    const res = await $fetch('/api/quotes')
    if (res) {
      quotes.value = res.quotes || []
      appointments.value = res.appointments || []
    }
  } catch (e) {
    console.error('Error fetching quotes:', e)
  } finally {
    loading.value = false
  }
}

const updateStatus = async (id, status, type) => {
  try {
    await $fetch(`/api/quotes/${id}`, {
      method: 'PUT',
      body: { status, type }
    })
  } catch (err) {
    console.error('Status update failed:', err)
  }
}

const viewQuoteDetails = (quote) => {
  selectedQuote.value = quote
}

onMounted(() => {
  loadData()
})
</script>
