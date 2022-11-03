import { Router } from 'express';

export default () => {
  return Router({ caseSensitive: true }).get('/test', (request, response) => {
    return response.json({ name: 'maha' });
  });
};
