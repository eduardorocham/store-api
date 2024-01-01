const Controller = require('./Controller.js');
const CustomersService = require('../services/CustomersService.js');

const customerService = new CustomersService();

class CustumersController extends Controller {
  constructor() {
    super(customerService);
  }
}

module.exports = CustumersController;