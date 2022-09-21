SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS webstore;

USE webstore;

CREATE TABLE books (
    ID INT(11) NOT NULL AUTO_INCREMENT,
    TITLE VARCHAR(150) NOT NULL,
    DESCRIPTION_BOOK VARCHAR(255) NOT NULL,
    COVER_BOOK VARCHAR(255) NOT NULL,
    PRIMARY KEY (ID)
);

DESCRIBE books;

INSERT INTO books (ID, TITLE, DESCRIPTION_BOOK, COVER_BOOK) VALUES (1, "Dios es bueno", "Dios mio cuida a esta gran familia y a todos los seres vivos del planeta amen", "https://img.freepik.com/vector-gratis/ascension-resurreccion-dia-hijo-dios_23-2148544395.jpg?w=2000");

SELECT * FROM books;