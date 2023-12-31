import { useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { RiSearchFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

import { Footer } from "../components/footer";

import Input from "../components/input";
import UserData from "../components/user-data";
import { getUser } from "../services/github-stats-service";
import styled from "@emotion/styled";

const ContainerLoading = styled.div`
  font-weight: 700;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 427px;
`;

function SearchPage({
  favorites,
  onAddFavorite,
  onRemoveFavorite,
  onAddUserQuery,
  onGetFollowers,
  onGetFollowings,
  onGetRepositories,
}) {
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
        onAddUserQuery(query);
      })
      .catch((_error) => {
        setState({
          status: "error",
          data: null,
          error: "El usuario no existe! intente de nuevo",
        });
      });
  }

  const iconStyles = {
    width: "50px",
    height: "50px",
    color: "#BDBDBD",
  };

  const hoverStyles = {
    color: "#828282",
  };
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
      <div style={{ display: "grid", placeContent: "center" }}>
        {status === "pending" && (
          <ContainerLoading>
            <BsGithub
              style={{
                width: "120px",
                height: "120px",
                marginTop: "16px",
                marginBottom: "12px",
              }}
            ></BsGithub>
            <p>Retrieving user....</p>
          </ContainerLoading>
        )}
        {status === "idle" && (
          <ContainerLoading>
            <BsGithub
              style={{
                width: "120px",
                height: "120px",
                marginTop: "16px",
                marginBottom: "12px",
              }}
            ></BsGithub>
            <p>No users...</p>
          </ContainerLoading>
        )}
        {status === "success" && (
          <UserData
            user={user}
            onGetFollowers={onGetFollowers}
            onGetFollowings={onGetFollowings}
            onGetRepositories={onGetRepositories}
            onAddFavorite={onAddFavorite}
            onRemoveFavorite={onRemoveFavorite}
            isFavorite={isFavorite}
          />
        )}
        {status === "error" && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <Footer>
        <Link
          to="/profile"
          style={iconStyles}
          onMouseOver={(e) => {
            e.target.style.color = hoverStyles.color;
          }}
          onMouseOut={(e) => {
            e.target.style.color = iconStyles.color;
          }}
        >
          <BiSolidUser
            style={{ width: "50px", height: "50px", color: "#BDBDBD" }}
          />
        </Link>

        <Link
          to="/"
          style={iconStyles}
          onMouseOver={(e) => {
            e.target.style.color = hoverStyles.color;
          }}
          onMouseOut={(e) => {
            e.target.style.color = iconStyles.color;
          }}
        >
          <RiSearchFill
            style={{ width: "50px", height: "50px", color: "#BDBDBD" }}
          />
        </Link>
        <Link
          to="/favorites"
          style={iconStyles}
          onMouseOver={(e) => {
            e.target.style.color = hoverStyles.color;
          }}
          onMouseOut={(e) => {
            e.target.style.color = iconStyles.color;
          }}
        >
          <AiFillStar
            style={{ width: "50px", height: "50px", color: "#BDBDBD" }}
          />
        </Link>
      </Footer>
    </div>
  );
}

export default SearchPage;
