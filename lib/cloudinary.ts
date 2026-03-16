import { v2 as cloudinary } from "cloudinary";

if (!process.env.CLOUDINARY_CLOUD_NAME) {
  throw new Error("CLOUDINARY_CLOUD_NAME is not set");
}

if (!process.env.CLOUDINARY_API_KEY) {
  throw new Error("CLOUDINARY_API_KEY is not set");
}

if (!process.env.CLOUDINARY_SECRET_KEY) {
  throw new Error("CLOUDINARY_SECRET_KEY is not set");
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

export const uploadImage = async (image: File) => {
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const mime = image.type;
  const encoding = "base64";

  const base64 = buffer.toString(encoding);
  const dataURI = `data:${mime};${encoding},${base64}`;
  const result = await cloudinary.uploader.upload(dataURI, {
    folder: "menu_images",
  });

  return { secure_url: result.secure_url, public_id: result.public_id };
};
