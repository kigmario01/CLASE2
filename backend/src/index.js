const express = require('express');
const cors = require('cors');
const db = require('./models');
const productRoutes = require('./routes/product.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/products', productRoutes);

// Sincronizar base de datos
db.sequelize.sync().then(() => {
  console.log("Base de datos sincronizada");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});