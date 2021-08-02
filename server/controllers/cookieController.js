const path = require('path');
const { model } = require('mongoose');

const User = require('../models/userModel');

const cookieController = {};

// setSSIDCookie - store the user id in a cookie
cookieController.setSSIDCookie = async (req, res, next) => {
  try {
    await User.findOne({ username: res.locals.uid }, (req, user) => {
      // create a cookie named 'ssid' with a value that is equal to the id of the user - mongoose creates an id for each user - method to get the id of the user 
      res.cookie('ssid', user._id.id, { httpOnly: true });
      return next();
    })
  } catch (err) {
    return next({ log: err, message: err });
  }

}

module.exports = cookieController;
