-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS crud_db;
USE crud_db;

-- Crear la tabla de productos
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertar algunos productos de ejemplo
INSERT INTO products (title, description, price) VALUES
('Laptop HP', 'Laptop HP Pavilion con procesador Intel i5, 8GB RAM, 256GB SSD', 899.99),
('Monitor Dell', 'Monitor Dell 27" Full HD 1080p IPS', 299.99),
('Teclado Mecánico', 'Teclado mecánico RGB con switches Cherry MX', 129.99),
('Mouse Gaming', 'Mouse gaming con sensor óptico y 6 botones programables', 49.99);