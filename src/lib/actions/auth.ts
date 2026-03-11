"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { loginSchema, LoginInput } from "../validations/auth";

export async function loginAction(data: LoginInput) {
  const result = loginSchema.safeParse(data);
  if (!result.success) return { error: "Validation failed" };

  // Mock checking (admin@example.com / password123)
  if (data.email === "admin@example.com" && data.password === "password123") {
    (await cookies()).set("session", "secure-user-token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
    redirect("/dashboard");
  }

  return { error: "Invalid email or password" };
}

/**
 * Logout Action
 * Deletes the session cookie and redirects the user to the login page.
 */
export async function logoutAction() {
  // 1. Access the cookies store
  const cookieStore = await cookies();

  // 2. Delete the session cookie (ensure the name matches your login cookie)
  cookieStore.delete("session");

  // 3. Redirect to login page
  redirect("/login");
}