const express = require('express');
const Item = require('../models/item');
const itemController = require('../controllers/stuffController');

const router = express.Router();

router
    .route('/')
    .get(itemController.getAllitems)
    .post(itemController.createItem)


router
    .route('/:id')
    .get(itemController.getOneItem)
    .put(itemController.updateItem)
    .delete(itemController.deleteItem)

module.exports = router