//import { createServer} from 'node:http'

//const server = createServer((request, response)=>{
  //  console.log('Olá')

    //return response.end()
//})

//server.listen(3333)




// ESM
import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})


// Declare a route
fastify.get('/', function (request, reply) {
  reply.send(console.log('Thais'))
})
fastify.get('/Home', function (request, reply) {
  reply.send(console.log('Home'))
})

// Run the server!
fastify.listen({ port: 3333 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})