export interface Profile {
  id: string
  email: string
  full_name: string | null
  role: string | null
  created_at: string
  updated_at: string
}

export interface ModuleProgress {
  id: string
  user_id: string
  module_id: string
  learning_path: string | null
  completed: boolean
  completed_at: string | null
  last_viewed_at: string
  last_section_index: number
  created_at: string
}

export interface Certificate {
  id: string
  user_id: string
  certificate_code: string
  learning_path: string
  recipient_name: string
  issued_at: string
  created_at: string
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile
        Insert: Omit<Profile, 'created_at' | 'updated_at'>
        Update: Partial<Omit<Profile, 'id' | 'created_at'>>
      }
      module_progress: {
        Row: ModuleProgress
        Insert: Omit<ModuleProgress, 'id' | 'created_at'>
        Update: Partial<Omit<ModuleProgress, 'id' | 'user_id' | 'created_at'>>
      }
      certificates: {
        Row: Certificate
        Insert: Omit<Certificate, 'id' | 'created_at' | 'issued_at'>
        Update: Partial<Omit<Certificate, 'id' | 'user_id' | 'created_at'>>
      }
    }
  }
}
