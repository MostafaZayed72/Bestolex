import { useServerSupabase } from '~~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  const supabase = useServerSupabase()

  if (supabase) {
    try {
      const { data: quotes } = await supabase
        .from('quote_requests')
        .select('*')
        .order('created_at', { ascending: false })

      const { data: appointments } = await supabase
        .from('appointments')
        .select('*')
        .order('created_at', { ascending: false })

      return {
        quotes: quotes || [],
        appointments: appointments || []
      }
    } catch (e) {
      console.warn('Failed to fetch from Supabase quotes table:', e)
    }
  }

  // Real empty lists when no records exist
  return {
    quotes: [],
    appointments: []
  }
})
