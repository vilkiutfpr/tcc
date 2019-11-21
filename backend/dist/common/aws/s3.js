"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
let s3 = null;
const uploadFile = (params) => {
    return new Promise((res, rej) => {
        let newParams = Object.assign({ Bucket: process.env.AWS_BUCKET_NAME, ContentEncoding: 'base64' }, params, { ACL: 'public-read' });
        s3.instance.upload(newParams, function (err, data) {
            if (err) {
                throw rej(err);
            }
            res({ url: data.Location });
        });
    });
};
const S3GetInstance = () => {
    if (!s3) {
        return constructor();
    }
    return s3;
};
exports.S3GetInstance = S3GetInstance;
const constructor = () => {
    const instance = new aws_sdk_1.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
    s3 = {
        instance,
        uploadFile,
    };
    return s3;
};
//# sourceMappingURL=s3.js.map