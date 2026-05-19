import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bicudvunhpsozntnlvwd.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpY3VkdnVuaHBzb3pudG5sdndkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyMDkxMjcsImV4cCI6MjA5NDc4NTEyN30.GQM4PFalUQXeNUn4mSqwpgOvoCSJOzAwjGrH-EOsGaM";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);