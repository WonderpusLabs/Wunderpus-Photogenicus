const path = require('path');
const { model } = require('mongoose');
const meals = require('../models/models.js');
const addToMealController = {};

addToMealController.addtoMeal = async (req,res,next) => {
    model.Meal.find
} 