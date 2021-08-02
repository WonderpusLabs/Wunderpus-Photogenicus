const path = require('path');
const { model } = require('mongoose');
const meals = require('../models/models.js');
const addToMealController = {};

// https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/
// Assumptions: what the meal ID will be called and also that we will actually use a meal id. Please feel free to adjust as necessary
// Note: By default, MongoDB generates a unique ObjectID identifier that is assigned to the _id field in a new document before writing that document to the database
    // this may be how we get the meal id?

addToMealController.addtoMeal = async (req,res,next) => {
    const filter = { mealId: req.query._id }
    const update = { meal: [foodsToAddToMeal] }
    
    model.Meal.findOneandUpdate(filter, update, { new: true; });
} 
