import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 64px;
    min-height: 350px;
    width: 100%;
    max-width: 1280px;

    margin: 0 auto;
    padding: 72px 80px 44px;
    > p {
        border-top: 1px solid #215d7f;
        padding: 32px 0px 0px;

        font-size: 14px;
        font-weight: 500;
        text-align: center;
        color: white;
    }
    .wrapperFooter {
        display: flex;
        justify-content: space-between;
        > img {
            margin-right: 126px;
        }
    }
    .linkWrap {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        height: 100%;
        gap: 16px;
    }
    .linkColumn {
        > h3 {
            font-size: 16px;
            font-weight: 600;
            line-height: 16px;
            color: #ffffff;
            margin-bottom: 20px;
        }
    }
    .linkGroup {
        display: flex;
        flex-direction: column;
        gap: 12px;
        > a {
            color: #e1e1e1;
            > svg {
                color: #3a9dd7;
            }
        }
    }
`;
