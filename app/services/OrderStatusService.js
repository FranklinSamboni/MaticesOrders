
const orderStatusRepository = require("../repositories/OrderStatusRepository");

module.exports.getOrderStatus = function () {
  return orderStatusRepository.getAll();
};

module.exports.saveOrderStatus = function (body) {
  let name = body.name;
  if (name) {
    const orderStatus = {
      name: body.name
    };
    return orderStatusRepository.saveOrderStatus(orderStatus);
  } else {
    return Promise.reject({statusCode: 400, message: "'name' field is required"});
  }
};

module.exports.deleteOrderStatus = function (body) {
  let name = body.name;
  if (name) {
    const orderStatus = {
      name: body.name
    };
    return orderStatusRepository.deleteOrderStatus(orderStatus);
  } else {
    return Promise.reject({statusCode: 400, message: "'name' field is required"});
  }
};