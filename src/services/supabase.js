import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jpafgqxuugdrcazdiztx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwYWZncXh1dWdkcmNhemRpenR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1Nzk4MzksImV4cCI6MjAyMTE1NTgzOX0.OhRMeP_shqneLsooIQic83GtGVTpFUR2EvNt-wfaBT8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
