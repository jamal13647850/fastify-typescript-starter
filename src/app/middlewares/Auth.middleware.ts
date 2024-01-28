import { FastifyReply, FastifyRequest } from "fastify";
import { HttpStatus, Iuser } from "../functions/types";
import { getUser } from "../functions/Auth";

export const isAuthMiddleWare=async (request:FastifyRequest,reply:FastifyReply,next:any):Promise<Iuser>=>{
    if (!request.headers.authorization) {
          return reply.code(HttpStatus.BAD_REQUEST).send({
            status: HttpStatus.BAD_REQUEST,
            message: 'No token was sent',
            data: null,
          });
    }
    const token = request.headers.authorization.replace('Bearer ', '');
    const authenticated=await getUser(token);

    const {status,message}=authenticated;
   
   
    if(status===200 && message==='User reterived Successfully'){
        return next()
    }
    return reply.code(401).send({
        status: HttpStatus.FORBIDDEN,
        message,
        data: null,
      });

   
}

