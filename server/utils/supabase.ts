import { createClient } from '@supabase/supabase-js'

let supabaseClient: any = null

export const useServerSupabase = () => {
  let url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_KEY

  if (!url || !key || url.includes('your-project') || key.includes('your-supabase')) {
    return null
  }

  // Strip any trailing /rest/v1 or slashes
  url = url.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '')

  if (!supabaseClient) {
    supabaseClient = createClient(url, key)
  }

  return supabaseClient
}
