-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS authors CASCADE;

CREATE TABLE authors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL,
  dob DATE,
  pob VARCHAR
);

INSERT INTO
  authors (name, dob, pob)
VALUES
  ('Tessa Bailey', '1989-10-12', 'Carlsbad'),
  ('Brianna Wiest', '1992-10-11', 'New York'), 
  ('Colleen Hoover', '1979-12-11', 'Sulphur Springs'),
  ('Siri Pettersen', '1971-10-28', 'Finnsnes'),
  ('Kevin Kwan', '1973-11-8', 'Singapore');

DROP TABLE IF EXISTS books CASCADE;

CREATE TABLE books (
 id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 title VARCHAR NOT NULL,
 released INT NOT NULL
);

INSERT INTO 
  books (title, released)
VALUES
  ('Fix Her Up', 2019),
  ('Love Her or Lose Her', 2020),
  ('Hook, Line, and Sinker', 2022), 
  ('The Mountain Is You', 2020),
  ('101 Essays That Will Change The Way You Think', 2016),
  ('It Ends With Us', 2016),
  ('Ugly Love', 2014),
  ('Odins Child', 2021),
  ('Iron Wolf', 2023),
  ('Crazy Rich Asians', 2013);

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
  (5, 10);
