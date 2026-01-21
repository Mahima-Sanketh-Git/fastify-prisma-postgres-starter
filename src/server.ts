
import 'dotenv/config';
import Fastify, { type FastifyInstance } from "fastify";
import { prisma } from "./plugins/prisma.js";

declare module "fastify" {
  interface FastifyInstance {
    prisma: typeof prisma;
  }
}

const fastify:FastifyInstance = Fastify({
 logger:true
});

fastify.decorate("prisma", prisma);


fastify.get("/",async (request,response) => {
    return {status:"Ok"}
});

// DB health check
fastify.get('/api/health/db', async (request, reply) => {
  try {
    const result:any = await fastify.prisma.$queryRaw`SELECT NOW()`
    return { status: 'ok', dbTime: result[0].now }
  } catch (err) {
    reply.status(500).send({ status: 'error', error: err })
  }
})

const start = async()=>{
    try {
        const port = 4000;
        await fastify.listen({port:port,host:'0.0.0.0'});
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start();