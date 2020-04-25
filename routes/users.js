const express = require('express');

//instância do router
const router = express.Router();

// import e instância da controler
const Users = require('../controller/Users');
const usersController = new Users();

router.get('/:id', (usersController.get));

module.exports = router;