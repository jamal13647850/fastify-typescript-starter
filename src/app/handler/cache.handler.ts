import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { HttpStatus } from "../functions/types";

export const invalidateCacheHandler = function (
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    //@ts-ignore
    this.cacheClientDB.flushdb();
    //@ts-ignore
    this.log.info('The cache of API gateway cleared succesfully' )
    reply.send({
      status: HttpStatus.OK,
      message: "The cache cleared succesfully",
    });
  } catch (error) {
    console.log(error);
    //@ts-ignore
    this.log.error(error )
  }
};
