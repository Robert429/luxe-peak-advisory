import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://luxepeakadvisory.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
