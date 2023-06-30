import { tokenKey } from "../config";
import githubClient from "./github-client";

export async function login(credentials) {
  const { token, ...user } = await githubClient("/login", {
    body: credentials,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function logout() {
  await githubClient("/logout", { method: "DELETE" });
}
