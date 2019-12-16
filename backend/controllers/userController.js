const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signup = async (req, res, next) => {

    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        await User.create({
            email: req.body.email,
            password: hash
        })

        res.status(200).json({
            message: 'User added successfully!'
        });
    } catch (error) {
        res.status(500).json({
            message: `there is something wrong ${error}`
        })
    }



};

const login = (req, res, next) => {
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (!user) {
            return res.status(401).json({
                error: new Error("User not found")
            })
        }

        bcrypt.compare(req.body.password, user.password).then(valid => {
            if (!valid) {
                return res.status(401).json({
                    error: new Error("Password doesn't match")
                })
            }
        });
        const token = jwt.sign({
            userId: user.id
        }, 'TOKEN_SECRET', {
            expiresIn: '24h'
        })
        res.status(200).json({
            userId: user._id,
            token: token
        }).catch(err => {
            res.status(500).json({
                error: err
            })
        })
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
}

module.exports = {
    login,
    signup
}