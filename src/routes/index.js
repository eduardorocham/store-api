const express = require("express");
const customersRoutes = require("./CustomersRoutes.js");
const categoriesRoutes = require("./CategoriesRoutes.js");
const productsRoutes = require("./ProductsRoutes.js");
const ordersRoutes = require("./OrdersRoutes.js");
const orderItemsRoutes = require("./OrderItemsRoutes.js");

module.exports = (app) => {
  app.use(
    express.json(),
    customersRoutes,
    categoriesRoutes,
    productsRoutes,
    ordersRoutes,
    orderItemsRoutes
  );
};
