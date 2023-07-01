import { useState } from "react";
import styled from "@emotion/styled";

import { colors } from "./styles";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";
import { ButtonLink } from "./components/button";
import { StyledTittle } from "./components/form";
import { SessionWrapper } from "./components/form";

const CustomLink = styled("button")`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 32px;
  &:hover {
    color: ${colors.gray.medium};
  }
`;

function UnauthenticatedApp() {
  const [showLogin, setShowLogin] = useState(true);

  function handleLinkClick() {
    setShowLogin(!showLogin);
  }

  return (
    <SessionWrapper>
      <StyledTittle>Welcome to Github Stats</StyledTittle>
      {showLogin ? <LoginForm /> : <SignupForm />}
      <CustomLink onClick={handleLinkClick}>
        {showLogin ? (
          <ButtonLink>Create Account</ButtonLink>
        ) : (
          <ButtonLink>Login</ButtonLink>
        )}
      </CustomLink>
    </SessionWrapper>
  );
}

export default UnauthenticatedApp;
