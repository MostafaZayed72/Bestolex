import fs from 'node:fs'
import path from 'node:path'
import { useServerSupabase } from '~~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  const supabase = useServerSupabase()

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('article_categories')
        .select('*')
        .order('created_at', { ascending: true })

      if (!error && data && data.length > 0) {
        return data
      }
    } catch (e) {
      console.warn('Supabase categories fetch error:', e)
    }
  }

  // Fallback to local categories.json
  try {
    const filePath = path.resolve(process.cwd(), 'data/categories.json')
    const raw = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(raw)
  } catch (err) {
    return []
  }
})
