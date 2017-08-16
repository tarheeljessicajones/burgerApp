CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(45) NOT NULL,
  devoured boolean NOT NULL,
  _date TIMESTAMP NOT NULL,
  primary key(id)
);

-- DROP TABLE burgers;