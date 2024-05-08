const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

// Middleware para el parsing del body
app.use(bodyParser.json());

// Rutas para productos
const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : undefined;
    // Implementación para listar todos los productos
});

productsRouter.get('/:pid', (req, res) => {

    const productId = req.params.pid;
    // Implementación para obtener un producto por su id
});

productsRouter.post('/', (req, res) => {

    // Implementación para agregar un nuevo producto
});

productsRouter.put('/:pid', (req, res) => {
    // Implementación para actualizar un producto
});

productsRouter.delete('/:pid', (req, res) => {
    // Implementación para eliminar un producto
});

// Rutas para carritos
const cartsRouter = express.Router();

cartsRouter.post('/', (req, res) => {
    // Implementación para crear un nuevo carrito
});

cartsRouter.get('/:cid', (req, res) => {
    // Implementación para listar los productos de un carrito
});

cartsRouter.post('/:cid/product/:pid', (req, res) => {
    // Implementación para agregar un producto a un carrito
});

// Montar los routers en las rutas correspondientes
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
