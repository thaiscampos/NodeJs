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

const server = Fastify({
  logger: true,
});

//Request Body

const db = new DatabaseMemory();
//rest client - Extensao
server.post("/videos", function (request, reply) {
  const { titulo, descricao, duracao } = request.body;

  db.create({
    titulo: titulo,
    descricao: descricao,
    duracao: duracao,
  });

  return reply.status(201).send();
});

// Declare a route
server.get("/videos", (request, reply) => {
  const videos = db.list();
  console.log(videos);
  return videos;
});

server.put("/videos/:id", (request, reply) => {
  const videoId = request.params.id;
  const { titulo, descricao, duracao } = request.body;
  db.update(videoId, {
    titulo,
    descricao,
    duracao,
  });
  return reply.status(204).send();
});

server.delete("/videos/:id", (request, reply) => {
  const videoId = request.params.id;
  db.delete(videoId);

  return reply.status(204).send();
});
// Run the server!
server.listen({ port: 3333 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
