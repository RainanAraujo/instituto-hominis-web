import styled, { keyframes } from "styled-components";

const Animatrion = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;
export const Container = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 40px;
    right: 30px;
    width: 2.625rem;
    height: 2.625rem;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.blue300};
    color: ${(props) => props.theme.colors.white};
    animation: ${Animatrion} 0.5s ease-in-out;
`;
