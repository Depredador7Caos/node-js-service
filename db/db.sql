CREATE DATABASE IF NOT EXISTS usersdb;

USE usersdb;

/* creation table of users */
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
);

SELECT * FROM users;

/* creation table of clients */
CREATE TABLE clients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) DEFAULT NULL,
    email VARCHAR(255) DEFAULT NULL,
    password VARCHAR(10) DEFAULT NULL,
    PRIMARY KEY (id) 
);

SELECT * FROM clients;

/* Creation table productos */
CREATE TABLE productos(
    product_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) DEFAULT NULL,
    url VARCHAR(255) DEFAULT NULL,
    precio INTEGER(255) DEFAULT NULL,
    cantidad INTEGER(255) DEFAULT NULL,
    categoria VARCHAR (255) DEFAULT NULL,
    PRIMARY KEY (product_id)
);
SELECT * FROM productos;

