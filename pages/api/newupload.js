import process from "node:process";

import cloudinary from "cloudinary";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export default async function handler(request, response) {
  switch (request.method) {
    case "POST":
      await new Promise((resolve, reject) => {
        const form = formidable({});
        form.parse(request, async (error, fields, files) => {
          if (error) {
            reject(error);
          } else {
            const { file } = files;
            const { newFilename, filepath } = file;
            const result = await cloudinary.v2.uploader.upload(filepath, {
              resource_type: "raw",
              public_id: newFilename,
            });
            console.log("API: response from cloudinary: ", result);
            response.status(201).json(result);
            resolve();
          }
        });
      });
      break;
    default:
      response.status(400).json({ message: "Method not implemented" });
      break;
  }
}
