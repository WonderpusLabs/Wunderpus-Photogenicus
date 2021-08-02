const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URI = process.env.db_uri
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
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



const FoodItemSchema = new Schema({
  product_name: String,
  protein: String,
  carbs: String,
  fiber: String,
  sodium: String,
  fats: String,
  score: String,
  sugar: String,
  calories: String
});
const Food = mongoose.model('FoodItem', FoodItemSchema, 'FoodItem');


const MealSchema = new Schema({
  foods: [FoodItemSchema],
  date: { type: Date, default: Date.now },
});
const Meal = mongoose.model('meal', MealSchema);

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.pre('save', function (next) {
  const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
  const hash = bcrypt.hashSync(this.password, salt);
  this.password = hash;
  return next();
})

const User = mongoose.model('user', userSchema);

module.exports = {
  Meal,
  Food,
  User,

};
