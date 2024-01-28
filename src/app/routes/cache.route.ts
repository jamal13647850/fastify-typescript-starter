'use strict'

import { invalidateCacheHandler } from "../handler/cache.handler";
import { isAuthMiddleWare } from "../middlewares/Auth.middleware";

const fp = require('fastify-plugin');

const invalidateCacheSchema={
  querystring: {
    name: { type: 'string' },
    excitement: { type: 'integer' }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        status: { type: 'number' },
        message: { type: 'string' }
      }
    }
  }
};
async function cacheRoutes(fastify: any, options:any, done: () => void) {
  fastify.route({
    method: 'POST',
    url: '/cache/invalidate',
    schema: invalidateCacheSchema,
    preHandler:isAuthMiddleWare,
    handler: invalidateCacheHandler
  })
};


module.exports = cacheRoutes
export default cacheRoutes