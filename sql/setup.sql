-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS authors;

CREATE TABLE authors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  books INT NOT NULL
);

INSERT INTO
  authors (first_name, last_name, books)
VALUES
  ('Tessa', 'Bailey', 52),
  ('Brianna', 'Wiest', 6), 
  ('Colleen', 'Hoover', 22),
  ('Siri', 'Pettersen', 4),
  ('Christina', 'Lauren', 29),
  ('Kevin', 'Kwan', 4);

DROP TABLE IF EXISTS books;

CREATE TABLE books (
 id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 title VARCHAR NOT NULL,
 genre VARCHAR NOT NULL
);

INSERT INTO 
  books (title, genre)
VALUES
  ('Fix Her Up', 'Romance'),
  ('Love Her or Lose Her', 'Romance'),
  ('Hook, Line, and Sinker', 'Romance'), 
  ('The Mountain Is You', 'Nonfiction'),
  ('101 Essays That Will Change The Way You Think', 'Nonfiction'),
  ('It Ends With Us', 'Romance'),
  ('Ugly Love', 'Romance'),
  ('Odins Child', 'Fantasy'),
  ('Iron Wolf', 'Fantasy'),
  ('The Unhoneymooners', 'Romance'),
  ('Josh And Hazels Guide To Not Dating', 'Romance'),
  ('Crazy Rich Asians', 'Fiction');

DROP TABLE IF EXISTS authors_books;

CREATE TABLE authors_books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    author_id BIGINT,
    book_id BIGINT,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);

INSERT INTO authors_books (author_id, book_id)
VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (2, 4),
  (2, 5),
  (3, 6),
  (3, 7),
  (4, 8),
  (4, 9),
  (5, 10),
  (5, 11),
  (6, 12);
