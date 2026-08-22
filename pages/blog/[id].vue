<template>
  <div class="article-page bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300 py-12 md:py-20">
    
    <!-- 404 / Loading State -->
    <div v-if="!article" class="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {{ locale === 'ar' ? 'المقال غير موجود' : 'Article Not Found' }}
      </h2>
      <NuxtLink :to="localePath('/blog')" class="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-600 transition">
        {{ locale === 'ar' ? 'العودة إلى المدونة' : 'Back to Blog' }}
      </NuxtLink>
    </div>

    <!-- Article Content View -->
    <article v-else class="container mx-auto px-4 md:px-8 max-w-4xl">
      
      <!-- Back Navigation & Category -->
      <div class="flex items-center justify-between gap-4 mb-8" data-aos="fade-down">
        <NuxtLink :to="localePath('/blog')" class="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition">
          <span class="rtl:rotate-180 text-base">&larr;</span>
          <span>{{ locale === 'ar' ? 'العودة إلى المدونة' : 'Back to Blog' }}</span>
        </NuxtLink>

        <span class="bg-[#121c2d] dark:bg-gray-800 text-[#E99E15] font-black text-xs px-4 py-1.5 rounded-full border border-[#E99E15]/30">
          {{ article.category[locale] }}
        </span>
      </div>

      <!-- Title Header -->
      <header class="mb-10 text-center md:text-start" data-aos="fade-up">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
          {{ article.title[locale] }}
        </h1>

        <!-- Meta Info -->
        <div class="flex flex-wrap items-center gap-6 text-sm font-bold text-gray-500 dark:text-gray-400 border-y border-gray-200 dark:border-gray-800 py-4">
          <div class="flex items-center gap-2">
            <span>👤</span>
            <span>{{ locale === 'ar' ? 'فريق بيستوليكس الهندسي' : 'Bestolex Engineering Team' }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span>📅</span>
            <span>{{ article.date }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span>⏱️</span>
            <span>{{ article.readTime[locale] }}</span>
          </div>
        </div>
      </header>

      <!-- Featured Image -->
      <div class="relative h-[300px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl mb-12 border border-gray-100 dark:border-gray-800" data-aos="zoom-in">
        <NuxtImg 
          :src="article.image" 
          :alt="article.title[locale]" 
          class="w-full h-full object-cover" 
          format="webp" 
          loading="eager" 
        />
      </div>

      <!-- Main Body Text -->
      <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-12 shadow-xl border border-gray-100 dark:border-gray-700 mb-16 text-gray-800 dark:text-gray-200 leading-relaxed text-base sm:text-lg whitespace-pre-line" data-aos="fade-up">
        {{ article.content[locale] }}
      </div>

      <!-- Call to Action Banner inside Article -->
      <div class="bg-gradient-to-r from-[#121c2d] to-[#1e2d42] text-white rounded-3xl p-8 md:p-10 shadow-2xl text-center mb-16" data-aos="fade-up">
        <h3 class="text-2xl md:text-3xl font-black mb-4">
          {{ locale === 'ar' ? 'هل تحتاج استشارة هندسية لمشروعك؟' : 'Need Technical Advice for Your Project?' }}
        </h3>
        <p class="text-gray-300 max-w-2xl mx-auto mb-6 text-sm md:text-base">
          {{ locale === 'ar' 
            ? 'فريقنا المتخصص جاهز للإجابة على استفساراتكم وتقديم الدعم الفني وتوريد أفضل المعدات والحلول الصناعية.' 
            : 'Our dedicated team is ready to answer inquiries, provide technical support, and supply high-quality industrial solutions.' 
          }}
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink :to="localePath('/contact')" class="bg-primary hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl transition shadow-lg">
            {{ locale === 'ar' ? 'تواصل معنا' : 'Contact Us' }}
          </NuxtLink>
        </div>
      </div>

      <!-- Related Articles -->
      <div v-if="relatedArticles.length" class="mt-16" data-aos="fade-up">
        <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-8 text-center md:text-start">
          {{ locale === 'ar' ? 'مقالات ذات صلة' : 'Related Articles' }}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div 
            v-for="rel in relatedArticles" 
            :key="rel.id" 
            class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow border border-gray-100 dark:border-gray-700 hover:shadow-xl transition group flex flex-col"
          >
            <div class="h-40 overflow-hidden">
              <NuxtImg :src="rel.image" :alt="rel.title[locale]" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" format="webp" loading="lazy" />
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
              <h4 class="font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition line-clamp-2">
                <NuxtLink :to="localePath(`/blog/${rel.id}`)">
                  {{ rel.title[locale] }}
                </NuxtLink>
              </h4>
              <NuxtLink :to="localePath(`/blog/${rel.id}`)" class="text-primary font-bold text-sm hover:underline inline-flex items-center gap-1">
                <span>{{ locale === 'ar' ? 'قراءة المزيد' : 'Read More' }}</span>
                <span class="rtl:rotate-180">&rarr;</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

    </article>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import mockArticles from '@/data/articles.json'

const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const articleId = computed(() => route.params.id)
const { data: dynamicArticle } = await useFetch(() => `/api/blog/${route.params.id}`)

const article = computed(() => {
  if (dynamicArticle.value) return dynamicArticle.value
  return mockArticles.find(a => a.id === articleId.value || a.slug === articleId.value)
})

const relatedArticles = computed(() => {
  if (!article.value) return []
  return mockArticles.filter(a => a.id !== article.value.id && a.slug !== article.value.id).slice(0, 2)
})

useHead(() => {
  if (!article.value) return { title: 'Blog | Bestolex' }
  const title = article.value.title?.[locale.value] || 'Bestolex Article'
  const desc = article.value.desc?.[locale.value] || ''
  return {
    title: `${title} | Bestolex`,
    meta: [
      { name: 'description', content: desc },
      { property: 'og:title', content: title },
      { property: 'og:description', content: desc },
      { property: 'og:image', content: article.value.image }
    ]
  }
})
</script>
