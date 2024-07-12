import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

/* ---------------------- Cloudinary file configuration --------------------- */

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/* --------------------- Uploaded file on the cloudinary -------------------- */
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    /** Upload the file on the Cloudinary */
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    /** File has been uploaded successfully */
    console.log(`[INFO] The image was uploaded to Cloudinary ${response.url}`);
    return response;
  } catch (error) {
    /** Remove the locally saved temporary file as the upload operation got failed */
    fs.unlink(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
