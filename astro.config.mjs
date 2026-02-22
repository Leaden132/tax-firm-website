import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://hillstax.ca',
  build: {
    assets: '_assets',
  },
});
