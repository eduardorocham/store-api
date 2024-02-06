const { Op } = require("sequelize");

const Controller = require("./Controller.js");
const CustomersService = require("../services/CustomersService.js");

const customerService = new CustomersService();

class CustumersController extends Controller {
  constructor() {
    super(customerService, "customer");
  }

  async getCustomers(req, res, next) {
    const { name, email, start_created_date, end_created_date } = req.query;

    const where = {};

    if (name) {
      where.name = {
        [Op.like]: `%${name}%`,
      };
    }

    if (email) {
      where.email = {
        [Op.like]: `%${email}%`,
      };
    }

    if (start_created_date || end_created_date) where.createdAt = {};
    if (start_created_date) where.createdAt[Op.gte] = start_created_date;
    if (end_created_date) where.createdAt[Op.lte] = end_created_date;

    try {
      const customersList = await customerService.getAllRegisters(where);
      return res.status(200).json(customersList);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CustumersController;
