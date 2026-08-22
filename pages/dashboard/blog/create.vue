<template>
  <NuxtLayout name="dashboard">
    <div class="max-w-4xl mx-auto space-y-8">
      
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-black text-gray-900 dark:text-white">إضافة مقال جديد للمدونة</h2>
          <p class="text-gray-500 dark:text-gray-400 text-sm">املأ تفاصيل المقال والمحتوى باللغتين العربية والإنجليزية</p>
        </div>
        <NuxtLink to="/dashboard/blog" class="px-5 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-bold text-sm hover:bg-gray-200 transition">
          &larr; إلغاء والعودة
        </NuxtLink>
      </div>

      <!-- Main Form -->
      <form @submit.prevent="submitArticle" class="space-y-6 bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
        
        <!-- Language Switcher Tabs -->
        <div class="flex gap-3 border-b border-gray-100 dark:border-gray-700 pb-4">
          <button 
            type="button" 
            @click="activeLang = 'ar'" 
            :class="activeLang === 'ar' ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'"
            class="px-6 py-2.5 rounded-xl font-bold text-sm transition"
          >
            المحتوى بالعربية 🇸🇦
          </button>
          <button 
            type="button" 
            @click="activeLang = 'en'" 
            :class="activeLang === 'en' ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'"
            class="px-6 py-2.5 rounded-xl font-bold text-sm transition"
          >
            English Content 🇬🇧
          </button>
        </div>

        <!-- Arabic Section -->
        <div v-show="activeLang === 'ar'" class="space-y-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">عنوان المقال (بالعربية)*</label>
            <input 
              v-model="form.title_ar" 
              type="text" 
              required 
              placeholder="أدخل عنوان المقال..." 
              class="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold outline-none focus:border-primary"
            >
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">القسم (Category)*</label>
              <select 
                v-model="form.category_ar" 
                @change="onCategorySelect($event.target.value)"
                required 
                class="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold outline-none focus:border-primary cursor-pointer"
              >
                <option value="" disabled>اختر القسم المناسب للمقال...</option>
                <option v-for="cat in categoryList" :key="cat.id" :value="cat.name_ar">
                  {{ cat.name_ar }} ({{ cat.name_en }})
                </option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">وقت القراءة</label>
              <input 
                v-model="form.read_time_ar" 
                type="text" 
                placeholder="مثال: 5 دقائق قراءة" 
                class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:border-primary"
              >
            </div>
          </div>

          <div>
            <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">وصف مختصر (ملخص المقال)*</label>
            <textarea 
              v-model="form.excerpt_ar" 
              rows="3" 
              required 
              placeholder="اكتب ملخصاً جذاباً يظهر في صفحة المدونة وبطاقات العرض..." 
              class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:border-primary resize-none"
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">محتوى المقال الكامل*</label>
            <RichTextEditor v-model="form.content_ar" />
          </div>
        </div>

        <!-- English Section -->
        <div v-show="activeLang === 'en'" class="space-y-6 text-start" dir="ltr">
          <div>
            <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Article Title (English)</label>
            <input 
              v-model="form.title_en" 
              type="text" 
              placeholder="Enter article title in English..." 
              class="w-full px-4 py-3.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold outline-none focus:border-primary"
            >
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Category (English)</label>
              <input 
                v-model="form.category_en" 
                type="text" 
                placeholder="e.g. Hydraulic Systems" 
                class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:border-primary"
              >
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Reading Time (English)</label>
              <input 
                v-model="form.read_time_en" 
                type="text" 
                placeholder="e.g. 5 min read" 
                class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:border-primary"
              >
            </div>
          </div>

          <div>
            <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Excerpt (English)</label>
            <textarea 
              v-model="form.excerpt_en" 
              rows="3" 
              placeholder="Short summary for the article..." 
              class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:border-primary resize-none"
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Full Content (English)</label>
            <RichTextEditor v-model="form.content_en" />
          </div>
        </div>

        <!-- Cover Image & Media (Bunny CDN Direct Upload) -->
        <div class="pt-6 border-t border-gray-100 dark:border-gray-700 space-y-4">
          <label class="block text-sm font-bold text-gray-700 dark:text-gray-300">
            صورة غلاف المقال (رفع مباشر إلى Bunny CDN) *
          </label>

          <!-- Upload Dropzone Box -->
          <div 
            @click="triggerFileInput"
            @dragover.prevent="isDragging = true"
            @dragleave.prevent="isDragging = false"
            @drop.prevent="handleFileDrop"
            class="relative border-2 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all duration-300 group"
            :class="[
              isDragging 
                ? 'border-primary bg-primary/5 dark:bg-primary/10 scale-[1.01]' 
                : 'border-gray-200 dark:border-gray-700 hover:border-primary/60 bg-gray-50/50 dark:bg-gray-900/50 hover:bg-gray-50 dark:hover:bg-gray-900'
            ]"
          >
            <input 
              ref="fileInputRef" 
              type="file" 
              accept="image/*" 
              class="hidden" 
              @change="handleFileChange"
            >

            <!-- Loading Spinner State -->
            <div v-if="isUploading" class="py-8 space-y-4">
              <div class="inline-block animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full"></div>
              <div class="text-sm font-bold text-primary animate-pulse">جاري رفع الصورة إلى سيرفر Bunny CDN...</div>
              <div class="w-48 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <div class="bg-primary h-2 transition-all duration-300" :style="{ width: `${uploadProgress}%` }"></div>
              </div>
            </div>

            <!-- Upload Placeholder Prompt -->
            <div v-else-if="!form.image" class="py-6 space-y-3">
              <div class="w-16 h-16 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                📸
              </div>
              <div>
                <span class="text-sm font-bold text-gray-900 dark:text-white">اضغط لاختيار صورة من جهازك</span>
                <span class="text-xs text-gray-400 block mt-1">أو اسحب وأفلت ملف الصورة هنا (JPG, PNG, WebP)</span>
              </div>
              <div class="inline-block px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-700 dark:text-gray-300 rounded-xl shadow-sm">
                تصفح الملفات 📁
              </div>
            </div>

            <!-- Image Preview with NuxtImg -->
            <div v-else class="space-y-4">
              <div class="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-black/5 shadow-md border border-gray-200 dark:border-gray-700">
                <NuxtImg 
                  :src="form.image" 
                  alt="Cover Preview" 
                  class="w-full h-full object-cover"
                  format="webp"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <span class="px-4 py-2 bg-white text-gray-900 rounded-xl text-xs font-bold shadow">تغيير الصورة 🔄</span>
                </div>
              </div>

              <div class="flex items-center justify-between text-xs text-gray-500 px-1">
                <span class="truncate max-w-md font-mono text-left" dir="ltr">{{ form.image }}</span>
                <button 
                  type="button" 
                  @click.stop="form.image = ''" 
                  class="text-red-500 hover:text-red-700 font-bold px-2 py-1 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition"
                >
                  إزالة الصورة 🗑️
                </button>
              </div>
            </div>
          </div>

          <!-- Error Alert if Upload Failed -->
          <div v-if="uploadError" class="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-xl text-red-600 dark:text-red-400 text-xs font-bold">
            ⚠️ {{ uploadError }}
          </div>

          <!-- Manual URL Fallback Toggle -->
          <div class="pt-1">
            <button 
              type="button" 
              @click="showManualInput = !showManualInput" 
              class="text-xs text-gray-400 hover:text-primary transition underline font-medium"
            >
              {{ showManualInput ? 'إخفاء الرابط اليدوي' : 'أو إدخال رابط الصورة يدوياً' }}
            </button>
            <div v-if="showManualInput" class="mt-2 flex gap-2">
              <input 
                v-model="form.image" 
                type="text" 
                placeholder="https://..." 
                class="flex-1 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-xs font-mono outline-none focus:border-primary"
              >
            </div>
          </div>
        </div>

        <!-- Submit Buttons -->
        <div class="flex items-center justify-end gap-4 pt-6 border-t border-gray-100 dark:border-gray-700">
          <NuxtLink to="/dashboard/blog" class="px-6 py-3 text-gray-500 font-bold hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition text-sm">
            إلغاء
          </NuxtLink>
          <button 
            type="submit" 
            :disabled="isSubmitting || isUploading"
            class="px-8 py-3.5 bg-primary hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition flex items-center gap-2 text-sm disabled:opacity-50"
          >
            <span v-if="isSubmitting">جاري النشر...</span>
            <span v-else>🚀 نشر المقال الآن</span>
          </button>
        </div>

      </form>

    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUpload } from '~/composables/useUpload'

