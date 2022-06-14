-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR NOT NULL,
  released INT NOT NULL
);

INSERT INTO books (
  title,
  released
)

VALUES 
  ('Where The Wild Things Are', 2009),
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