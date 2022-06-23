import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        // babel-macro is needed for lingui
        plugins: ['macros'],
      },
    }),
  ],
})
