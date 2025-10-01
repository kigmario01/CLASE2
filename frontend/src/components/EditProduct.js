import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EditProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/api/products/${id}`);
    setTitle(response.data.title);
    setDescription(response.data.description);
    setPrice(response.data.price);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, {
        title,
        description,
        price: parseFloat(price),
      });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={updateProduct}>
          <div className="field">
            <label className="label">Título</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Título del producto"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Descripción</label>
            <div className="control">
              <textarea
                className="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descripción del producto"
              ></textarea>
            </div>
          </div>

          <div className="field">
            <label className="label">Precio</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Precio del producto"
                step="0.01"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-primary">
                Actualizar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;