const Item = require('../models/item');

const createItem = (req, res, next) => {
    const item = new Item({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userId: req.body.userId
    });
    item.save().then(() => {
        res.status(201).json({
            message: 'Item saved successfully!'
        })
    }).catch((err) => {
        res.status(400).json({
            error: err
        })
    })
}

const getAllitems = (req, res, next) => {
    Item.find().then((items) => {
        res.status(200).json(items);
    }).catch((err) => {
        error: err
    })
}

const getOneItem = (req, res, next) => {
    Item.findOne({
        _id: req.params.id
    }).then(
        (item) => {
            res.status(200).json(item)
        }
    ).catch((err) => {
        res.status(404).json({
            error: err
        });
    });
}

const updateItem = (req, res, next) => {
    const item = {
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userId: req.body.userId
    }
    Item.updateOne({
        id: req.params.id
    }, item).then(
        () => {
            res.status(201).json({
                message: 'item updadated successfully'
            })
        }
    ).catch(
        err => {
            res.status(400).json({
                error: err
            })
        }
    )
}

const deleteItem = (req, res, next) => {
    Thing.deleteOne({
        _id: req.params.id
    }).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

module.exports = {
    createItem,
    getAllitems,
    getOneItem,
    updateItem,
    deleteItem
}