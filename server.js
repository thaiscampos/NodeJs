//import { createServer} from 'node:http'

//const server = createServer((request, response)=>{
  //  console.log('Olá')

    //return response.end()
//})

//server.listen(3333)




// ESM
import Fastify from 'fastify'

const server = Fastify({
  logger: true
})


// Declare a route
server.get('/', function (request, reply) {
  reply.send(console.log('Thais'))
})
server.post('/video', function (request, reply) {
  reply.send({nome: "Thais"})
})

server.put('/videos/:id',()=>{
  return 'Hello World'
})
// Run the server!
server.listen({ port: 3333 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})