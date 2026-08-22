<template>
  <div class="blog-page bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300 py-16 md:py-24">
    <div class="container mx-auto px-4 md:px-8">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
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

      <!-- Category Filter Pills -->
      <div class="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="100">
        <button 
          @click="selectedCategory = 'all'"
          :class="selectedCategory === 'all' ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100'"
          class="px-5 py-2.5 rounded-xl font-bold transition-all text-sm md:text-base"
        >
          {{ locale === 'ar' ? 'جميع المقالات' : 'All Articles' }}
        </button>
        <button 
          v-for="cat in uniqueCategories" 
          :key="cat"
          @click="selectedCategory = cat"
          :class="selectedCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100'"
          class="px-5 py-2.5 rounded-xl font-bold transition-all text-sm md:text-base"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="(article, idx) in filteredArticles" 
          :key="article.id" 
          class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col group"
          data-aos="fade-up"
          :data-aos-delay="(idx % 3) * 100"
        >
          <!-- Article Image -->
          <div class="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-700">
            <NuxtImg 
              :src="article.image" 
              :alt="article.title[locale]" 
              class="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
              format="webp" 
              loading="lazy" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            <!-- Category Tag -->
            <span class="absolute top-4 rtl:right-4 ltr:left-4 bg-[#121c2d]/90 backdrop-blur-md text-[#E99E15] font-black text-xs px-3.5 py-1.5 rounded-full border border-[#E99E15]/30">
              {{ article.category[locale] }}
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
                  ⏱️ {{ article.readTime[locale] }}
                </span>
              </div>

              <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                <NuxtLink :to="localePath(`/blog/${article.id}`)">
                  {{ article.title[locale] }}
                </NuxtLink>
              </h2>

              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {{ article.desc[locale] }}
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

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import mockArticles from '@/data/articles.json'

const { locale } = useI18n()
const localePath = useLocalePath()
const articles = ref(mockArticles)
const selectedCategory = ref('all')

useHead({
  title: locale.value === 'ar' ? 'المدونة الهندسية | بيستوليكس' : 'Engineering Blog | Bestolex'
})

const uniqueCategories = computed(() => {
  const cats = new Set()
  articles.value.forEach(a => {
    if (a.category && a.category[locale.value]) {
      cats.add(a.category[locale.value])
    }
  })
  return Array.from(cats)
})

const filteredArticles = computed(() => {
  if (selectedCategory.value === 'all') return articles.value
  return articles.value.filter(a => a.category[locale.value] === selectedCategory.value)
})
</script>
