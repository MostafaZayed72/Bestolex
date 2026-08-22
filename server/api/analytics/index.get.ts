import { useServerSupabase } from '~~/server/utils/supabase'

export default defineEventHandler(async (event) => {
  const supabase = useServerSupabase()

  if (supabase) {
    try {
      const { data: events } = await supabase
        .from('analytics_events')
        .select('*')
        .order('created_at', { ascending: false })

      const { count: brochureCount } = await supabase
        .from('analytics_events')
        .select('*', { count: 'exact', head: true })
        .eq('event_type', 'brochure_download')

      const { count: quotesCount } = await supabase
        .from('quote_requests')
        .select('*', { count: 'exact', head: true })

      const { count: appointmentsCount } = await supabase
        .from('appointments')
        .select('*', { count: 'exact', head: true })

      return {
        brochureDownloads: brochureCount ?? 0,
        totalQuotes: quotesCount ?? 0,
        totalAppointments: appointmentsCount ?? 0,
        recentEvents: events || []
      }
    } catch (e) {
      console.warn('Analytics fetch error:', e)
    }
  }

  // Real initial counts when empty / fresh setup
  return {
    brochureDownloads: 0,
    totalQuotes: 0,
    totalAppointments: 0,
    recentEvents: []
  }
})
