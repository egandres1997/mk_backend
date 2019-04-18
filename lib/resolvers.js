'use strict'

module.exports = {
  Query: {
    async getUsers () {
      return [{
        id: 1,
        name: "José"
      }, {
        id: 2,
        name: "Pedro"
      }]
    }
  },
  Mutation: {
    async userAdd (_, { input }) {
      return [{
        id: 3,
        name: "Andrea"
      }]
    }
  }
}