import type { APIRoute } from 'astro';
import { greenmarkStoreMarkdown } from '../../lib/storemetheus';

export const prerender = false;

export const GET: APIRoute = () => {
  return new Response(greenmarkStoreMarkdown(), {
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'cache-control': 'public, max-age=300',
      'x-robots-tag': 'noindex, nofollow',
    },
  });
};
