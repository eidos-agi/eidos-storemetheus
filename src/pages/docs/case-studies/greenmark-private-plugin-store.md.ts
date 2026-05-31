import type { APIRoute } from 'astro';
import caseStudy from '../../../../docs/case-studies/greenmark-private-plugin-store.md?raw';

export const prerender = false;

export const GET: APIRoute = () => {
  return new Response(caseStudy, {
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
};
