const express = require('express');
const router = express.Router();

const signupController = require('../controllers/signupController')
const cookieController = require('../controllers/cookieController')
const loginController = require('../controllers/loginController')


router.post('/signup', signupController.addNewUser, cookieController.setSSIDCookie, (req, res) => {
  res.sendStatus(200);
});


router.post('/login', loginController.verifyUser, cookieController.setSSIDCookie, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;