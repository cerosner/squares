const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const { buildSchema, resolvers } = require('./graphql')

const PORT = 8080
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Static middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// API
app.use('/graphql', graphqlHttp({
  schema: buildSchema,
  rootValue: resolvers,
  graphiql: true
}))

// For all GET requests that aren't to an API route, we will send the index.html!
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

// Handle 404s
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handling endware
app.use((err, req, res) => {
  res.status(err.status || 500)
  res.send(err.message || 'Internal server error')
})

app.listen(PORT, () => {
  console.log(`>> i'm listening l(*‿*✿)/`)
  console.log(`>> http://localhost:${PORT}`)
})
