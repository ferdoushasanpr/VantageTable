"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

type LoginFormState = {
  error?: string;
};

export const loginHandler = async (
  prevState: LoginFormState,
  formData: FormData,
) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { ...prevState, error: "Email and password are required" };
  }

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const cookieStore = await cookies();
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 2,
      path: "/",
    });
    redirect("/dashboard");
  } else {
    return { ...prevState, error: "Invalid email or password" };
  }
};

export const logoutHandler = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/");
};
