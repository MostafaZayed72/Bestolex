import fs from 'node:fs'
import path from 'node:path'
import { useServerSupabase } from '~~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { id, is_featured } = body
  const supabase = useServerSupabase()

  // 1. Update Supabase
  if (supabase) {
    try {
      await supabase
        .from('articles')
        .update({ is_featured: !!is_featured })
        .or(`id.eq.${id},slug.eq.${id}`)
    } catch (e) {
      console.warn('Supabase toggle featured error:', e)
    }
  }

  // 2. Update local file
  try {
    const filePath = path.resolve(process.cwd(), 'data/articles.json')
    if (fs.existsSync(filePath)) {
      let list = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      list = list.map((item: any) => {
        if (item.id === id || item.slug === id) {
          return {
            ...item,
            is_featured: !!is_featured,
            isFeatured: !!is_featured
          }
        }
        return item
      })
      fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf-8')
    }
  } catch (err) {}

  return { success: true }
})
