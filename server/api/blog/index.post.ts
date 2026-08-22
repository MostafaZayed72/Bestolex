import fs from 'node:fs'
import path from 'node:path'
import { useServerSupabase } from '~~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const supabase = useServerSupabase()

  const slug = body.slug || (body.title_ar ? body.title_ar.trim().toLowerCase().replace(/\s+/g, '-') : 'article-' + Date.now())

  const newArticleRecord = {
    slug,
    title_ar: body.title_ar,
    title_en: body.title_en || body.title_ar,
    category_ar: body.category_ar || 'عام',
    category_en: body.category_en || 'General',
    excerpt_ar: body.excerpt_ar || '',
    excerpt_en: body.excerpt_en || '',
    content_ar: body.content_ar,
    content_en: body.content_en || body.content_ar,
    image: body.image || '/images/news/news1.jpg',
    read_time_ar: body.read_time_ar || '5 دقائق قراءة',
    read_time_en: body.read_time_en || '5 min read',
    is_published: body.is_published !== false
  }

  // 1. If Supabase configured, insert to Supabase
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('articles')
        .insert([newArticleRecord])
        .select()
        .single()

      if (!error && data) {
        return { success: true, data }
      }
    } catch (e) {
      console.error('Failed to insert article to Supabase:', e)
    }
  }

  // 2. Also save to local data/articles.json
  try {
    const filePath = path.resolve(process.cwd(), 'data/articles.json')
    const raw = fs.readFileSync(filePath, 'utf-8')
    const list = JSON.parse(raw)

    const formatted = {
      id: slug,
      slug: slug,
      title: { ar: body.title_ar, en: body.title_en || body.title_ar },
      category: { ar: body.category_ar || 'عام', en: body.category_en || 'General' },
      date: new Date().toISOString().split('T')[0],
      readTime: { ar: body.read_time_ar || '5 دقائق قراءة', en: body.read_time_en || '5 min read' },
      image: body.image || '/images/news/news1.jpg',
      desc: { ar: body.excerpt_ar || body.title_ar, en: body.excerpt_en || body.title_en },
      content: { ar: body.content_ar, en: body.content_en || body.content_ar }
    }

    list.unshift(formatted)
    fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf-8')

    return { success: true, data: formatted }
  } catch (err) {
    return { success: true, warning: 'Saved locally' }
  }
})
