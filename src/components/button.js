import styled from "@emotion/styled";
import { colors } from "../styles";
import { Link } from "react-router-dom";

export const Button = styled.button`
  border: none;
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: #2d9cdb;
  box-shadow: 2px 2px 0px 0px #2d9cdb;
  color: ${colors.white};
  &: hover {
    background-color: #2db2db;
  }
  &: active {
    background-color: #0369a1;
  }
  &: focus {
    outline: 0.1875rem solid #60a5fa;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: #2d9cdb;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
