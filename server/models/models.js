const mongoose = require('mongoose');
const dotenv = require('dotenv');
const MONGO_URI = process.env.db_uri
mongoose
.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Food',
})
.then(() => console.log('Connected to Mongo DB.'))
.catch((err) => console.log(err));

const Schema = mongoose.Schema;

const MealSchema = new Schema({
    foods:[FoodSchema],
    date: {type: Date, default: Date.now},
});
const Meal = mongoose.model('meal', MealSchema);

const FoodSchema = new Schema({
    foodName: String,
    fats: {type: Number, required: true},
    carbs: {type: Number, required: true},
    protein: {type: Number, required: true},
    calories: {type: Number, required: true}
});
const Food = mongoose.model('food', FoodSchema);


module.exports = {
    Meal,
    Food,
};