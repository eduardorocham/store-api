const Controller = require("./Controller.js");
const CustomersService = require("../services/CustomersService.js");

const customerService = new CustomersService();

class CustumersController extends Controller {
  constructor() {
    super(customerService, "customer");
  }

  async getCustomers(req, res, next) {
    const { name, email, start_created_date, end_created_date } = req.query;
  }
}

module.exports = CustumersController;
