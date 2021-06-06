
const stampRepository = require("../repositories/StampRepository");
const awsHelper = require("../helper/AwsHelper");

module.exports.getAll = function () {
  return stampRepository.getAll();
};

module.exports.saveStamp = function (body) {
  if (!body.name) {
    return Promise.reject({ statusCode: 400, message: "'name' field is required" });
  }
  if (!body.image) {
    return Promise.reject({ statusCode: 400, message: "'image' field is required" });
  }

  const imageInBase64 = body.image;
  const imageName = body.name.replace(/ /g,"_");

  return awsHelper.S3SaveImage(imageName, imageInBase64)
    .then((path) => {
      const newStamp = {
        name: body.name,
        image: path
      };
      return stampRepository.saveStamp(newStamp);
    });
};

module.exports.deleteStamp = function (body) {
  let name = body.name;
  if (name) {
    const newStamp = {
      name: body.name
    };
    return stampRepository.deleteStamp(newStamp).then((deletedStamp) => {
      if (deletedStamp) {
        return awsHelper.S3DeleteImage(deletedStamp.image);
      } else {
        return Promise.reject({ statusCode: 400, message: "Stamp not found" });
      }
    });
  } else {
    return Promise.reject({ statusCode: 400, message: "'name' field is required" });
  }
};