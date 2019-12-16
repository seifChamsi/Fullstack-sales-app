const express = require('express');
const bodyParser = require('body-parser');
const stuffRoutes = require('./routes/stuffRoute');
const userRoutes = require('./routes/userRoute');
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Routes mounting
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);




module.exports = app;