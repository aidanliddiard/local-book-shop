-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS authors_books;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

CREATE TABLE books (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR NOT NULL,
  released INT NOT NULL
);

CREATE TABLE authors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL,
  dob VARCHAR,
  pob VARCHAR
);

CREATE TABLE authors_books (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  author_id BIGINT,
  book_id BIGINT,
  FOREIGN KEY (author_id) REFERENCES authors(id),
  FOREIGN KEY (book_id) REFERENCES books(id) 
);


INSERT INTO books (
  title,
  released
)

VALUES 
  ('Where the Wild Things Are', 1963),
  ('Goodnight Moon', 1947),
  ('The Very Hungry Caterpillar', 1969),
  ('Dream Big, Little One', 2018),
  ('Chicka Chicka Boom Boom', 2012),
  ('If You Take a Mouse to School', 2002),
  ('No, David!', 1998),
  ('If You Give a Moose a Muffin', 1991),
  ('One Love', 2011),
  ('Fry Bread: A Native American Family Story', 2019),
  ('Green Eggs and Ham', 1960),
  ('The GayBCs', 2019),
  ('Beautfiful Oops', 2010),
  ('When Aidan Became a Brother', 2019),
  ('If you Give a Mouse a Cookie', 1985),
  ('Frank Was a Monster Who Wanted to Dance', 1999);

  INSERT INTO authors (
    name, 
    dob,
    pob
  )

  VALUES 
  ('Laura Numeroff', '1953-07-14', 'Brooklyn, New York'),
  ('Maurice Sendak', '1928-06-10', 'Brooklyn, New York'),
  ('Eric Carle', '1929-06-25', 'Syracuse, NY'),
  ('Vashti Harrison', NULL, 'Onley, VA'),
  ('Margaret Wise Brown', '1910-05-23', 'Brooklyn, New York'),
  ('Bill Martin, Jr.', '1916-03-20', 'Hiawatha, KS'),
  ('John Archambault', NULL, 'Pasadena, CA'),
  ('David Shannon', '1959-10-05', 'Washington, D.C.'),
  ('Cedella Marley', '1967-08-23', 'Kingston, Jamaica'),
  ('Kevin Noble Maillard', NULL, NULL),
  ('Dr. Seuss', '1904-03-02', 'Springfield, MA'),
  ('M. L. Webb', NULL, NULL),
  ('Barney Saltzberg', '1955-04-30', NULL),
  ('Kyle Lukoff', '1984-06-05', 'Skokie, IL'),
  ('Keith Graves', NULL, 'New Orleans, LA');

  INSERT INTO authors_books (
    author_id,
    book_id
  )
  VALUES 
  (1, 6),
  (1, 8),
  (1, 15),
  (2, 1),
  (3, 3),
  (4, 4),
  (5, 2),
  (6, 5),
  (7, 5),
  (8, 7),
  (9, 9),
  (10, 10),
  (11, 11),
  (12, 12),
  (13, 13),
  (14, 14),
  (15, 16)
