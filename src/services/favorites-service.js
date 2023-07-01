import githubClient from "./github-client";

export async function createFavorite(data) {
  return await githubClient("/favorites", { body: data });
}

export async function removeFavorite(id) {
  return await githubClient("/favorites/" + id, { method: "DELETE" });
}

export async function getFavorites() {
  return await githubClient("/favorites");
}
