import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const history = useHistory();

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', {
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
        <form onSubmit={saveProduct}>
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
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;