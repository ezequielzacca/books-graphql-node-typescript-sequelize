import { Book, Genre, Author } from "./../models/models";

export const resolvers = {
  Query: {
    books: async () => {
      return await Book.findAll({
        include: [
          { model: Genre, as: "genre" },
          { model: Author, as: "author" }
        ]
      });
    }
  }
};
