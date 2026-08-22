import fs from 'node:fs'
import path from 'node:path'
import { useServerSupabase } from '~~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const supabase = useServerSupabase()

  if (!body.name_ar) {
    throw createError({ statusCode: 400, message: 'اسم القسم بالعربية مطلوب' })
  }

  const slug = body.slug || (body.name_en ? body.name_en.toLowerCase().trim().replace(/\s+/g, '-') : 'cat-' + Date.now())
  const name_en = body.name_en || body.name_ar

  const newCategory = {
    name_ar: body.name_ar,
    name_en,
    slug
  }

  // 1. Insert to Supabase if connected
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('article_categories')
        .insert([newCategory])
        .select()
        .single()

      if (!error && data) {
        return { success: true, data }
      }
    } catch (e) {
      console.warn('Supabase category insert error:', e)
    }
  }

  // 2. Local fallback
  try {
    const filePath = path.resolve(process.cwd(), 'data/categories.json')
    let list = []
    if (fs.existsSync(filePath)) {
      list = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }
    const catItem = { id: 'cat-' + Date.now(), ...newCategory }
    list.push(catItem)
    fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf-8')
    return { success: true, data: catItem }
  } catch (err) {
    return { success: true }
  }
})
