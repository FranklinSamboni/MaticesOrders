
const colorRepository = require("../repositories/ColorRepository");

module.exports.getColors = function () {
  return colorRepository.getAll();
};

module.exports.saveColor = function (body) {
  let name = body.name;
  if (name) {
    const color = {
      name: body.name
    };
    return colorRepository.saveColor(color);
  } else {
    return Promise.reject({statusCode: 400, message: "'name' field is required"});
  }
};

module.exports.deleteColor = function (body) {
  let name = body.name;
  if (name) {
    const color = {
      name: body.name
    };
    return colorRepository.deleteColor(color);
  } else {
    return Promise.reject({statusCode: 400, message: "'name' field is required"});
  }
};