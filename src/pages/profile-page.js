import styled from "@emotion/styled";
import { getUser } from "../services/user-service";
import { useAuth } from "../context/auth-context";
import Input from "../components/input";
import { Link } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { RiSearchFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { Footer } from "../components/footer";
import { colors } from "../styles";
import { Formulario } from "../components/form";
import { useState } from "react";
import { Button } from "../components/button";

function ProfilePage() {
  const { user, updateProfile } = useAuth();
  console.log(user);
  const [formData, setFormData] = useState({
    email: user.email,
    password: "",
    first_name: user.first_name,
    last_name: user.last_name,
  });

  const { email, password, first_name, last_name } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({ email, password, first_name, last_name });

    updateProfile(formData);
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
      <div>
        <Formulario onSubmit={handleSubmit}>
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="example@mail.com"
            label="Email"
          />
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="********"
            label="Password"
          />
          <Input
            name="first_name"
            value={first_name}
            onChange={handleChange}
            label="First Name"
            placeholder="Paty"
          />
          <Input
            name="last_name"
            value={last_name}
            onChange={handleChange}
            label="Last Name"
            placeholder="Apaestegui"
          />
          <Button type="submit" style={{ marginBottom: "200px" }}>
            Update
          </Button>
        </Formulario>
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

export default ProfilePage;

// export function getRepos(username) {
//   return fetch(BASE_URI + username.toLowerCase() + "repos").then((response) =>
//     response.json()
//   );
// }

// export function getFollower(username) {
//   return fetch(BASE_URI + username.toLowerCase() + "followers").then(
//     (response) => response.json()
//   );
// }

// function ReposPage() {
//   return <h1>Repos</h1>;
// }
// async function goToRepos(user) {
//   console.log(user);
//   // const dataRepos = await getRepos(user.login);
// }
