import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto'

const supabaseUrl = 'https://gqotnyyxzifhhifsqkjk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxb3RueXl4emlmaGhpZnNxa2prIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4NDg3MDcsImV4cCI6MTk4NTQyNDcwN30.Zw1rxNGqS4Dts2vz9ZxyDTpaJR82wFSjzu4pBNyyXsM';


export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  }
});