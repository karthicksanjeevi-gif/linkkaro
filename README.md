# LinkKaro

LinkKaro is a job-connect platform concept for rural and semi-urban communities in India, connecting local job seekers with employers.

## Current features

- Account registration as a job seeker or employer
- Sign-in with Supabase Auth
- User profile dashboard with editable phone number and bio
- Home, Jobs, and Workers routes (Jobs and Workers currently show placeholder content)

## Requirements

- Node.js and npm
- A Supabase project

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a local environment file from the example:

   ```bash
   cp .env.example .env
   ```

   On Windows PowerShell, use `Copy-Item .env.example .env`.

3. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env` using the values from your Supabase project.

4. Configure Supabase Auth and create the `public.users` table used by the app. The table should include the profile fields used in `src/types/index.ts`; configure Row Level Security policies so users can only read and update their own profile (`uid = auth.uid()`).

5. Start the development server:

   ```bash
   npm run dev
   ```

## Available scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Type-check and build for production
- `npm run preview` - Preview the production build locally

## Environment and security

`.env` files are ignored by Git. Do not commit credentials or a Supabase service-role key. The anon key is used in the browser, so protect all database access with appropriate Supabase Row Level Security policies.
