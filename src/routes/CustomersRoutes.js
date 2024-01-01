const { Router } = require('express');
const CustomersController = require('../controllers/CustomersController.js');

const customersController = new CustomersController();

const router = Router();

router.get('/customers', (req, res) => customersController.getAll(req, res));
router.get('/customers/:id', (req, res) => customersController.getOneById(req, res));
router.post('/customers', (req, res) => customersController.createNew(req, res));
router.put('/customers/:id', (req, res) => customersController.update(req, res));

module.exports = router;