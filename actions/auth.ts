"use server";

import { redirect } from "next/navigation";

export const authActionHandler = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (email === "admin@restaurant.com" && password === "admin123") {
    redirect("/dashboard");
  } else {
    throw new Error("Invalid email or password");
  }
};
