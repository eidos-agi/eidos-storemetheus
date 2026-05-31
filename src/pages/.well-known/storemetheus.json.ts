import type { APIRoute } from 'astro';
import {
  STOREMETHEUS_REVIEWED,
  buildContract,
  canonicalUrls,
  desiredUrls,
  greenmarkStore,
  platformNotes,
  storeTemplates,
  storemetheusSources,
  validationSurfaces,
} from '../../lib/storemetheus';

export const prerender = false;

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify(
      {
        name: 'eidos-storemetheus',
        version: '0.1.0',
        reviewed: STOREMETHEUS_REVIEWED,
        purpose: 'Build governed plugin stores for individuals, teams, and companies.',
        canonical: canonicalUrls,
        desiredCanonical: desiredUrls,
        buildContract,
        storeTemplates,
        stores: [
          {
            name: greenmarkStore.name,
            visibility: greenmarkStore.visibility,
            creator: greenmarkStore.creator,
            routes: greenmarkStore.routes,
            live: greenmarkStore.live,
          },
        ],
        platformNotes,
        validationSurfaces,
        creatorPattern:
          'Each store should expose its own creator plugin, such as Greenmark Plugin Creator or Eidos Plugin Creator. Felix may be the implementation engine behind that user-facing creator.',
        sources: storemetheusSources,
      },
      null,
      2
    ),
    {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=300',
      },
    }
  );
};
