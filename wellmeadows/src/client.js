import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ctyqtwauzsztpbtftozm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0eXF0d2F1enN6dHBidGZ0b3ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NjMyNDMsImV4cCI6MjAzNDAzOTI0M30.FAOqwb5AMBuMbquQmOtKGdogC5MBOtl8k0KCNP4waEg'
export const supabase = createClient(supabaseUrl, supabaseKey)

