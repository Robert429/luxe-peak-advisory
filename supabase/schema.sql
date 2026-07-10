-- Contact form submissions for LuxePeak Advisory (Vicky Pérez)
-- Run this once in the Supabase SQL Editor (Project → SQL Editor → New query).

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  service text,
  message text not null,
  locale text default 'en',
  status text not null default 'new' check (status in ('new', 'contacted', 'archived')),
  source_page text
);

-- Enable Row Level Security — required so the public anon key can be used safely in the browser.
alter table public.contact_submissions enable row level security;

-- Allow anyone (the public anon key used by the website) to INSERT a row...
create policy "Public can submit contact form"
  on public.contact_submissions
  for insert
  to anon
  with check (true);

-- ...but nobody using the anon key can read, update, or delete rows.
-- Vicky reviews submissions from the Supabase Table Editor (or Dashboard),
-- which uses your logged-in account, not the anon key.

-- Optional: index for sorting the inbox by newest first.
create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);
