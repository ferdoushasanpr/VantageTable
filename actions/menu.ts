"use server";

export const menuSubmitHandler = async (formData: FormData) => {
  const name = formData.get("name");
  const cat = formData.get("category");
  const price = formData.get("price");
  const desc = formData.get("desc");
  const image = formData.get("image");
  const status = formData.get("status");

  console.log({ name, cat, price, desc, image, status });
};
