const Controller = require("./Controller.js");
const OrderItemsService = require("../services/OrdersItemsService.js");

const orderItemsService = new OrderItemsService();

class OrdersItemsController extends Controller {
  constructor() {
    super(orderItemsService, "order item");
  }
}

module.exports = OrdersItemsController;
