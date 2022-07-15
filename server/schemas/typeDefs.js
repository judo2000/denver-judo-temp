const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Page {
    _id: ID
    pageTitle: String
    content: String
  }

  type Query {
    pages: [Page!]!
    page(pageTitle: String): Page
  }
  type Mutation {
    addPage(pageTitle: String!, content: String!): Page
  }
`;

module.exports = typeDefs;
