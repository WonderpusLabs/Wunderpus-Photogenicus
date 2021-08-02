const express = require('express');
const loginRouter = express.Router();

const loginController = require('../controllers/loginController')
const cookieController = require('../controllers/cookieController')

loginRouter.get('/', loginController.verifyUser, cookieController.setSSIDCookie, (req, res) => {
  if (res.locals.uid) {
    res.redirect('/main')
  } else {
    res.redirect('/signup')
  }
});

module.exports = loginRouter;
