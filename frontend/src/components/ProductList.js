import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get('http://localhost:5000/api/products');
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-multiline">
      {products.map((product) => (
        <div className="column is-one-quarter" key={product.id}>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Precio: ${product.price}</p>
              </div>
            </div>
            <footer className="card-footer">
              <Link to={`edit/${product.id}`} className="card-footer-item">
                Editar
              </Link>
              <a
                onClick={() => deleteProduct(product.id)}
                className="card-footer-item"
              >
                Eliminar
              </a>
            </footer>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;