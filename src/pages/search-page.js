import { useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { RiSearchFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";

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

  const isFavorite = Boolean(favorites.find((fav) => fav.name === user?.name));

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
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input
          name="query"
          placeholder="username"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          style={{
            borderRadius: "4px",
            background: "#FFF",
            boxShadow: "2px 2px 0px 0px rgba(0, 0, 0, 0.25)",
          }}
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
      <footer
        style={{
          display: "flex",
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
          width: "411px",
          boxShadow: "0px -2px 0px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Link to="/profile">
          <BiSolidUser
            style={{ width: "50px", height: "50px", color: "#828282" }}
          />
        </Link>

        <Link to="/search">
          <RiSearchFill
            style={{ width: "50px", height: "50px", color: "#828282" }}
          />
        </Link>
        <Link to="/favorites">
          <AiFillStar
            style={{ width: "50px", height: "50px", color: "#828282" }}
          />
        </Link>
      </footer>
    </div>
  );
}

export default SearchPage;
