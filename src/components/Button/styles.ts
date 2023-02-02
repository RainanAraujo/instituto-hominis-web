import styled, { css } from 'styled-components';

interface IConteiner {
    outlined?: boolean
}

const Container = styled.button<IConteiner>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;

    width: 240px;
    padding: 16px 32px;
    background-color: ${(props) => props.theme.colors.blue300};
    border-radius: 10px;
    border: none;

    font-size:16px;
    font-weight:600;
    color: white;
    transition: background-color 0.2s;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.theme.colors.blue500};
    }

    ${({ outlined, theme }) =>
        outlined &&
        css`
            background-color: transparent;
            border: 1px solid ${theme.colors.blue300};
            color: ${theme.colors.blue300};
            &:hover{
                background-color: transparent;
            }
        `};
`;

export default Container;
