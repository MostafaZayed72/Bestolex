import fs from 'node:fs'
import path from 'node:path'
import { useServerSupabase } from '~~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  const supabase = useServerSupabase()

  const updatedRecord = {
    title_ar: body.title_ar,
    title_en: body.title_en || body.title_ar,
    category_ar: body.category_ar || 'عام',
    category_en: body.category_en || 'General',
    excerpt_ar: body.excerpt_ar || '',
    excerpt_en: body.excerpt_en || '',
    content_ar: body.content_ar,
    content_en: body.content_en || body.content_ar,
    image: body.image,
    read_time_ar: body.read_time_ar,
    read_time_en: body.read_time_en,
    is_published: body.is_published,
    updated_at: new Date().toISOString()
  }

  // 1. Supabase update
  if (supabase) {
    try {
      await supabase
        .from('articles')
        .update(updatedRecord)
        .or(`id.eq.${id},slug.eq.${id}`)
    } catch (e) {
      console.error('Supabase article update error:', e)
    }
  }

  // 2. Local fallback update
  try {
    const filePath = path.resolve(process.cwd(), 'data/articles.json')
    const raw = fs.readFileSync(filePath, 'utf-8')
    let list = JSON.parse(raw)
    list = list.map((item: any) => {
      if (item.id === id || item.slug === id) {
        return {
          ...item,
          title: { ar: body.title_ar, en: body.title_en || body.title_ar },
          category: { ar: body.category_ar, en: body.category_en || body.category_ar },
          desc: { ar: body.excerpt_ar || body.title_ar, en: body.excerpt_en || body.title_en },
          content: { ar: body.content_ar, en: body.content_en || body.content_ar },
          image: body.image || item.image
        }
      }
      return item
    })
    fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf-8')
  } catch (err) {}

  return { success: true }
})
