const express = require('express');

//instância do router
const router = express.Router();

// import e instância da controler
const Auth = require('../controller/Auth');
const authController = new Auth();

router.post('/', authController.validate);

module.exports = router;