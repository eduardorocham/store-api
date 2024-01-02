const Controller = require('./Controller.js');
const CategoriesService = require('../services/CategoriesService.js');

const categoriesService = new CategoriesService();

class CategoriesController extends Controller {
  constructor() {
    super(categoriesService, 'category');
  }
}

module.exports = CategoriesController;