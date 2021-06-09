
const stampRepository = require("../repositories/StampRepository");
const awsHelper = require("../helper/AwsHelper");

module.exports.getAll = function () {
  return stampRepository.getAll();
};

module.exports.createStamp = function (body) {
  if (!body.name) {
    return Promise.reject({ statusCode: 400, message: "'name' field is required" });
  }
  if (!body.imageBase64) {
    return Promise.reject({ statusCode: 400, message: "'imageBase64' field is required" });
  }

  const imageInBase64 = body.imageBase64;
  const imageName = body.name.replace(/ /g,"_");

  return awsHelper.S3SaveImage(imageName, imageInBase64)
    .then((path) => {
      const newStamp = {
        name: body.name,
        image: path
      };
      return stampRepository.createStamp(newStamp);
    });
};

module.exports.updateStamp = async function (body) {
  if (!body._id) {
    return Promise.reject({ statusCode: 400, message: "'_id' field is required" });
  }
  if (!body.name) {
    return Promise.reject({ statusCode: 400, message: "'name' field is required" });
  }

  var update = {};
  update._id = body._id;
  update.name = body.name;

  try {
    // Update first just name
    var response = await stampRepository.updateStamp(update);

    if (body.imageBase64) {
      update.imageBase64 = body.imageBase64;
  
      const imageInBase64 = update.imageBase64;
      const imageName = update.name.replace(/ /g,"_");
  
      var oldStamp = await stampRepository.getById(update._id);

      var newImagePath = await awsHelper.S3SaveImage(imageName, imageInBase64);
      update.image = newImagePath;
      response = await stampRepository.updateStamp(update);

      var deleteResponse = await awsHelper.S3DeleteImage(oldStamp.image);
    }
    return response;
  } catch(e) {
    return Promise.reject(e);
  }
  
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