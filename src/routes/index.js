const express = require('express');
const customersRoutes = require('./CustomersRoutes.js');
const categoriesRoutes = require('./CategoriesRoutes.js');

module.exports = (app) => {
  app.use(
    express.json(),
    customersRoutes,
    categoriesRoutes
  );
};