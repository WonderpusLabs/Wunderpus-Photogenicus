const path = require('path');
const { model } = require('mongoose');
const meals = require('../models/models.js');
const addToMealController = {};


// Phil comment - to find a meal within the meal model would we need to have a unique identifier for the meal?
addToMealController.addtoMeal = async (req,res,next) => {
    model.Meal.find
} 
