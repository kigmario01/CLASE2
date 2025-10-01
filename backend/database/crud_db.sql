-- Eliminar la base de datos si existe para empezar desde cero
DROP DATABASE IF EXISTS crud_db;

-- Crear la base de datos
CREATE DATABASE crud_db;

-- Seleccionar la base de datos
USE crud_db;

-- Crear la tabla de productos
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL COMMENT 'Nombre del producto',
    description TEXT COMMENT 'Descripción detallada del producto',
    price DECIMAL(10, 2) NOT NULL COMMENT 'Precio del producto',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de creación',
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Fecha de última actualización'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Tabla de productos del CRUD';

-- Insertar datos de ejemplo
INSERT INTO products (title, description, price) VALUES 
    ('Laptop Lenovo ThinkPad', 'Laptop profesional con procesador Intel i7, 16GB RAM, 512GB SSD', 1299.99),
    ('Monitor Samsung', 'Monitor curvo 32" 4K HDR', 499.99),
    ('Teclado Logitech MX Keys', 'Teclado inalámbrico premium con retroiluminación', 119.99),
    ('Mouse Logitech MX Master 3', 'Mouse ergonómico inalámbrico profesional', 99.99),
    ('Audífonos Sony WH-1000XM4', 'Audífonos inalámbricos con cancelación de ruido', 349.99);

-- Crear un índice para búsquedas por título
CREATE INDEX idx_product_title ON products(title);

-- Crear un usuario específico para la aplicación (opcional, comentado por seguridad)
-- CREATE USER 'crud_user'@'localhost' IDENTIFIED BY 'crud_password';
-- GRANT ALL PRIVILEGES ON crud_db.* TO 'crud_user'@'localhost';
-- FLUSH PRIVILEGES;

-- Mostrar la estructura de la tabla
DESCRIBE products;

-- Mostrar los productos insertados
SELECT * FROM products;