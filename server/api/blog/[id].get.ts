import fs from 'node:fs'
import path from 'node:path'
import { useServerSupabase } from '~~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const supabase = useServerSupabase()

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .or(`id.eq.${id},slug.eq.${id}`)
        .single()

      if (!error && data) {
        return {
          id: data.id,
          slug: data.slug,
          title: { ar: data.title_ar, en: data.title_en || data.title_ar },
          title_ar: data.title_ar,
          title_en: data.title_en,
          category: { ar: data.category_ar, en: data.category_en || data.category_ar },
          category_ar: data.category_ar,
          category_en: data.category_en,
          excerpt: { ar: data.excerpt_ar, en: data.excerpt_en || data.excerpt_ar },
          excerpt_ar: data.excerpt_ar,
          excerpt_en: data.excerpt_en,
          content: { ar: data.content_ar, en: data.content_en || data.content_ar },
          content_ar: data.content_ar,
          content_en: data.content_en,
          image: data.image || '/images/news/news1.jpg',
          date: data.created_at ? data.created_at.split('T')[0] : '2026-08-15',
          readTime: { ar: data.read_time_ar || '5 دقائق قراءة', en: data.read_time_en || '5 min read' },
          read_time_ar: data.read_time_ar,
          read_time_en: data.read_time_en,
          isPublished: data.is_published,
          is_featured: !!data.is_featured
        }
      }
    } catch (e) {}
  }

  // Local fallback
  try {
    const filePath = path.resolve(process.cwd(), 'data/articles.json')
    const raw = fs.readFileSync(filePath, 'utf-8')
    const list = JSON.parse(raw)
    const found = list.find((a: any) => a.id === id || a.slug === id)
    if (found) {
      return {
        ...found,
        title_ar: found.title?.ar,
        title_en: found.title?.en,
        category_ar: found.category?.ar,
        category_en: found.category?.en,
        excerpt_ar: found.desc?.ar,
        excerpt_en: found.desc?.en,
        content_ar: found.content?.ar,
        content_en: found.content?.en,
        read_time_ar: found.readTime?.ar,
        read_time_en: found.readTime?.en
      }
    }
  } catch (err) {}

  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
})
