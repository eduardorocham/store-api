const Controller = require("./Controller.js");
const OrderService = require("../services/OrdersService.js");

const orderService = new OrderService();

class OrdersController extends Controller {
  constructor() {
    super(orderService, "order");
  }

  async getOrders(req, res, next) {
    const { customer_id } = req.query;

    const where = {};

    if (customer_id) where.customer_id = customer_id;

    try {
      const ordersList = await orderService.getAllRegisters(where);
      return res.status(200).json(ordersList);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OrdersController;
