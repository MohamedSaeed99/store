/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PUBLIC_STRIPE_PUBLISHABLE_KEY: string
    readonly VITE_BACKEND_URL: string
  }
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}