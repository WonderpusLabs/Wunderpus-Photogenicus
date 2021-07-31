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

const addMealSchema = new Schema({
    name: {type: String, required: true},
    foods:[foodSchema],
    date: {type: Date, default: Date.now},
});
const addMeal = mongoose.model('meal', addMealSchema);

const addFoodSchema = new Schema({
    foodName: String,
    fats: {type: Number, required: true},
    carbs: {type: Number, required: true},
    protein: {type: Number, required: true},
    calories: {type: Number, required: true}
});
const addFood = mongoose.model('food', addFoodSchema);

const createUserSchema = new Schema ({
    uid: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});
const createUser = mongoose.model('user', createUserSchema);

module.exports = {
    addMeal,
    addFood,
    createUser
};