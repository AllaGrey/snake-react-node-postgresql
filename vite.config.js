import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/snake-react-node-postgresql',
  server: {
    open: '/snake-react-node-postgresql',
    port: 3000,
  },
});
