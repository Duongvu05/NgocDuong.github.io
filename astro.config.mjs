import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://duongvu05.github.io',
  base: '/NgocDuong.github.io',
  integrations: [tailwind()],
});
