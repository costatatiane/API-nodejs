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

// rota 404
router.use('*', (_, res) => res.status(404).send('Error 404 - Not found'));

module.exports = router;