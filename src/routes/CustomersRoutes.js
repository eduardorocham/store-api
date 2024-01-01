const { Router } = require('express');
const CustomersController = require('../controllers/CustomersController.js');

const customersController = new CustomersController();

const router = Router();

router.get('/customers', (req, res) => customersController.getAll(req, res));

module.exports = router;