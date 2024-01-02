const { Router } = require('express');
const CategoriesController = require('../controllers/CategoriesController.js');

const categoriesController = new CategoriesController();

const router = Router();

router.get('/categories', (req, res) => categoriesController.getAll(req, res));
router.get('/categories/:id', (req, res, next) => categoriesController.getOneById(req, res, next));
router.post('/categories', (req, res) => categoriesController.createNew(req, res));
router.put('/categories/:id', (req, res) => categoriesController.update(req, res));
router.delete('/categories/:id', (req, res) => categoriesController.delete(req, res));

module.exports = router;