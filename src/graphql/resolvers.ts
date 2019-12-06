import { Book } from "./../models/models";

export const resolvers = {
  Query: {
    books: async () => await Book.findAll()
  }
};
