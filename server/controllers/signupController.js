const path = require('path');
const { model } = require('mongoose');

const User = require('../models/userModel');

const signupController = {};

signupController.addNewUser = (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (username && password) {
      // await User.create({username, password});
      res.locals.uid = username
      return next();
    }
  } catch (err) {
    return next({
      log: 'error in the signupController addUser',
      message: {err: 'Error occured in signupController addUser'}
    })
  }
}
module.exports = signupController;