definePageMeta({
  layout: false,
  middleware: 'auth'
})

const router = useRouter()
const activeLang = ref('ar')
const isSubmitting = ref(false)
const isDragging = ref(false)
const showManualInput = ref(false)
const fileInputRef = ref(null)
const categoryList = ref([])

const { uploadFile, isUploading, uploadProgress, error: uploadError } = useUpload()

const form = ref({
  title_ar: '',
  title_en: '',
  category_ar: 'النظم الهيدروليكية',
  category_en: 'Hydraulic Systems',
  read_time_ar: '5 دقائق قراءة',
  read_time_en: '5 min read',
  excerpt_ar: '',
  excerpt_en: '',
  content_ar: '',
  content_en: '',
  image: ''
})

const onCategorySelect = (selectedNameAr) => {
  const found = categoryList.value.find(c => c.name_ar === selectedNameAr)
  if (found) {
    form.value.category_ar = found.name_ar
    form.value.category_en = found.name_en || found.name_ar
  }
}

onMounted(async () => {
  try {
    const cats = await $fetch('/api/blog/categories')
    if (cats && cats.length > 0) {
      categoryList.value = cats
      if (!form.value.category_ar && cats[0]) {
        form.value.category_ar = cats[0].name_ar
        form.value.category_en = cats[0].name_en
      }
    }
  } catch (e) {
    console.warn('Failed to load categories:', e)
  }
})

const triggerFileInput = () => {
  if (fileInputRef.value) {
    fileInputRef.value.click()
  }
}

const handleFileChange = async (event) => {
  const file = event.target.files?.[0]
  if (file) {
    await processUpload(file)
  }
}

const handleFileDrop = async (event) => {
  isDragging.value = false
  const file = event.dataTransfer?.files?.[0]
  if (file && file.type.startsWith('image/')) {
    await processUpload(file)
  }
}

const processUpload = async (file) => {
  const result = await uploadFile(file)
  if (result && result.url) {
    form.value.image = result.url
  }
}

const submitArticle = async () => {
  if (!form.value.title_ar || !form.value.content_ar) {
    alert('يرجى ملء العنوان والمحتوى بالعربية على الأقل')
    return
  }

  if (!form.value.image) {
    alert('يرجى رفع صورة الغلاف للمقال أولاً')
    return
  }

  isSubmitting.value = true
  try {
    await $fetch('/api/blog', {
      method: 'POST',
      body: form.value
    })
    router.push('/dashboard/blog')
  } catch (err) {
    alert('حدث خطأ أثناء حفظ المقال')
  } finally {
    isSubmitting.value = false
  }
}
</script>
