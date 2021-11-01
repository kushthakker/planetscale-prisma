const AWS = require("aws-sdk");

export default async function handler(req, res) {
  const { filename } = req.query;
  console.log(filename);
  AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION_NEXT,
    signatureVersion: "v4",
  });
  const s3 = new AWS.S3();

  function getObject(bucket, objectKey) {
    try {
      const params = {
        Bucket: bucket,
        Key: objectKey,
      };

      const data = s3.getObject(params).createReadStream();
      data.pipe(res);
    } catch (e) {
      return console.error(e.message);
    }
  }
  const data = getObject("galaxeye-problem-1", `test/img/${filename}`);
  return res.status(200);
}
