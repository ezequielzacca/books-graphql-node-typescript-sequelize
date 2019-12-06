import {
  Book,
  Genre,
  Author,
  IBook,
  IGenre,
  IAuthor
} from "./../models/models";

export const resolvers = {
  Query: {
    books: async () => await Book.findAll(),
    genres: async () => await Genre.findAll(),
    authors: async () => await Author.findAll()
  },
  Book: {
    genre: async (parent: IBook) => Genre.findByPk(parent.genreId),
    author: async (parent: IBook) => Author.findByPk(parent.authorId)
  },
  Genre: {
    books: async (parent: IGenre) =>
      Book.findAll({ where: { genreId: parent.id } })
  },
  Author: {
    books: async (parent: IAuthor) =>
      Book.findAll({ where: { authorId: parent.id } })
  }
};
