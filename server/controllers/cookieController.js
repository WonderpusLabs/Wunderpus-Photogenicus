const path = require('path');
const { model } = require('mongoose');

const User = require('../models/userModel');

const cookieController = {};

// setSSIDCookie - store the user id in a cookie
cookieController.setSSIDCookie = async (req, res, next) => {
  try {
    await User.findOne({username: res.locals.uid}, (req, user) => {
      res.cookie('ssid', user._id.id, {httpOnly: true});
      return next();
    })
  } catch (err) {
    return next(err);
  }
  
}

module.exports = cookieController;
