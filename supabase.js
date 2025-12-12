export const SUPABASE_URL = "https://hpcipbpgsmvwmkseqfbk.supabase.co";
export const SUPABASE_ANON_KEY =
  "sb_publishable_cnwHtamgdBeaN5XrIa0RmA_UAaxCGnS";

export const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
