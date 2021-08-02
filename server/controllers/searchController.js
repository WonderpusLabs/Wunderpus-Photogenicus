const { model } = require('mongoose');
const { Food } = require('../models/models');


const searchController = {};

searchController.searchFood = async (req, res, next) => {
  try {
    console.log(req.body)
    const name = req.body.searchTerm;
    const foodDoc = await Food.findOne({ product_name: name });
    res.locals.foodSearch = foodDoc;
    return next();
  } catch (err) {
    return next({
      log: `searchController.searchFood: error ${err}`,
      message: { err: 'Error occured in searchController.searchFood' }
    });
  }
}

module.exports = searchController;
