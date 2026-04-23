import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content: string, filepath: string) => {
          if (filepath.includes('src/styles/globals') || filepath.includes('src/styles/_')) {
            return content
          }
          return `@import "${path.resolve(__dirname, 'src/styles/globals').replace(/\\/g, '/')}";\n` + content
        },
      },
    },
  },
})
