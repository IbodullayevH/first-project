CREATE DATABASE project_1;
-- connect the database
\c project_1;
-- create table users
CREATE TABLE registred_users(
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(50),
    userName VARCHAR(30),
    email VARCHAR(50),
    password TEXT
);

CREATE TABLE site_users (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE unit_price (
    id SERIAL PRIMARY KEY,
    unit_name VARCHAR(30)
);

CREATE TABLE categorys (
    id SERIAL PRIMARY KEY,
    category_name TEXT,
    img TEXT
);
INSERT INTO categorys(category_name, img) VALUES('Sitruslar', 'https://www.uzreport.news/fotobank/image/b39a7aef49f0245c93b953b04c330d91.jpeg');


CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name TEXT,
    price INT ,
    unit_p INT REFERENCES unit_price(id),
    product_desc TEXT,
    category_id INT REFERENCES categorys(id),
    count_u_id INT REFERENCES unit_count(id),
    basa_count INT,
    img TEXT
);

CREATE TABLE unit_count (
    id SERIAL PRIMARY KEY,
    unit_name VARCHAR(30)
);


