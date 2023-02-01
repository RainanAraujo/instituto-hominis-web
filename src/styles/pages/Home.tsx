import styled from "styled-components";

export const Container = styled.main`
    background-color: ${(props) => props.theme.colors.black};
    width: 100%;
    min-height: 100vh;
    .limitWidth {
        max-width: 1280px;
    }
`;

export const Presentation = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    padding: 0 80px 40px;
    flex-wrap: wrap;
    .containerTitle {
        width: 486px;
        margin-bottom: 40px;

        color: white;
        > h1 {
            font-size: 64px;
            font-weight: 700;
            line-height: 64px;

            margin-bottom: 16px;
        }
        > p {
            text-align: left;
            line-height: 24px;
            font-size: 16px;

            margin-bottom: 16px;
        }
    }
    .containerImages {
        width: 396px;
        height: 388px;
        .largerImage {
            position: relative;
            width: 364px;
            height: 364px;
            border-radius: 50%;
            background-color: white;
        }
        .smallerImage {
            position: absolute;
            top: 59%;
            right: -8%;
            width: 172px;
            height: 172px;
            border-radius: 50%;
            background-color: white;
        }
    }
`;

export const KeyWord = styled.section`

    background-color: white;
    .contentKeyWords {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 94px 80px;
        margin: 0 auto;

        .wordKeyConceptions {
            width: 551px;
            > h1 {
                font-weight: 600;
                font-size: 42px;
                line-height: 44px;
                color: #092a3d;
                margin-bottom: 16px;
            }
            > p {
                color: #888888;
                font-size: 16px;
                margin-bottom: 16px;
                line-height: 32px;
            }
            .groupWordsCards {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                .wordCard {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    align-items: center;
                    justify-content: center;

                    width: 164px;
                    height: 128px;
                    padding: 32px 26px 24px;
                    border-radius: 10px;
                    background-color: #f1f1f1;
                    > strong {
                        text-align: center;
                        color: #215d7f;
                    }
                    > svg {
                        color: #3a9dd7;
                    }
                }
            }
        }
        .imageConcept {
            height: 360px;
            width: 425px;
            border-radius: 32px;
            background-color: #f1f1f1;
        }
    }
`;
