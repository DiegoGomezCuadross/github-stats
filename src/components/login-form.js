import { useState } from "react";

import Input from "./input";
import { useAuth } from "../context/auth-context";
import { Button } from "./button";
import { Formulario } from "./form";

function LoginForm() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "team3@mail.com",
    password: "123456",
  });

  const { email, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    login(formData);
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
        <Button type="submit">Login</Button>
      </Formulario>
    </div>
  );
}

export default LoginForm;
