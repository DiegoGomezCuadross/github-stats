import { tokenKey } from "../config";
import githubClient from "./github-client";

export async function createUser(userData) {
  const { token, ...user } = await githubClient("/signup", {
    body: userData,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function getUser() {
  const { token, ...user } = await githubClient("/profile");

  return user;
}
