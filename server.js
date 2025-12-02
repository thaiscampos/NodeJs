//import { createServer} from 'node:http'

//const server = createServer((request, response)=>{
//  console.log('Olá')

//return response.end()
//})

//server.listen(3333)

///video : https://www.youtube.com/watch?v=hHM-hr9q4mo

// ESM
import Fastify from "fastify";
import { DatabaseMemory } from "./database-memory.js";
import { DatabasePostgres } from "./database-postgres.js";

const server = Fastify({
  logger: true,
});

//Request Body

const db = new DatabasePostgres();
//rest client - Extensao
server.post("/videos", async function (request, reply) {
  const { titulo, descricao, duracao } = request.body;

  await db.create({
    titulo: titulo,
    descricao: descricao,
    duracao: duracao,
  });

  return reply.status(201).send();
});

// Declare a route
server.get("/videos", (request) => {
  const search = request.query.search;

  const videos = db.list(search);
  console.log(videos);
  return videos;
});

server.put("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;
  const { titulo, descricao, duracao } = request.body;
  await db.update(videoId, {
    titulo,
    descricao,
    duracao,
  });
  return reply.status(204).send();
});
///deletar video
server.delete("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;
  await db.delete(videoId);

  return reply.status(204).send();
});
// Run the server!
server.listen(
  { host: "0.0.0.0", port: process.env.PORT ?? 3333 },
  function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    // Server is now listening on ${address}
  }
);
