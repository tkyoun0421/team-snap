import { Database } from '@/types/database';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export default class Supabase {
  private supabase: SupabaseClient<Database>;

  constructor() {
    this.supabase = createClient<Database>(
      import.meta.env.SUPABASE_URL,
      import.meta.env.SUPABASE_ANON_KEY
    );
  }

  createNewUser(email: string, password: string) {
    if (!this.supabase) {
      throw new Error('Supabase client not initialized');
    }
    return this.supabase.auth.signUp({ email, password });
  }
}
