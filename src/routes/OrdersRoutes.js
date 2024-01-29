const { Router } = require("express");
const OrdersController = require("../controllers/OrdersController.js");

const ordersController = new OrdersController();

const router = Router();

router.get("/orders", (req, res) => ordersController.getAll(req, res));
router.get("/orders/:id", (req, res) => ordersController.getOneById(req, res));
router.post("/orders", (req, res) => ordersController.createNew(req, res));
router.put("/orders/:id", (req, res) => ordersController.update(req, res));
router.delete("/orders/:id", (req, res) => ordersController.delete(req, res));

module.exports = router;
