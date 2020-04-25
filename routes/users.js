const express = require('express');

//instância do router
const router = express.Router();

// instância do middleware
const verifyToken = require('../middlewares/verifyToken');

// import e instância da controler
const Users = require('../controller/Users');
const usersController = new Users();

router.get('/:id', verifyToken, (usersController.get));
router.post('/', verifyToken, (usersController.create));
router.delete('/:id', verifyToken, (usersController.delete));

module.exports = router;