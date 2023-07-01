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
        <Link to="/profile">
          <BiSolidUser
            style={{ width: "50px", height: "50px", color: "#828282" }}
          />
        </Link>

        <Link to="/">
          <RiSearchFill
            style={{ width: "50px", height: "50px", color: "#828282" }}
          />
        </Link>
        <Link to="/favorites">
          <AiFillStar
            style={{ width: "50px", height: "50px", color: "#828282" }}
          />
        </Link>
      </Footer>
    </div>
  );
}

export default ProfilePage;
