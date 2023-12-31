import { useState } from "react";

import Input from "./input";
import { useAuth } from "../context/auth-context";
import { Formulario } from "./form";
import { Button } from "./button";

function SignupForm() {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const { email, password, first_name, last_name } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({ email, password, first_name, last_name });

    signup(formData);
  }

  return (
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
        <Button type="submit">Create Account</Button>
      </Formulario>
    </div>
  );
}

export default SignupForm;
