const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
    'path': `config.env`
})

const db = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to your Database");
}).catch((err) => {
    console.log("there is an error to connect to your Database");
    throw err
})
const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port))
        return val;
    if (port >= 0)
        return port;
    return false;
}

const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};


const PORT = normalizePort(process.env.PORT || 3000);

const server = app.listen(PORT, '127.0.0.1');
server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : `${PORT}`
    console.log(`[+]The app is listening on ${bind}`);
});