const express = require('express');
const router = express.Router();

const products = require('../controllers/products.controllers');

router.post('/login', products.createUser);
router.get('/allproducts', products.getInit_data);
router.post('/updateproducts', products.actualizar);

module.exports = router;