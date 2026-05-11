"use server";

import { deleteImage, uploadImage } from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import slugify from "slugify";

export const menuSubmitHandler = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const cat = formData.get("category") as string;
  const price = formData.get("price") as string;
  const desc = formData.get("desc") as string;
  const image = formData.get("image") as File;
  const status = formData.get("status") as string;

  if (!name || !cat || !price || !desc || !status) {
    throw new Error("All fields are required");
  }

  if (name.trim().length < 3 || name.trim().length > 100) {
    throw new Error("Name must be between 3 and 100 characters");
  }

  if (cat.trim().length < 2) {
    throw new Error("Category is invalid");
  }

  const parsedPrice = Number(price);

  if (isNaN(parsedPrice) || parsedPrice <= 0) {
    throw new Error("Price must be a valid positive number");
  }

  if (desc.trim().length < 10) {
    throw new Error("Description must be at least 10 characters");
  }

  if (!image || image.size === 0) {
    throw new Error("Image is required");
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

  if (!allowedTypes.includes(image.type)) {
    throw new Error("Image must be JPG, PNG, or WEBP");
  }

  const maxSize = 2 * 1024 * 1024;

  if (image.size > maxSize) {
    throw new Error("Image must be smaller than 2MB");
  }

  if (status !== "true" && status !== "false") {
    throw new Error("Invalid status value");
  }

  const slug = slugify(name.toLowerCase(), { strict: true });

  const imageUrl = await uploadImage(image);

  await prisma.food.create({
    data: {
      name: name.trim(),
      cat: cat.trim(),
      price: parsedPrice,
      desc: desc.trim(),
      slug,
      image: imageUrl.secure_url,
      image_public_id: imageUrl.public_id,
      status: status === "true",
    },
  });

  revalidatePath("/menulist");

  redirect("/menulist");
};

export const fetchMenu = async () => {
  const menus = await prisma.food.findMany();

  return menus;
};

export const fetchMenuBySlug = async (slug: string) => {
  const menu = await prisma.food.findFirst({
    where: { slug },
  });

  return menu;
};

export const getCountFoods = async () => {
  const totalFoods = await prisma.food.count();

  return totalFoods.toString();
};

export const deleteMenu = async (id: number) => {
  const food = await prisma.food.delete({
    where: { id },
  });

  if (food.image_public_id) {
    await deleteImage(food.image_public_id);
  }

  revalidatePath("/menulist");

  return food;
};

export const fetchMenuById = async (id: string) => {
  const parsedId = parseInt(id);

  if (isNaN(parsedId)) {
    throw new Error("Invalid id");
  }

  const food = await prisma.food.findFirst({
    where: { id: parsedId },
  });

  return food;
};
