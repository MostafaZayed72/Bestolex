<template>
  <NuxtLayout name="dashboard">
    <div class="space-y-6">
      
      <!-- Top Action Bar -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
        <!-- Search & Filter -->
        <div class="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <div class="relative w-full sm:w-72">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="ابحث في المقالات..." 
              class="w-full pl-4 pr-10 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:border-primary text-gray-900 dark:text-white"
            >
            <span class="absolute right-3 top-3.5 text-gray-400">🔍</span>
          </div>

          <select 
            v-model="selectedCategory" 
            class="px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm font-bold text-gray-700 dark:text-gray-300 outline-none cursor-pointer"
          >
            <option value="all">جميع الأقسام</option>
            <option v-for="cat in categoryList" :key="cat.id" :value="cat.name_ar">{{ cat.name_ar }}</option>
          </select>
        </div>

        <!-- Action Buttons: Manage Categories + Add Article -->
        <div class="flex items-center gap-3 w-full sm:w-auto">
          <button 
            @click="openCategoryModal = true" 
            class="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-bold px-5 py-3.5 rounded-xl transition text-sm shadow-sm"
          >
            <span>🏷️</span>
            <span>إدارة الأقسام</span>
          </button>

          <NuxtLink 
            to="/dashboard/blog/create" 
            class="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-xl transition shadow-lg shadow-primary/20 text-sm"
          >
            <span>➕</span>
            <span>إضافة مقال جديد</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Articles Table -->
      <div class="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-start text-sm">
            <thead class="bg-gray-50 dark:bg-gray-900/60 text-gray-400 font-bold border-b border-gray-100 dark:border-gray-700">
              <tr>
                <th class="p-4 text-start">المقال</th>
                <th class="p-4 text-start">القسم</th>
                <th class="p-4 text-start">تاريخ النشر</th>
                <th class="p-4 text-start">وقت القراءة</th>
                <th class="p-4 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-700/60 font-medium">
              <tr v-if="loading">
                <td colspan="5" class="p-12 text-center text-gray-400">
                  <div class="inline-block animate-spin text-2xl mb-2">⏳</div>
                  <div>جاري تحميل المقالات...</div>
                </td>
              </tr>
              <tr v-else-if="paginatedArticles.length === 0">
                <td colspan="5" class="p-12 text-center text-gray-400">
                  لا توجد مقالات مطابقة لبحثك.
                </td>
              </tr>
              <tr 
                v-for="article in paginatedArticles" 
                :key="article.id" 
                class="hover:bg-gray-50 dark:hover:bg-gray-750 transition"
              >
                <!-- Article Title & Thumbnail -->
                <td class="p-4">
                  <div class="flex items-center gap-4">
                    <img :src="article.image" class="w-14 h-14 rounded-xl object-cover flex-shrink-0 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <div>
                      <h4 class="font-bold text-gray-900 dark:text-white text-base line-clamp-1">
                        {{ article.title?.ar || article.title_ar }}
                      </h4>
                      <p class="text-xs text-gray-400 line-clamp-1 mt-1">
                        {{ article.desc?.ar || article.excerpt_ar || 'بدون وصف مختصر' }}
                      </p>
                    </div>
                  </div>
                </td>

                <!-- Category -->
                <td class="p-4">
                  <span class="bg-primary/10 text-primary font-bold text-xs px-3 py-1.5 rounded-full whitespace-nowrap">
                    {{ article.category?.ar || article.category_ar || 'عام' }}
                  </span>
                </td>

                <!-- Date -->
                <td class="p-4 text-gray-500 dark:text-gray-400 whitespace-nowrap font-mono text-xs">
                  {{ article.date }}
                </td>

                <!-- Read Time -->
                <td class="p-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs">
                  {{ article.readTime?.ar || article.read_time_ar || '5 دقائق' }}
                </td>

                <!-- Actions -->
                <td class="p-4">
                  <div class="flex items-center justify-center gap-2">
                    <!-- Live View -->
                    <NuxtLink 
                      :to="`/blog/${article.id}`" 
                      target="_blank" 
                      class="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-xl transition"
                      title="معاينة"
                    >
                      👁️
                    </NuxtLink>

                    <!-- Edit -->
                    <NuxtLink 
                      :to="`/dashboard/blog/edit/${article.id}`" 
                      class="p-2 text-gray-500 hover:text-primary hover:bg-orange-50 dark:hover:bg-orange-900/30 rounded-xl transition"
                      title="تعديل"
                    >
                      ✏️
                    </NuxtLink>

                    <!-- Delete -->
                    <button 
                      @click="deleteArticle(article.id)" 
                      class="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition"
                      title="حذف"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination Bar -->
        <div class="p-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-xs font-bold text-gray-500">
          <div>
            إظهار {{ (currentPage - 1) * perPage + 1 }} إلى {{ Math.min(currentPage * perPage, filteredArticles.length) }} من إجمالي {{ filteredArticles.length }} مقال
          </div>
          
          <div class="flex items-center gap-2">
            <button 
              @click="currentPage--" 
              :disabled="currentPage === 1"
              class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              السابق
            </button>
            <span class="px-3 py-1 bg-primary text-white rounded-lg">{{ currentPage }} / {{ totalPages || 1 }}</span>
            <button 
              @click="currentPage++" 
              :disabled="currentPage >= totalPages"
              class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 disabled:opacity-40 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              التالي
            </button>
          </div>
        </div>
      </div>

      <!-- Categories Management Modal -->
      <div v-if="openCategoryModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div class="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-gray-200 dark:border-gray-800 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
          
          <!-- Modal Header -->
          <div class="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
            <div class="flex items-center gap-3">
              <span class="p-2.5 bg-primary/10 text-primary rounded-xl text-xl font-bold">🏷️</span>
              <div>
                <h3 class="text-xl font-black text-gray-900 dark:text-white">إدارة أقسام المدونة</h3>
                <p class="text-xs text-gray-400 mt-0.5">إضافة وتعديل وحذف أقسام المقالات باللغتين العربية والإنجليزية</p>
              </div>
            </div>
            <button @click="openCategoryModal = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-white text-xl font-bold p-1">✕</button>
          </div>

          <!-- Add New Category Form -->
          <div class="p-4 sm:p-5 bg-gray-50 dark:bg-gray-800/60 rounded-2xl border border-gray-200/80 dark:border-gray-700 space-y-3">
            <h4 class="text-sm font-black text-gray-900 dark:text-white flex items-center gap-1.5">
              <span>➕</span>
              <span>إضافة قسم جديد</span>
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input 
                v-model="newCat.name_ar" 
                type="text" 
                placeholder="اسم القسم (بالعربية) *" 
                class="px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-xs font-bold text-gray-900 dark:text-white outline-none focus:border-primary"
              >
              <input 
                v-model="newCat.name_en" 
                type="text" 
                placeholder="Category Name (English)" 
                dir="ltr"
                class="px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-xs font-bold text-gray-900 dark:text-white outline-none focus:border-primary"
              >
            </div>
            <div class="flex justify-end">
              <button 
                @click="addCategory" 
                :disabled="!newCat.name_ar || isAddingCat"
                class="px-5 py-2.5 bg-primary hover:bg-orange-600 text-white font-bold text-xs rounded-xl transition shadow disabled:opacity-40"
              >
                {{ isAddingCat ? 'جاري الإضافة...' : 'حفظ القسم الجديد' }}
              </button>
            </div>
          </div>

          <!-- Existing Categories List -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider">الأقسام الحالية ({{ categoryList.length }})</h4>
            
            <div class="space-y-2">
              <div 
                v-for="cat in categoryList" 
                :key="cat.id" 
                class="p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm hover:border-gray-300 dark:hover:border-gray-600 transition"
              >
                <!-- Edit mode vs Display mode -->
                <div v-if="editingCatId === cat.id" class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input 
                    v-model="catEditForm.name_ar" 
                    type="text" 
                    class="px-3 py-1.5 bg-gray-50 dark:bg-gray-900 border border-primary rounded-lg text-xs font-bold text-gray-900 dark:text-white outline-none"
                  >
                  <input 
                    v-model="catEditForm.name_en" 
                    type="text" 
                    dir="ltr"
                    class="px-3 py-1.5 bg-gray-50 dark:bg-gray-900 border border-primary rounded-lg text-xs font-bold text-gray-900 dark:text-white outline-none"
                  >
                </div>

                <div v-else class="flex items-center gap-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-primary"></span>
                  <div>
                    <div class="font-bold text-sm text-gray-900 dark:text-white">{{ cat.name_ar }}</div>
                    <div class="text-xs text-gray-400 font-mono">{{ cat.name_en || 'بدون ترجمة' }}</div>
                  </div>
                </div>

                <!-- Action buttons -->
                <div class="flex items-center gap-2 self-end sm:self-center">
                  <template v-if="editingCatId === cat.id">
                    <button 
                      @click="saveCategoryEdit(cat.id)" 
                      class="px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-bold transition shadow-sm"
                    >
                      حفظ ✓
                    </button>
                    <button 
                      @click="editingCatId = null" 
                      class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-xs font-bold transition"
                    >
                      إلغاء
                    </button>
                  </template>
                  <template v-else>
                    <button 
                      @click="startEditCat(cat)" 
                      class="p-2 text-gray-500 hover:text-primary hover:bg-orange-50 dark:hover:bg-gray-700 rounded-lg transition text-xs font-bold"
                      title="تعديل الاسم"
                    >
                      ✏️ تعديل
                    </button>
                    <button 
                      @click="deleteCategory(cat.id)" 
                      class="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-gray-700 rounded-lg transition text-xs font-bold"
                      title="حذف القسم"
                    >
                      🗑️ حذف
                    </button>
                  </template>
                </div>
              </div>
            </div>
          </div>

          <!-- Close Modal Button -->
          <div class="flex justify-end pt-4 border-t border-gray-100 dark:border-gray-800">
            <button 
              @click="openCategoryModal = false" 
              class="px-6 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-bold text-xs transition"
            >
              إغلاق النافذة
            </button>
          </div>

        </div>
      </div>

    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

