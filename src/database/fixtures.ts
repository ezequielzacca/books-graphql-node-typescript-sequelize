import { Book, Author, Genre } from "./../models/models";
export const loadFixtures = async () => {
  Book.destroy({ where: {} });
  Author.destroy({ where: {} });
  Genre.destroy({ where: {} });

  const names = ["Ezequiel", "Matias", "Francisco", "Rafael", "David"];
  const lastNames = ["Gonzales", "Fernandez", "Perez", "Gomez"];
  let savedAuthors: any[] = [];
  for (let i = 1; i <= 10; i++) {
    const authorName = names[randomBetween(0, names.length - 1)];
    const author = new Author({
      name: authorName
    });
    const saved = await author.save();
    savedAuthors.push(saved);
  }

  let savedGenres: any[] = [];
  const genres = ["Comedy", "Drama", "Horror", "Sci-Fi", "Romance"];
  for (let i = 0; i < genres.length; i++) {
    const genre = new Genre({
      name: genres[i]
    });
    const saved = await genre.save();
    savedGenres.push(saved);
  }

  const books = [
    "In Search of Lost Time",
    "Ulysses",
    "Don Quixote",
    "The Great Gatsby",
    "Moby Dick"
  ];
  for (let i = 0; i < books.length; i++) {
    const book = new Book({
      title: books[i],
      authorId: savedAuthors[randomBetween(0, savedAuthors.length - 1)].id,
      genreId: savedGenres[randomBetween(0, savedGenres.length - 1)].id
    });
    await book.save();
  }
};

export const randomBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};
