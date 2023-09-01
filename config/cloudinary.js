const cloudinary = require("cloudinary").v2;
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_SECRET } =
  process.env;

const cloudinaryConfig = () => {
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_SECRET,
  });

  // Test Cloudinary connection
  /* cloudinary.api.ping((error, result) => {
    if (error) {
      console.error("Could not connect to Cloudinary:", error);
    } else {
      console.log("Successfully connected to Cloudinary:", result);
    }
  }); */
};

module.exports = cloudinaryConfig;
