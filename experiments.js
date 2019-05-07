const fastify = require('./fastify')({
  logger: true,
  querystringParser: () => {},
  trustProxy: address => address === '127.0.0.1',
  requestIdLogLabel: 'ReqId',
  bodyLimit: 1048590
})

const HOST = '0.0.0.0'
const PORT = 4000

fastify.get('/', (req, res) => {
  let time = new Date().toLocaleString()
  res.send({
    time
  })
})

fastify.listen(PORT, HOST, err => {
  if (err) throw err
  console.log(`Server Running on, http://${HOST}:${PORT}`)
})
