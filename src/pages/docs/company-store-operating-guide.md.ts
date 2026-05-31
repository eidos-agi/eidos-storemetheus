import type { APIRoute } from 'astro';
import guide from '../../../docs/company-store-operating-guide.md?raw';

export const prerender = false;

export const GET: APIRoute = () => {
  return new Response(guide, {
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
};
