const Controller = require("./Controller.js");
const OrderItemsService = require("../services/OrdersItemsService.js");

const orderItemsService = new OrderItemsService();

class OrdersItemsController extends Controller {
  constructor() {
    super(orderItemsService, "order item");
  }

  async getOrdersItems(req, res, next) {
    const { order_id } = req.query;

    const where = {};

    if (order_id) where.order_id = order_id;

    try {
      const ordersItemsList = await orderItemsService.getAllRegisters(where);
      return res.status(200).json(ordersItemsList);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OrdersItemsController;
