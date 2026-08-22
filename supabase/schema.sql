-- ========================================================
-- Bestolex Database Schema for Supabase
-- Run this in your Supabase SQL Editor
-- ========================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 0. Categories Table
CREATE TABLE IF NOT EXISTS article_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_ar TEXT NOT NULL,
  name_en TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 1. Articles Table
CREATE TABLE IF NOT EXISTS articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title_ar TEXT NOT NULL,
  title_en TEXT,
  category_ar TEXT NOT NULL,
  category_en TEXT,
  excerpt_ar TEXT,
  excerpt_en TEXT,
  content_ar TEXT NOT NULL,
  content_en TEXT,
  image TEXT,
  read_time_ar TEXT DEFAULT '5 دقائق قراءة',
  read_time_en TEXT DEFAULT '5 min read',
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Quotes & Inquiries Table
CREATE TABLE IF NOT EXISTS quote_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_name TEXT NOT NULL,
  job_title TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  product_id TEXT,
  product_name TEXT,
  category_title TEXT,
  product_url TEXT,
  message TEXT,
  is_quote_request BOOLEAN DEFAULT true,
  status TEXT DEFAULT 'new', -- new, contacted, in_progress, completed, archived
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Appointments Table
CREATE TABLE IF NOT EXISTS appointments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  locale TEXT DEFAULT 'ar',
  status TEXT DEFAULT 'new', -- new, confirmed, completed, cancelled
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Analytics & Downloads Table
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_type TEXT NOT NULL, -- brochure_download, quote_click, page_view
  target_name TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ========================================================
-- RLS (Row Level Security) Policies
-- Public Read for Published Articles, Authenticated/Service Role for Full Access
-- ========================================================

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Allow public read of published articles
CREATE POLICY "Allow public read published articles" ON articles
  FOR SELECT USING (is_published = true);

-- Allow public insert of quote requests, appointments, and analytics events
CREATE POLICY "Allow public insert quote_requests" ON quote_requests
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert appointments" ON appointments
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert analytics_events" ON analytics_events
  FOR INSERT WITH CHECK (true);

-- Allow full access for service_role / authenticated users
CREATE POLICY "Allow full access for authenticated users on articles" ON articles
  FOR ALL USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');

CREATE POLICY "Allow full access for authenticated users on quote_requests" ON quote_requests
  FOR ALL USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');

CREATE POLICY "Allow full access for authenticated users on appointments" ON appointments
  FOR ALL USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');

CREATE POLICY "Allow full access for authenticated users on analytics_events" ON analytics_events
  FOR ALL USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');
