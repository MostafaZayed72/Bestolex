import fs from 'node:fs'
import path from 'node:path'
import { useServerSupabase } from '~~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  const supabase = useServerSupabase()

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false })

      if (!error && data && data.length > 0) {
        // Transform database flat columns to structured JSON if needed
        return data.map((item: any) => ({
          id: item.id,
          slug: item.slug,
          title: { ar: item.title_ar, en: item.title_en || item.title_ar },
          category: { ar: item.category_ar, en: item.category_en || item.category_ar },
          excerpt: { ar: item.excerpt_ar, en: item.excerpt_en || item.excerpt_ar },
          desc: { ar: item.excerpt_ar || item.title_ar, en: item.excerpt_en || item.title_en },
          content: { ar: item.content_ar, en: item.content_en || item.content_ar },
          image: item.image || '/images/news/news1.jpg',
          date: item.created_at ? item.created_at.split('T')[0] : '2026-08-15',
          readTime: { ar: item.read_time_ar || '5 دقائق قراءة', en: item.read_time_en || '5 min read' },
          isPublished: item.is_published
        }))
      }
    } catch (e) {
      console.warn('Supabase articles fetch failed, falling back to local file:', e)
    }
  }

  // Local fallback
  try {
    const filePath = path.resolve(process.cwd(), 'data/articles.json')
    const raw = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(raw)
  } catch (err) {
    return []
  }
})
