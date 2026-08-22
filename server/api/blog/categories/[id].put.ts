import fs from 'node:fs'
import path from 'node:path'
import { useServerSupabase } from '~~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  const supabase = useServerSupabase()

  // 1. Supabase update
  if (supabase) {
    try {
      await supabase
        .from('article_categories')
        .update({
          name_ar: body.name_ar,
          name_en: body.name_en,
          slug: body.slug || (body.name_en ? body.name_en.toLowerCase().trim().replace(/\s+/g, '-') : undefined)
        })
        .eq('id', id)
    } catch (e) {
      console.warn('Supabase category update error:', e)
    }
  }

  // 2. Local fallback update
  try {
    const filePath = path.resolve(process.cwd(), 'data/categories.json')
    if (fs.existsSync(filePath)) {
      let list = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      list = list.map((item: any) => {
        if (item.id === id || item.slug === id) {
          return {
            ...item,
            name_ar: body.name_ar || item.name_ar,
            name_en: body.name_en || item.name_en,
            slug: body.slug || item.slug
          }
        }
        return item
      })
      fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf-8')
    }
  } catch (err) {}

  return { success: true }
})
