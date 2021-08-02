const { model } = require('mongoose');
const { Food } = require('../models/models');


const searchController = {};

searchController.searchFood = (req, res, next) => {
  try {
    const name = req.body;
    const foodDoc = await.Food.findOne({ product_name: name });
    res.locals.foodSearch = foodDoc;
    return next();
  } catch (err) {
    return next({
      log:`searchController.searchFood: error ${err}`,
      message: { err: 'Error occured in searchController.searchFood' }
    });
  }
}

module.exports = searchController;