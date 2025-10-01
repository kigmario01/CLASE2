const db = require("../models");
const Product = db.products;

// Crear y guardar un nuevo producto
exports.create = (req, res) => {
  // Validar request
  if (!req.body.title) {
    res.status(400).send({
      message: "El título no puede estar vacío!"
    });
    return;
  }

  // Crear un producto
  const product = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price
  };

  // Guardar producto en la base de datos
  Product.create(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear el producto."
      });
    });
};

// Obtener todos los productos
exports.findAll = (req, res) => {
  Product.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al obtener los productos."
      });
    });
};

// Encontrar un producto por id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No se encontró el producto con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al obtener el producto con id=" + id
      });
    });
};

// Actualizar un producto
exports.update = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Producto actualizado exitosamente."
        });
      } else {
        res.send({
          message: `No se pudo actualizar el producto con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al actualizar el producto con id=" + id
      });
    });
};

// Eliminar un producto
exports.delete = (req, res) => {
  const id = req.params.id;

  Product.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Producto eliminado exitosamente!"
        });
      } else {
        res.send({
          message: `No se pudo eliminar el producto con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo eliminar el producto con id=" + id
      });
    });
};