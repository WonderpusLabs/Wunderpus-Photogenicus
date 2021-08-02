const express = require('express');
const router = express.Router();

const signupController = require('../controllers/signupController')
const cookieController = require('../controllers/cookieController')
const loginController = require('../controllers/loginController')
const searchController = require('../controllers/loginController')


router.post('/signup', signupController.addNewUser, cookieController.setSSIDCookie, (req, res) => {
  return res.sendStatus(200);
});


router.post('/login', loginController.verifyUser, cookieController.setSSIDCookie, (req, res) => {
  return res.sendStatus(200);
});

router.post('/search', searchController.searchFood, (req, res) => {
  return res.status(200).json(res.locals.foodSearch);
});

module.exports = router;