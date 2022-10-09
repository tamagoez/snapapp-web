import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.NEXT_PUBLIC_supabase_url,
  process.env.NEXT_PUBLIC_supabase_anon
);

export default supabase;
