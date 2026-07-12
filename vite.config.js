import { defineConfig, resolveConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import injectHTML from 'vite-plugin-html-inject'

export default defineConfig({
  plugins: [
    tailwindcss(),
    injectHTML()
  ],
  build: {
    rollupOptions:{
        input: {
            main: "index.html",
            about: "about.html",
            gallery: "gallery.html",
            formComplete: "form-complete.html",
        }
    }
  }
})