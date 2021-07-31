const express = require('express');
const loginRouter = express.Router();

const loginController = require('../controllers/loginController')

loginRouter.get('/', (req, res) => {

});

module.exports = loginRouter;