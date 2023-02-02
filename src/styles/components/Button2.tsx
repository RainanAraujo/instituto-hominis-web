import styled from "styled-components";

export const Button2 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.blue300};
  width: 256px;
  height: 56px;
  margin-top: 36px;
  background-color: transparent;
  a {
    padding: 16px;
    border-color: ${(props) => props.theme.colors.blue300};
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 147.52%;
    text-decoration: none;
  }
`;
