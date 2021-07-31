const path = require('path');
const { model } = require('mongoose');
const createFood = require('../models/models.js');
const addFoodController = {};

addFoodController.addFood = async (req, res, next) => {
    try {
        const cal = (req.body.fats * 9) + (req.body.carbs * 4) + (req.body.protein * 4);
        createFood.model.create({
            foodName: req.body.foodName,
            fats: req.body.fats,
            carbs: req.body.carbohydrates,
            protein: req.body.protein,
            calories: cal
        });  
        return (next);
    } catch (err) {
        return err;
    };
};

module.exports(addFoodController);