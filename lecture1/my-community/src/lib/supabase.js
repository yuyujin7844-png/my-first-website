import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jyjebhjpljpaqrhblibh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5amViaGpwbGpwYXFyaGJsaWJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0MjExNDIsImV4cCI6MjA4Mzk5NzE0Mn0.62uHQC48vkgd0WJclgp9ZIpkvsEQImpH8NdtEL8CDMU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
