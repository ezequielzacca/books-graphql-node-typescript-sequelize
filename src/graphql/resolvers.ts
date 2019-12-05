import { Book } from "./../models/models";

export const resolvers = {
  Query: {
    books: Book.findAll()
  }
};
