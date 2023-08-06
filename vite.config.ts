import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias'
import path  from 'path'

export default defineConfig({
  plugins: [
    alias(),
    vue()
  ],
  resolve: {
    alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
},
  server: {
    host: '0.0.0.0',
    port: 3001,
    open: false, 
    cors: true, 
  },
  build: {
    outDir: 'dist',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/global-variables.scss";`
      }
    }
  }
})

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import path from 'path';

// // https://vitejs.dev/config/
// export default defineConfig({
//   // base: '/my-app/',
//   base: './',
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src')
//     }
//   }
// })


