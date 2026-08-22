<template>
  <div class="blog-page bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300 py-16 md:py-24">
    <div class="container mx-auto px-4 md:px-8">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
        <div class="inline-block bg-primary/10 text-primary font-extrabold px-4 py-1.5 rounded-lg text-sm mb-4">
          {{ locale === 'ar' ? 'المدونة الهندسية والتقنية' : 'Engineering & Technical Blog' }}
        </div>
        <h1 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
          {{ locale === 'ar' ? 'مقالات وأدلة فنية متخصصة' : 'Specialized Articles & Technical Guides' }}
        </h1>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          {{ locale === 'ar' 
            ? 'أحدث الرؤى الفنية، وأدلة الصيانة، والحلول الهندسية في مجال المعدات الثقيلة والأنظمة اللوجستية في قطر.' 
            : 'Latest technical insights, maintenance guides, and engineering solutions in heavy machinery and logistics in Qatar.' 
          }}
        </p>
      </div>

      <!-- Search & Category Filters Bar -->
      <div class="max-w-4xl mx-auto mb-12 space-y-6" data-aos="fade-up" data-aos-delay="100">
        <!-- Search Input Box -->
        <div class="relative max-w-xl mx-auto">
          <input 
            v-model="searchQuery" 
            type="text" 
            :placeholder="locale === 'ar' ? 'ابحث عن موضوع، معدة، أو دليل صيانة...' : 'Search topics, equipment, or maintenance guides...'" 
            class="w-full rtl:pr-12 ltr:pl-12 rtl:pl-10 ltr:pr-10 py-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-base shadow-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-gray-400"
          >
          <span class="absolute rtl:right-4 ltr:left-4 top-4 text-xl text-gray-400">🔍</span>
          
          <!-- Clear Search Button -->
          <button 
            v-if="searchQuery" 
            @click="searchQuery = ''" 
            class="absolute rtl:left-4 ltr:right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition"
          >
            ✕
          </button>
        </div>

        <!-- Category Filter Pills -->
        <div class="flex flex-wrap justify-center gap-2.5">
          <button 
            @click="setCategory('all')"
            :class="selectedCategory === 'all' ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-750'"
            class="px-5 py-2 rounded-xl font-bold transition-all text-xs md:text-sm"
          >
            {{ locale === 'ar' ? 'جميع المقالات' : 'All Articles' }}
          </button>
          <button 
            v-for="cat in uniqueCategories" 
            :key="cat"
            @click="setCategory(cat)"
            :class="selectedCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-750'"
            class="px-5 py-2 rounded-xl font-bold transition-all text-xs md:text-sm"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Search Results Count Banner (if filtering) -->
      <div v-if="searchQuery || selectedCategory !== 'all'" class="text-center mb-8 text-xs font-bold text-gray-500">
        {{ locale === 'ar' ? `نتائج البحث: ${filteredArticles.length} مقال` : `Found: ${filteredArticles.length} articles` }}
        <button @click="resetFilters" class="text-primary hover:underline ms-2">
          {{ locale === 'ar' ? 'إعادة ضبط الفلاتر ↺' : 'Reset filters ↺' }}
        </button>
      </div>

      <!-- No Articles Found State -->
      <div v-if="paginatedArticles.length === 0" class="bg-white dark:bg-gray-800 rounded-3xl p-12 text-center max-w-xl mx-auto shadow-sm border border-gray-100 dark:border-gray-700 space-y-4 my-8">
        <div class="text-5xl mb-2">🔎</div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">
          {{ locale === 'ar' ? 'لم يتم العثور على مقالات مطابقة' : 'No matching articles found' }}
        </h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          {{ locale === 'ar' ? 'جرب البحث بكلمات مختلفة أو اختر قسماً آخر.' : 'Try searching with different keywords or select another category.' }}
        </p>
        <button 
          @click="resetFilters"
          class="px-6 py-2.5 bg-primary hover:bg-orange-600 text-white font-bold text-xs rounded-xl transition shadow"
        >
          {{ locale === 'ar' ? 'عرض كافة المقالات' : 'Show All Articles' }}
        </button>
      </div>

      <!-- Articles Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" id="articles-grid">
        <article 
          v-for="(article, idx) in paginatedArticles" 
          :key="article.id" 
          class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col group"
          data-aos="fade-up"
          :data-aos-delay="(idx % 3) * 100"
        >
          <!-- Article Image -->
          <div class="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-700">
            <NuxtImg 
              :src="article.image" 
              :alt="article.title?.[locale] || article.title_ar" 
              class="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
              format="webp" 
              loading="lazy" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            <!-- Category Tag -->
            <span class="absolute top-4 rtl:right-4 ltr:left-4 bg-[#121c2d]/90 backdrop-blur-md text-[#E99E15] font-black text-xs px-3.5 py-1.5 rounded-full border border-[#E99E15]/30">
              {{ article.category?.[locale] || article.category_ar || 'عام' }}
            </span>
          </div>

          <!-- Article Content -->
          <div class="p-6 md:p-8 flex-1 flex flex-col justify-between">
            <div>
              <!-- Date & Read Time -->
              <div class="flex items-center gap-4 text-xs font-bold text-gray-400 mb-3">
                <span class="flex items-center gap-1">
                  📅 {{ article.date }}
                </span>
                <span>•</span>
                <span class="flex items-center gap-1">
                  ⏱️ {{ article.readTime?.[locale] || article.read_time_ar || '5 دقائق' }}
                </span>
              </div>

              <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                <NuxtLink :to="localePath(`/blog/${article.id}`)">
                  {{ article.title?.[locale] || article.title_ar }}
                </NuxtLink>
              </h2>

              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {{ article.desc?.[locale] || article.excerpt_ar }}
              </p>
            </div>

            <!-- Read Article Button -->
            <div class="pt-4 border-t border-gray-100 dark:border-gray-700/60 mt-auto">
              <NuxtLink 
                :to="localePath(`/blog/${article.id}`)" 
                class="inline-flex items-center gap-2 text-primary hover:text-orange-600 font-black text-sm group-hover:underline transition"
              >
                <span>{{ locale === 'ar' ? 'قراءة المقال كاملاً' : 'Read Full Article' }}</span>
                <span class="rtl:rotate-180 text-base">&rarr;</span>
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>

      <!-- Pagination Component -->
      <div v-if="totalPages > 1" class="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm max-w-2xl mx-auto">
        <!-- Result count -->
        <div class="text-xs font-bold text-gray-500 dark:text-gray-400">
          {{ locale === 'ar' 
            ? `عرض ${(currentPage - 1) * perPage + 1} إلى ${Math.min(currentPage * perPage, filteredArticles.length)} من أصل ${filteredArticles.length} مقال` 
            : `Showing ${(currentPage - 1) * perPage + 1} to ${Math.min(currentPage * perPage, filteredArticles.length)} of ${filteredArticles.length} articles` 
          }}
        </div>

        <!-- Page Buttons -->
        <div class="flex items-center gap-2">
          <!-- Previous Button -->
          <button 
            @click="changePage(currentPage - 1)" 
            :disabled="currentPage === 1"
            class="px-4 py-2 rounded-xl text-xs font-bold border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-30 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {{ locale === 'ar' ? 'السابق' : 'Prev' }}
          </button>

          <!-- Numbered Page Buttons -->
          <button 
            v-for="page in totalPages" 
            :key="page"
            @click="changePage(page)"
            :class="currentPage === page 
              ? 'bg-primary text-white shadow-md shadow-primary/30 font-black' 
              : 'border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 font-bold'"
            class="w-9 h-9 rounded-xl text-xs transition flex items-center justify-center"
          >
            {{ page }}
          </button>

          <!-- Next Button -->
          <button 
            @click="changePage(currentPage + 1)" 
            :disabled="currentPage >= totalPages"
            class="px-4 py-2 rounded-xl text-xs font-bold border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-30 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {{ locale === 'ar' ? 'التالي' : 'Next' }}
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import mockArticles from '@/data/articles.json'

