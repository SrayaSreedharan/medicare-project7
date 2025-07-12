import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ufzukjvpjpbqugbxtteh.supabase.co'; 

const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmenVranZwanBicXVnYnh0dGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyNDExMzIsImV4cCI6MjA2NzgxNzEzMn0.brDJ4EcBFgIpZuhb561up2s1m9JPMLju2o6kWapyIJM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
