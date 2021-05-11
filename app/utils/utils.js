
function successResponse(res, data) {
    var response = {
        statusCode: 200,
        data: data,
    };

    res.status(response.statusCode).send(response);
}


function errorResponse(res, error) {
    var response = {
        statusCode: error.statusCode || 501,
        error: error.message || 'Internal server error',
    };

    res.status(response.statusCode).send(response);
}

module.exports = {
    successResponse,
    errorResponse
}