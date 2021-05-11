const config = require('../_config/AppProperties').config();
const mongoose = require('mongoose');
const logger = require('winston');
mongoose.Promise = global.Promise;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

/* DATABASE CONNECTION */
function createEvents(){
    mongoose.connection.on('connected', function () {
        logger.log('info', 'Successful connection to db');
    });

    mongoose.connection.on('error', function (err) {
        logger.log('warn', 'There was an error while connection to db', err);
    });

    mongoose.connection.on('disconnected', function () {
        logger.log('warn', 'DB was disconnected');
    });
}

function connectToDatabase() {
    if (mongoose.connection.readyState == 1) {
        return Promise.resolve();
    }

    createEvents();
    return mongoose.connect(config.DB.MONGO_URI,  { useNewUrlParser: true })
        .then(
            () => {logger.log('info', 'connected new database') },
            err => { logger.log('warn', 'error connecting to database', err) }
        );
}

function disconnect() {
    mongoose.disconnect();
}

module.exports = {
    connectToDatabase,
    disconnect
}