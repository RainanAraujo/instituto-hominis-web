import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }


`;

export const theme = {
  colors: {
    black: "#092A3D",
    blue300: "#215D7F",
  },
};
