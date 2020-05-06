const express = require('express');

// instância do router
const router = express.Router();

// rotas
const users = require('./users');
const auth = require('./auth');
const products = require('./products');

// rotas base
router.use('/users', users);
router.use('/auth', auth);
router.use('/products', products);

module.exports = router;