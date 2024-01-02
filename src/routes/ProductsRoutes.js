const { Router } = require('express');
const ProductsController = require('../controllers/ProductsController.js');

const productsController = new ProductsController();

const router = Router();

router.get('/products', (req, res) => productsController.getAll(req, res));
router.get('/products/:id', (req, res, next) => productsController.getOneById(req, res, next));
router.post('/products', (req, res) => productsController.createNew(req, res));
router.put('/products/:id', (req, res) => productsController.update(req, res));
router.delete('/products/:id', (req, res) => productsController.delete(req, res));

module.exports = router;