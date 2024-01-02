const express = require('express');
const customersRoutes = require('./CustomersRoutes.js');
const categoriesRoutes = require('./CategoriesRoutes.js');
const productsRoutes = require('./ProductsRoutes.js');

module.exports = (app) => {
  app.use(
    express.json(),
    customersRoutes,
    categoriesRoutes,
    productsRoutes
  );
};