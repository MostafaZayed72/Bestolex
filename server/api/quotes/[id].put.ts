import { useServerSupabase } from '~~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  const supabase = useServerSupabase()

  if (supabase) {
    try {
      if (body.type === 'appointment') {
        await supabase
          .from('appointments')
          .update({ status: body.status })
          .eq('id', id)
      } else {
        await supabase
          .from('quote_requests')
          .update({ status: body.status })
          .eq('id', id)
      }
    } catch (e) {
      console.error('Supabase quote status update error:', e)
    }
  }

  return { success: true }
})
