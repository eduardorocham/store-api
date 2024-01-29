const Controller = require("./Controller.js");
const OrderService = require("../services/OrdersService.js");

const orderService = new OrderService();

class OrdersController extends Controller {
  constructor() {
    super(orderService, "order");
  }
}

module.exports = OrdersController;
