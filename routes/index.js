const express = require('express');

// instância do router
const router = express.Router();

// rotas
const users = require('./users');

// rotas base
router.use('/users', users);

module.exports = router;