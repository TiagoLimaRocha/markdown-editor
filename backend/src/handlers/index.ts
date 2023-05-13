import { getMarkdown } from './markdown/getMarkdown';
import { upsertMarkdown } from './markdown/upsertMarkdown';

export function generateExpressRoutes(){
  const handlers = [
    {
      method: 'GET',
      path: '/api/markdown',
      handler: getMarkdown,
    },
    {
      method: 'POST',
      path: '/api/markdown',
      handler: upsertMarkdown,
    },
  ];

  handlers.forEach(({ method, path, handler }) => {
    console.log(`-> [${method}] GENERATED ROUTE: ${path}`);
    handler();
  });
};