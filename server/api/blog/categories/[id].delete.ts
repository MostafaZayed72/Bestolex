import fs from 'node:fs'
import path from 'node:path'
import { useServerSupabase } from '~~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const supabase = useServerSupabase()

  // 1. Supabase delete
  if (supabase) {
    try {
      await supabase
        .from('article_categories')
        .delete()
        .eq('id', id)
    } catch (e) {
      console.warn('Supabase category delete error:', e)
    }
  }

  // 2. Local fallback delete
  try {
    const filePath = path.resolve(process.cwd(), 'data/categories.json')
    if (fs.existsSync(filePath)) {
      let list = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      list = list.filter((item: any) => item.id !== id && item.slug !== id)
      fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf-8')
    }
  } catch (err) {}

  return { success: true }
})
