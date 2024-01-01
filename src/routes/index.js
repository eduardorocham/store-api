const express = require('express');
const customersRoutes = require('./CustomersRoutes.js');

module.exports = (app) => {
  app.use(
    express.json(),
    customersRoutes
  );
};