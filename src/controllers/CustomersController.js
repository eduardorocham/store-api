const { Op } = require("sequelize");

const Controller = require("./Controller.js");
const CustomersService = require("../services/CustomersService.js");

const customerService = new CustomersService();

class CustumersController extends Controller {
  constructor() {
    super(customerService, "customer");
  }

  async getCustomers(req, res, next) {
    const { page, limit, name, email, start_created_date, end_created_date } =
      req.query;

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

    const pageNumber = page ? Number(page) : 1;
    const limitNumber = limit ? Number(limit) : 10;

    try {
      const customersCount = await customerService.getCountRegisters();

      let lastPage = 1;

      if (customersCount > 0) {
        lastPage = Math.ceil(customersCount / limit);
      } else {
        return res.status(200).json({ message: "there is no record " });
      }

      const customersList = await customerService.getAllRegisters(
        where,
        pageNumber,
        limitNumber
      );

      const pagination = {
        count: customersCount,
        page: pageNumber,
        prevPage: pageNumber - 1 >= 1 ? pageNumber - 1 : null,
        nextPage: pageNumber + 1 <= lastPage ? pageNumber + 1 : null,
        lastPage: lastPage,
        result: customersList,
      };

      return res.status(200).json(pagination);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CustumersController;
