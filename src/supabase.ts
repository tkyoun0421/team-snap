import { Database } from '@/types/database';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient<Database>(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY
);

export default supabase;
