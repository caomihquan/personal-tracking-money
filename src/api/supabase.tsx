import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rryvotrgwlimdxkizhhr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyeXZvdHJnd2xpbWR4a2l6aGhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5MjcwMjIsImV4cCI6MjA1OTUwMzAyMn0.uKeCdaKkLHGQzp4ihgvUf0OSYVl1EiocT93wn05rhYE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
