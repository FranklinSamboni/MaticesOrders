
const sizeRepository = require("../repositories/SizeRepository");

module.exports.getAvailableSizes = function () {
  return sizeRepository.getAll();
};

module.exports.saveSize = function (body) {
  let name = body.name;
  if (name) {
    const newSize = {
      name: body.name
    };
    return sizeRepository.saveSize(newSize);
  } else {
    return Promise.reject({statusCode: 400, message: "'name' field is required"});
  }
};

module.exports.deleteSize = function (body) {
  let name = body.name;
  if (name) {
    const newSize = {
      name: body.name
    };
    return sizeRepository.deleteSize(newSize);
  } else {
    return Promise.reject({statusCode: 400, message: "'name' field is required"});
  }
};