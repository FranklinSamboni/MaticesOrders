
const phoneCodeRepository = require("../repositories/PhoneCodeRepository");

module.exports.getPhoneCodes = function () {
  return phoneCodeRepository.getAll();
};

module.exports.savePhoneCode = function (body) {
  let code = body.code;
  if (code) {
    const phoneCode = {
        code: body.code
    };
    return phoneCodeRepository.savePhoneCode(phoneCode);
  } else {
    return Promise.reject({statusCode: 400, message: "'code' field is required"});
  }
};

module.exports.deletePhoneCode = function (body) {
  let code = body.code;
  if (code) {
    const phoneCode = {
        code: body.code
    };
    return phoneCodeRepository.deletePhoneCode(phoneCode);
  } else {
    return Promise.reject({statusCode: 400, message: "'code' field is required"});
  }
};