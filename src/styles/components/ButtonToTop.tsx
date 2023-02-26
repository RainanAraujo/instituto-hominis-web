import styled from "styled-components";

export const Container = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 50px;
    right: 0;
    margin: 0 3.8rem 2.7rem 0;
    width: 2.625rem;
    height: 2.625rem;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.blue300};
    color: ${(props) => props.theme.colors.white};
`;