const { locale } = useI18n()
const localePath = useLocalePath()

const { data: blogData } = await useFetch('/api/blog')
const articles = computed(() => blogData.value || mockArticles)

// Filtering & Pagination State
const searchQuery = ref('')
const selectedCategory = ref('all')
const currentPage = ref(1)
const perPage = 6

const isAr = computed(() => locale.value === 'ar')

useSeoMeta({
  title: isAr.value
    ? 'المدونة الهندسية والصناعية | مقالات وأدلة صيانة وتشغيل المعدات - بيستوليكس قطر'
    : 'Engineering & Industrial Blog | Maintenance & Operations Guides - Bestolex Qatar',
  description: isAr.value
    ? 'مركز المعرفة والمقالات الهندسية المتخصصة في قطر: صيانة الزيوت الهيدروليكية، مقارنات المصدات الأمنية ومفجرات الإطارات، منصات التحميل اللوجستية، ومكابس تدوير النفايات.'
    : 'Bestolex engineering knowledge hub in Qatar: hydraulic fluid maintenance, perimeter security bollards, tyre killers, dock levelers, and recycling baler guides.',
  keywords: isAr.value
    ? 'مدونة هندسية قطر, مقالات صيانة هيدروليك, أعطال مضخات هيدروليكية, مقارنة مصدات أمنية, صيانة منصات تحميل, مكابس كرتون قطر, بيستوليكس'
    : 'engineering blog Qatar, hydraulic maintenance articles, security bollards comparison, dock leveler guides, waste recycling Doha',
  ogTitle: isAr.value ? 'المدونة الهندسية والتقنية | بيستوليكس قطر' : 'Engineering Blog | Bestolex Qatar',
  ogDescription: isAr.value ? 'مقالات وأدلة فنية متخصصة تهم مديري المشاريع والمصانع في دولة قطر.' : 'Specialized technical guides for plant and project managers in Qatar.',
  ogImage: '/images/hero/hero-bg.jpg'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        'name': 'المدونة الهندسية | Bestolex Qatar',
        'description': 'Technical and industrial articles from Bestolex Qatar.',
        'publisher': {
          '@type': 'Organization',
          'name': 'Bestolex Trading & Contracting'
        }
      })
    }
  ]
})

