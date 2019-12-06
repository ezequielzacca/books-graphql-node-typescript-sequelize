import { gql } from "apollo-server-express";

export const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    id: ID!
    title: String!
    author: Author!
    genre: Genre!
  }

  type Genre {
    id: ID!
    name: String!
  }

  type Author {
    id: ID!
    name: String!
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
    genres: [Genre]
    authors: [Genre]
  }
`;
