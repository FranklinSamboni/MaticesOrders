
const AWS = require('aws-sdk');
const FileType = require('file-type');

AWS.config.update({ region: "us-east-1" });

var bucketName = "wordpress-media-matices";
var folder = "images/estampados/";

module.exports.S3SaveImage = async function (imageName, imageBase64) {
    var s3 = new AWS.S3({ apiVersion: '2006-03-01' });

    const buffer = Buffer.from(imageBase64, 'base64');
    const fileType = await FileType.fromBuffer(buffer);

    if (!fileType) {
        return Promise.reject({ statusCode: 400, message: "'image' field format is not supporte, be sure is just base64 image" })
    }

    const date = Date.now();
    const fileName = `${folder}${imageName}_${date}.${fileType.ext}`;

    const paramsS3Bucket = {
        Bucket: bucketName,
        Body: buffer,
        Key: fileName,
        ContentType: fileType.mime,
        ContentEncoding: 'base64'
    };

    var bucketPromise = s3.createBucket({ Bucket: bucketName }).promise();
    return bucketPromise.then((createResponse) => {
        var uploadPromise = s3.putObject(paramsS3Bucket).promise();
        return uploadPromise;

    }).then((putResponse) => {
        console.log("Successfully uploaded data to " + bucketName + "/" + fileName);
        var path = fileName
        return path;
    });
}

module.exports.S3DeleteImage = async function (imageName) {
    var s3 = new AWS.S3({ apiVersion: '2006-03-01' });

    const paramsS3Bucket = {
        Bucket: bucketName,
        Key: imageName
    };

    var deletePromise = s3.deleteObject(paramsS3Bucket).promise();
    return deletePromise;
}

/*
AWS.config.getCredentials(function(err) {
    if (err) console.log(err.stack);

    else {
      console.log("Access key:", AWS.config.credentials.accessKeyId);
    }
  });*/