const uniqueCategories = computed(() => {
  const cats = new Set()
  articles.value.forEach(a => {
    const catName = a.category?.[locale.value] || a.category_ar
    if (catName) cats.add(catName)
  })
  return Array.from(cats)
})

const setCategory = (cat) => {
  selectedCategory.value = cat
  currentPage.value = 1
}

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'all'
  currentPage.value = 1
}

// Reset page on search
watch(searchQuery, () => {
  currentPage.value = 1
})

const filteredArticles = computed(() => {
  return articles.value.filter(a => {
    // 1. Category match
    const catName = a.category?.[locale.value] || a.category_ar || ''
    const matchCategory = selectedCategory.value === 'all' || catName === selectedCategory.value

    // 2. Search query match
    if (!searchQuery.value.trim()) return matchCategory

    const query = searchQuery.value.toLowerCase().trim()
    const title = (a.title?.[locale.value] || a.title_ar || '').toLowerCase()
    const desc = (a.desc?.[locale.value] || a.excerpt_ar || '').toLowerCase()
    const matchSearch = title.includes(query) || desc.includes(query) || catName.toLowerCase().includes(query)

    return matchCategory && matchSearch
  })
})

const totalPages = computed(() => Math.ceil(filteredArticles.value.length / perPage))

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredArticles.value.slice(start, start + perPage)
})

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    if (typeof window !== 'undefined') {
      const gridEl = document.getElementById('articles-grid')
      if (gridEl) {
        gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
}
</script>
