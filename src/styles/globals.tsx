import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        list-style-type: none;
        text-decoration: none;
    }
    html {
        scroll-behavior: smooth;
    }
    :focus {
        outline: 1px solid ${(props) => theme.colors.blue300};
        
        
    }
`;

export const theme = {
    colors: {
        white: "#FFFFFF",
        black: "#092A3D",
        blue300: "#215D7F",
        gray950: "#F8F8F8",
        gray600: "#888888",
        green300: "#418977",
        blue500: "#3A9DD7",
    },
};
