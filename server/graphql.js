const Input = require('./models/input')

module.exports = {
  schema: `
    type Input {
      _id: ID!
      title: String!
      emoji: String!
      buttonOn: Boolean!
      addInput: Boolean!
    }

    type RootQuery {
      inputs: [Input!]!
    }

    schema {
      query: RootQuery
    }
  `,
  resolvers: {
    inputs: () => {
      return Input.find()
    }
  }
}
