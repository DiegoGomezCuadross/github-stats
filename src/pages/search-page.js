import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../components/input";
import UserData from "../components/user-data";
import { getUser } from "../services/github-stats-service";

function SearchPage({ favorites, onAddFavorite, onRemoveFavorite }) {
  const [query, setQuery] = useState("");

  const [state, setState] = useState({
    status: "idle", // idle = inactive // success // error // pending
    data: null,
    error: null,
  });

  const { status, data: user, error } = state;

  const isFavorite = Boolean(
    favorites.find((fav) => fav.user_name === user?.name)
  );

  function handleSubmit(event) {
    event.preventDefault();
    setState({ status: "pending", data: null, error: null });

    getUser(query)
      .then((data) => {
        setState({ status: "success", data, error: null });
      })
      .catch((_error) => {
        setState({
          status: "error",
          data: null,
          error: "El usuario no existe! intente de nuevo",
        });
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name="query"
          placeholder="username"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button>Search</button>
      </form>
      {status === "pending" && "Loading..."}
      {status === "idle" && "Ready to search"}
      {status === "success" && (
        <UserData
          user={user}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
          isFavorite={isFavorite}
        />
      )}
      {status === "error" && <p style={{ color: "red" }}>{error}</p>}

      <Link to="/profile">Go to Profile</Link>
      <Link to="/search">Go to Search</Link>
      <Link to="/favorites">Go to Favorites</Link>
    </div>
  );
}

export default SearchPage;
