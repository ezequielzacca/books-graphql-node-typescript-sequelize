import { sequelize } from "../database/database.init";
import { Model, INTEGER, STRING, BuildOptions } from "sequelize";

export const initializeDB = async () => {
  Author.hasMany(Book, {
    as: "books"
  });
  Book.belongsTo(Author, {
    as: "author",
    foreignKey: "id"
  });
  Genre.hasMany(Book, {
    as: "books"
  });
  Book.belongsTo(Genre, {
    as: "genre",
    foreignKey: "id"
  });
  await Author.sync();
  await Genre.sync();
  await Book.sync();
};

export interface IBook {
  readonly id: number;
  genreId: number;
  authorId: number;
}

// Need to declare the static model so `findOne` etc. use correct types.
type BookStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IBook;
};

// TS can't derive a proper class definition from a `.define` call, therefor we need to cast here.
export const Book = <BookStatic>sequelize.define("book", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER
  },
  title: {
    type: STRING
  }
});

export interface IGenre {
  readonly id: number;
}

// Need to declare the static model so `findOne` etc. use correct types.
type GenreStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IGenre;
};

// TS can't derive a proper class definition from a `.define` call, therefor we need to cast here.
export const Genre = <GenreStatic>sequelize.define("genre", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER
  },
  name: {
    type: STRING
  }
});

export interface IAuthor {
  readonly id: number;
}

// Need to declare the static model so `findOne` etc. use correct types.
type AuthorStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IAuthor;
};

// TS can't derive a proper class definition from a `.define` call, therefor we need to cast here.
export const Author = <GenreStatic>sequelize.define("author", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER
  },
  name: {
    type: STRING
  }
});
