const path = require('path');
const { model } = require('mongoose');

const User = require('../models/userModel');

const loginController = {};

longinController.verifyUser = async (req, res, next) => {
  // write code here
  try {
    const {username, password} = req.body;
    //console.log(pass);
    await User.findOne({username}, (req, user) => {
      if (user.password === password) {
        res.locals.uid = username;
      }
      return next();
    })
  } catch (err) {
    return next(err);
  }
};

module.exports = loginController;
