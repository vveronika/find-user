import styled from "styled-components";

export const Input = styled.input`
  font-family: "Lato", sans-serif;
  border: none;
  padding: 10px;
  border-bottom: 2px solid #cccbc7;
  outline: none;
  transition: border-color 0.2s linear;

  :focus {
    border-color: #febb3f;
  }
`;
