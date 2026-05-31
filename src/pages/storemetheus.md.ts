import type { APIRoute } from 'astro';
import { storemetheusMarkdown } from '../lib/storemetheus';

export const prerender = false;

export const GET: APIRoute = () => {
  return new Response(storemetheusMarkdown(), {
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
};
