import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `--mode single` inlines everything into one dist/index.html, which is what
// gets shipped as the standalone H5 page. The default build emits normal
// hashed assets for static hosting (GitHub Pages, nginx, OSS, ...).
export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [react(), ...(mode === 'single' ? [viteSingleFile()] : [])],
  build: {
    // The two builds have separate output folders so one never clobbers the other.
    outDir: mode === 'single' ? 'dist-single' : 'dist',
    emptyOutDir: true,
    target: 'es2019',
    cssCodeSplit: mode !== 'single',
    assetsInlineLimit: mode === 'single' ? 100000000 : 4096,
  },
}))
