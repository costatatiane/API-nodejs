const express = require('express');

// instância do router
const router = express.Router();

// rotas
const users = require('./users');
const auth = require('./auth');

// rotas base
router.use('/users', users);
router.use('/auth', auth);

module.exports = router;