const express = require('express');
const signupRouter = express.Router();

const signupController = require('../controllers/signupController')
const cookieController = require('../controllers/cookieController')


signupRouter.post('/', signupController.addNewUser, cookieController.setSSIDCookie, (req, res) => {
  res.redirect('/main');
});

module.exports = signupRouter;
