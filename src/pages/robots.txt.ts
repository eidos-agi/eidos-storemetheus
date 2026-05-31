import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = () => {
  return new Response(
    [
      'User-agent: *',
      'Disallow: /stores/greenmark',
      'Disallow: /stores/greenmark.md',
      'Disallow: /.well-known/greenmark-store.json',
      '',
    ].join('\n'),
    {
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'cache-control': 'public, max-age=300',
      },
    }
  );
};
