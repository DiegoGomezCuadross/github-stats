import styled from "@emotion/styled";
import { colors } from "../styles";

const StyledInput = styled("input")`
  width: 213px;
  height: 28px;
  border-radius: 4px;
  border: none;
  box-shadow: 2px 2px 0px 0px #00000040;
  ::placeholder {
    color: ${colors.gray.light};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Input({
  id,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <InputWrapper>
      {label ? <label htmlFor={id || name}>{label}</label> : ""}
      <StyledInput
        id={id || name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
}

export default Input;
