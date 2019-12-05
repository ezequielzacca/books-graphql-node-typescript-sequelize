import { sequelize } from "../database/database.init";
import { Model, STRING, TEXT, NUMBER } from "sequelize";
export class Book extends Model {}
Book.init(
  {
    id: { type: NUMBER, autoIncrement: true, primaryKey: true },
    title: STRING
  },
  { sequelize, modelName: "books" }
);

export class Genre extends Model {}
Genre.init(
  {
    id: { type: NUMBER, autoIncrement: true, primaryKey: true },
    name: STRING
  },
  { sequelize, modelName: "genres" }
);

export class Author extends Model {}
Genre.init(
  {
    id: { type: NUMBER, autoIncrement: true, primaryKey: true },
    name: STRING
  },
  { sequelize, modelName: "authors" }
);