definePageMeta({
  layout: false,
  middleware: 'auth'
})

const articles = ref([])
const categoryList = ref([])
const loading = ref(true)
const searchQuery = ref('')
const selectedCategory = ref('all')
const currentPage = ref(1)
const perPage = 5

// Category Modal State
const openCategoryModal = ref(false)
const isAddingCat = ref(false)
const editingCatId = ref(null)
const newCat = ref({ name_ar: '', name_en: '' })
const catEditForm = ref({ name_ar: '', name_en: '' })

const fetchArticles = async () => {
  loading.value = true
  try {
    const res = await $fetch('/api/blog')
    if (res) articles.value = res
  } catch (err) {
    console.error('Error fetching blog articles:', err)
  } finally {
    loading.value = false
  }
}

const fetchCategories = async () => {
  try {
    const res = await $fetch('/api/blog/categories')
    if (res) categoryList.value = res
  } catch (err) {
    console.error('Error fetching categories:', err)
  }
}

const addCategory = async () => {
  if (!newCat.value.name_ar) return
  isAddingCat.value = true
  try {
    const res = await $fetch('/api/blog/categories', {
      method: 'POST',
      body: newCat.value
    })
    if (res) {
      newCat.value = { name_ar: '', name_en: '' }
      await fetchCategories()
    }
  } catch (err) {
    alert('حدث خطأ أثناء إضافة القسم')
  } finally {
    isAddingCat.value = false
  }
}

