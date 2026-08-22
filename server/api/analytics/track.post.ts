import { useServerSupabase } from '~~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const supabase = useServerSupabase()

  if (supabase) {
    try {
      await supabase
        .from('analytics_events')
        .insert([{
          event_type: body.event_type || 'brochure_download',
          target_name: body.target_name,
          metadata: body.metadata || {}
        }])
    } catch (e) {
      console.warn('Failed to insert analytics event:', e)
    }
  }

  return { success: true }
})
