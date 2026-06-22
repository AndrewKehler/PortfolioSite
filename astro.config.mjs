// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
   output: 'static', 
    vite: {
    server: {
      allowedHosts: true
    },
    preview: {
      allowedHosts: true
    }
  },
  site: 'https://andrewkehler.github.io',
  base: '/PortfolioSite'
});
