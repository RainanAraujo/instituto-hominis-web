import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: ${(props) => props.theme.colors.black};

    margin: 0 auto;
    padding: 24px 80px;
    width: 100%;
    max-width: 1280px;
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 12px;

        width: 615px;
        height: 24px;

        /* Inside auto layout */

        flex: none;
        order: 1;
        flex-grow: 0;
        font-size: 16px;
        > li {
            transition: all 0.2s;
            &:hover {
                transform: translateY(-10%);
                border-bottom: 3px solid white;
            }
            a {
                color: white;
                font-weight: 400;
            }
        }
    }
`;
