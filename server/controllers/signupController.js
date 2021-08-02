const path = require('path');
const { model } = require('mongoose');

const { User } = require('../models/models');

const signupController = {};

signupController.addNewUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(username)
    console.log(password)
    if (username && password) {
      await User.create({
        username,
        password
      });

      res.locals.uid = username

      return next();
    }
  } catch (err) {
    console.log(err)
    return next({
      log: `error in the signupController addUser: ${err}`,
      message: { err: 'Error occured in signupController addUser' }
    })
  }
}
module.exports = signupController;
