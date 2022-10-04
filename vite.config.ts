import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return{
    plugins: [react()],
    resolve:{
      alias:{
        '@builder': resolve(__dirname, 'src/builder'),
        '@components': resolve(__dirname, 'src/components'),
    }
  }}
});
