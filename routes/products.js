const express = require('express');

//instância do router
const router = express.Router();

// instância do middleware
const verifyToken = require('../middlewares/verifyToken');

// import e instância da controler
const Products = require('../controller/Products');
const productsController = new Products();

router.get('/:id', verifyToken, (productsController.get));
router.post('/', verifyToken, (productsController.create));
router.put('/:id', verifyToken, (productsController.update));
router.delete('/:id', verifyToken, (productsController.delete));

module.exports = router;