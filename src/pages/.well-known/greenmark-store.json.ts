import type { APIRoute } from 'astro';
import { greenmarkStore } from '../../lib/storemetheus';

export const prerender = false;

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify(
      {
        name: greenmarkStore.name,
        visibility: greenmarkStore.visibility,
        reviewed: greenmarkStore.reviewed,
        owner: greenmarkStore.owner,
        audience: greenmarkStore.audience,
        creator: greenmarkStore.creator,
        purpose: greenmarkStore.purpose,
        routes: greenmarkStore.routes,
        live: greenmarkStore.live,
        domains: greenmarkStore.domains,
        approvalRequiredFor: greenmarkStore.approvalRequiredFor,
        firstSkills: greenmarkStore.firstSkills,
        proofSurfaces: greenmarkStore.proofSurfaces,
      },
      null,
      2
    ),
    {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=300',
        'x-robots-tag': 'noindex, nofollow',
      },
    }
  );
};
