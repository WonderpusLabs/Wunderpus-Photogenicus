const express = require('express');
const router = express.Router();

const signupController = require('../controllers/signupController')
const cookieController = require('../controllers/cookieController')


router.post('/signup', signupController.addNewUser, cookieController.setSSIDCookie, (req, res) => {
  res.sendStatus(200);
});


module.exports = router;