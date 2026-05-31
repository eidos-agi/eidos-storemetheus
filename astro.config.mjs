// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://storemetheus.eidosagi.com',
  adapter: node({ mode: 'standalone' }),
});
