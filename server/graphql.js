const { buildSchema } = require('graphql')
const db = [
  {"title": "Yoga", "buttonOn": false, "addInput": false},
  {"title": "Code", "buttonOn": false, "addInput": false},
  {"title": "Read", "buttonOn": false, "addInput": false},
  {"title": "Water", "buttonOn": false, "addInput": true},
  {"title": "Notes", "buttonOn": false, "addInput": true},
  {"title": "Food", "buttonOn": false, "addInput": true},
  {"title": "Drink", "buttonOn": false, "addInput": false},
  {"title": "Cigs", "buttonOn": false, "addInput": false},
  {"title": "Meds", "buttonOn": false, "addInput": false}
]

module.exports = {
  buildSchema: buildSchema(`
  type Input {
    title: String!
    buttonOn: Boolean
    addInput: Boolean
  }

  type RootQuery {
    inputs: [Input!]!
    }
    schema {
      query: RootQuery
    }
  `),
  resolvers: {
    inputs: () => db
  }
}