const startEditCat = (cat) => {
  editingCatId.value = cat.id
  catEditForm.value = {
    name_ar: cat.name_ar,
    name_en: cat.name_en || ''
  }
}

const saveCategoryEdit = async (id) => {
  try {
    await $fetch(`/api/blog/categories/${id}`, {
      method: 'PUT',
      body: catEditForm.value
    })
    editingCatId.value = null
    await fetchCategories()
  } catch (err) {
    alert('حدث خطأ أثناء تعديل القسم')
  }
}

const deleteCategory = async (id) => {
  if (confirm('هل أنت متأكد من رغبتك في حذف هذا القسم؟')) {
    try {
      await $fetch(`/api/blog/categories/${id}`, { method: 'DELETE' })
      categoryList.value = categoryList.value.filter(c => c.id !== id)
    } catch (err) {
      alert('حدث خطأ أثناء حذف القسم')
    }
  }
}

const filteredArticles = computed(() => {
  return articles.value.filter(a => {
    const titleAr = a.title?.ar || a.title_ar || ''
    const matchSearch = !searchQuery.value || titleAr.toLowerCase().includes(searchQuery.value.toLowerCase())
    const cat = a.category?.ar || a.category_ar
    const matchCategory = selectedCategory.value === 'all' || cat === selectedCategory.value
    return matchSearch && matchCategory
  })
})

const totalPages = computed(() => Math.ceil(filteredArticles.value.length / perPage))

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredArticles.value.slice(start, start + perPage)
})

const deleteArticle = async (id) => {
  if (confirm('هل أنت متأكد من رغبتك في حذف هذا المقال نهائياً؟')) {
    try {
      await $fetch(`/api/blog/${id}`, { method: 'DELETE' })
      articles.value = articles.value.filter(a => a.id !== id && a.slug !== id)
    } catch (e) {
      alert('حدث خطأ أثناء الحذف')
    }
  }
}

onMounted(() => {
  fetchArticles()
  fetchCategories()
})
</script>
