import cloudinary from "../config/cloudinary.js";

const uploadToCloudinary = (
    fileBuffer,
    options = {}
) => {
    return new Promise((resolve, reject) => {
        const uploadStream =
            cloudinary.uploader.upload_stream(
                options,
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );

        uploadStream.end(fileBuffer);
    });
};

export default uploadToCloudinary;