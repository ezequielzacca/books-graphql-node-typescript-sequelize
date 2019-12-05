import { gql } from "apollo-server-express";

export const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    id: ID!
    title: String!
  }

  type Genre {
    id: ID!
    name: String!
  }

  type Author {
    id: ID!
    name: String!
  }

  input BookInput {
    title: String!
  }

  input BookUpdateInput {
    title: String
  }

  input GenreInput {
    name: String!
  }

  input GenreUpdateInput {
    name: String
  }

  input AuthorInput {
    name: String!
  }

  input AuthorUpdateInput {
    name: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
    genres: [Genre]
    authors: [Genre]
  }

  type Mutation {
    createBook(book: BookInput): Book!
    updateBook(id: ID!, book: BookUpdateInput!): Book!
    createGenre(genre: GenreInput): Genre!
    updateGenre(id: ID!, genre: GenreUpdateInput!): Genre!
    createAuthor(author: AuthorInput): Author!
    updateAuthor(id: ID!, author: AuthorUpdateInput!): Author!
  }
`;
