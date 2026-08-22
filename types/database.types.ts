export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      articles: {
        Row: Record<string, any>
        Insert: Record<string, any>
        Update: Record<string, any>
      }
      article_categories: {
        Row: Record<string, any>
        Insert: Record<string, any>
        Update: Record<string, any>
      }
      quote_requests: {
        Row: Record<string, any>
        Insert: Record<string, any>
        Update: Record<string, any>
      }
      appointments: {
        Row: Record<string, any>
        Insert: Record<string, any>
        Update: Record<string, any>
      }
      analytics_events: {
        Row: Record<string, any>
        Insert: Record<string, any>
        Update: Record<string, any>
      }
    }
  }
}
