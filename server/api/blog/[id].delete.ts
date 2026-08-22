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
        .from('articles')
        .delete()
        .or(`id.eq.${id},slug.eq.${id}`)
    } catch (e) {
      console.error('Supabase article delete error:', e)
    }
  }

  // 2. Local fallback delete
  try {
    const filePath = path.resolve(process.cwd(), 'data/articles.json')
    const raw = fs.readFileSync(filePath, 'utf-8')
    let list = JSON.parse(raw)
    list = list.filter((item: any) => item.id !== id && item.slug !== id)
    fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf-8')
  } catch (err) {}

  return { success: true }
})
