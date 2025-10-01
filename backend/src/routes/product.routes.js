const router = require("express").Router();
const products = require("../controllers/product.controller.js");

// Crear un nuevo producto
router.post("/", products.create);

// Obtener todos los productos
router.get("/", products.findAll);

// Obtener un producto por id
router.get("/:id", products.findOne);

// Actualizar un producto
router.put("/:id", products.update);

// Eliminar un producto
router.delete("/:id", products.delete);

module.exports = router;