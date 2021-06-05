const PhoneCode = require("../models/PhoneCode");

module.exports.getAll = function(){
    return PhoneCode.find({});
};

module.exports.getByCode = function(code) {
    return PhoneCode.findOne({ code: code });
};

module.exports.savePhoneCode = function (phoneCode) {
    var query = { code: phoneCode.code };
    var update = { code : phoneCode.code };
    var options = { upsert: true };
    return PhoneCode.findOneAndUpdate(query, update, options);
};

module.exports.deletePhoneCode = function (phoneCode) {
    var query = { code: phoneCode.code };
    return PhoneCode.findOneAndDelete(query);
};
