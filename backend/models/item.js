const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }

})

const item = mongoose.model('item', itemSchema);

module.exports = item;