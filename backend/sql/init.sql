CREATE DATABASE elsofeladat
COLLATE utf8_hungarian_ci
DEFAULT CHARACTER SET utf8;

CREATE TABLE konyv (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    cim VARCHAR(255) NOT NULL,
    szerzo VARCHAR(255) NOT NULL,
    kiado VARCHAR(255) NOT NULL,
    kiadas INT NOT NULL,
    oldalak INT NOT NULL,
    mufaj VARCHAR(255) NOT NULL,
    ar INT NOT NULL
)

INSERT INTO konyv (cim, szerzo, kiado, kiadas, oldalak, mufaj, ar) VALUES
('A Gyűrűk Ura', 'J.R.R. Tolkien', 'Könyvmolyképző Kiadó', 1954, 1178, 'Fantasy', 3999),
('Harry Potter és a Bölcsek Köve', 'J.K. Rowling', 'Animus Kiadó', 1997, 223, 'Fantasy', 2999),
('A Szél Keresztje', 'Patrick Rothfuss', 'Gabo Kiadó', 2007, 662, 'Fantasy', 3499),
('A Hobbit', 'J.R.R. Tolkien', 'Könyvmolyképző Kiadó', 1937, 310, 'Fantasy', 2499),
('A Gyűrű Szövetsége', 'J.R.R. Tolkien', 'Könyvmolyképző Kiadó', 1954, 423, 'Fantasy', 2999),
('A Két Torony', 'J.R.R. Tolkien', 'Könyvmolyképző Kiadó', 1954, 352, 'Fantasy', 2999),
('A Király Visszatér', 'J.R.R. Tolkien', 'Könyvmolyképző Kiadó', 1955, 416, 'Fantasy', 2999);

CREATE DATABASE masodikfeladat
COLLATE utf8_hungarian_ci
DEFAULT CHARACTER SET utf8;

CREATE TABLE auto (
    
)