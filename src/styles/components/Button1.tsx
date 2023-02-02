import styled from "styled-components";

export const Button1 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.blue300};
  border-radius: 10px;
  width: 256px;
  height: 56px;
  border-style: none;
  margin-top: 36px;
  a {
    padding: 16px;
    color: white;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 147.52%;
    text-decoration: none;
  }
`;
