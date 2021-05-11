const logger = require('winston');
const profile = process.env.SFC_APP_PROFILE || 'development';

if (process.env.NODE_ENV === 'local') {
	require('dotenv').config()
}

function getConfigFromEnviroment(){
    return {
            "DB": {
                "MONGO_URI": process.env.MONGO_URI ||  ""
            }
        };
}

var props = getConfigFromEnviroment();

exports.config = function() {
    return props;
};