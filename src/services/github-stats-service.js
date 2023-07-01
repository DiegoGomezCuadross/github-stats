const BASE_URI = "https://api.github.com/users/";

export function getUser(query) {
  console.log(BASE_URI + query.toLowerCase());
  return fetch(BASE_URI + query.toLowerCase()).then((response) =>
    response.json()
  );
}

export function getUserFollowers(query) {
  console.log(BASE_URI + query.toLowerCase());
  return fetch(BASE_URI + query.toLowerCase() + "/followers").then((response) =>
    response.json()
  );
}

export function getUserFollowings(query) {
  console.log(BASE_URI + query.toLowerCase());
  return fetch(BASE_URI + query.toLowerCase() + "/followings").then(
    (response) => response.json()
  );
}

export function getUserRepos(query) {
  console.log(BASE_URI + query.toLowerCase());
  return fetch(BASE_URI + query.toLowerCase() + "/repos").then((response) =>
    response.json()
  );
}
