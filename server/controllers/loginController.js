const path = require('path');
const { model } = require('mongoose');

const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const User = require('../models/userModel');

const loginController = {};

loginController.verifyUser = async (req, res, next) => {
  // write code here
  try {
    const { username, password } = req.body;
    //console.log(pass);
    await User.findOne({ username }, async (req, user) => {
      const correctPassword = await bcrypt.compare(password, user.password)
      if (correctPassword) {
        res.locals.uid = username;
      }
      return next();
    })
  } catch (err) {
    return next(err);
  }
};

module.exports = loginController;
