import fastify from "fastify";



const server = fastify({ logger: true });




import cacheRoutes from "./routes/cache.route";

import acceptedRoles from "./plugins/acceptedRoles";

module.exports = class Application {
  constructor() {
    this.start();
  }

  async setup() {
    
    await this.setUpAuth();
    
   
    await this.setupFastify();
   
    
  }
  async start() {
    await this.setup();
    this.StartServer();
  }

 

  StartServer() {
   
    const port = Number(process.env.APPPORT) || 4003;

    

    server.listen({ host: "0.0.0.0", port: port }, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    });

    
  }

  setupFastify() {
    server.get("/ping", async (request, reply) => {
      // return 'pong\n'
      

      reply.send({
        mesage: "pong",
      });
    });

    server.register(cacheRoutes, { prefix: "v1" });
    
    console.log('setupFastify');
  }





  

  setUpAuth() {
    server.register(acceptedRoles);
    

    
    console.log('setUpAuth');
  }
};
