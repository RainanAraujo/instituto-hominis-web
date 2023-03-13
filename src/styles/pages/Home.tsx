import styled, { keyframes } from "styled-components";
import Image from "next/image";

export const Container = styled.main`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  min-height: 100vh;
  .limitWidth {
    max-width: 1280px;
  }
  @media screen and (min-width: 940px) {
    #main {
      min-width: 1000px;
    }
  }
  .noHave {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    color: ${(props) => props.theme.colors.gray600};
  }
`;

export const Presentation = styled.section`
  background-color: ${(props) => props.theme.colors.black};

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.black};
    margin: 0 auto;
    padding: 0 80px 40px;
    max-width: 1280px;
    @media only screen and (max-width: 940px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      padding: 52px 20px;
      h1 {
        text-align: center;
      }
    }
  }
  .containerTitle {
    width: 486px;
    margin-bottom: 40px;
    @media only screen and (max-width: 940px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    color: white;
    > h1 {
      font-size: 3.6rem;
      font-weight: 700;
      line-height: 4rem;
      margin-bottom: 1rem;
    }
    > p {
      text-align: left;
      line-height: 1.6;
      font-size: 1rem;
      margin-bottom: 1rem;
      @media only screen and (max-width: 940px) {
        text-align: center;
      }
    }
    .groupWordsCards {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 1rem;
      gap: 10px;
      @media only screen and (max-width: 940px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        gap: 3px;
      }
      .wordCard {
        display: flex;
        align-items: center;
        gap: 10px;
        svg {
          color: ${(props) => props.theme.colors.blue500};
        }
        strong {
          font-size: 1rem;
          font-weight: 800;
        }
      }
      .wordCard + .wordCard {
        padding-left: 8px;
        border-left: 1px solid ${(props) => props.theme.colors.gray600};
      }
    }
  }
`;
export const ImagePresent = styled(Image)`
  position: relative;
  width: 22.75rem;
  height: 22.75rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media only screen and (max-width: 940px) {
    width: 100%;
    height: auto;
  }
`;

export const KeyWord = styled.section`
  background-color: white;
  .contentKeyWords {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 64px 80px;
    padding-bottom: 24px;
    margin: 0 auto;
    gap: 24px;
    @media only screen and (max-width: 940px) {
      padding: 64px 20px;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .wordKeyConceptions {
      width: 551px;
      @media only screen and (max-width: 940px) {
        width: 100%;
        h1 {
          text-align: center;
        }
        p {
          text-align: center;
        }
      }

      h1 {
        font-weight: 600;
        font-size: 2.5rem;
        line-height: 2.5rem;
        color: #092a3d;
        margin-bottom: 16px;
      }
      p {
        color: ${(props) => props.theme.colors.gray600};
        font-size: 1rem;

        margin-bottom: 2rem;
        line-height: 1.7rem;
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
          width: 10.25rem;
          height: 8rem;
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
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;
export const ImageEquipe = styled(Image)`
  height: auto;
  @media only screen and (max-width: 940px) {
    width: 100%;
    height: auto;
  }
`;

export const Objetivos = styled.section`
  display: flex;
  justify-content: center;
  gap: 24px;
  align-items: stretch;
  margin: 0 auto;
  height: max-content;
  padding: 32px 80px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray950};
  flex-wrap: wrap;

  .card {
    height: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    width: 340px;
    transition: all 0.3s ease-out;
  }

  h2 {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1rem;
    margin-bottom: 12px;
    margin-top: 24px;
    color: ${(props) => props.theme.colors.black};
  }
  p {
    font-size: 16px;
    line-height: 2rem;
    color: ${(props) => props.theme.colors.gray600};
  }
  ul {
    font-size: 16px;
    line-height: 2rem;
    color: ${(props) => props.theme.colors.gray600};
    li {
      margin-bottom: 4px;
    }
  }
  button {
    margin-top: 4px;
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.blue500};
    cursor: pointer;
    font-size: 1rem;
  }
  .bg-target {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.blue300};
    width: 64px;
    height: 64px;
    border-radius: 8px;
  }
  .bg-eye {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.blue500};
    width: 64px;
    height: 64px;
    border-radius: 8px 8px 0px 8px;
  }
  .bg-diamond {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.green300};
    width: 64px;
    height: 64px;
    border-radius: 8px 8px 0px 8px;
  }
`;

export const Vantagens = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 56px 0px 62px 0px;
  .contentVantagens {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    height: 290px;
    overflow-x: scroll;
    cursor: grab;
    padding: 0px calc(100vw - 95%);
    &:active {
      cursor: grabbing;
    }
    &::-webkit-scrollbar {
      display: none;
    }

    .cardVantagens {
      height: 290px;
      margin-left: 12px;
      min-width: 300px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 1.375rem;
      text-align: center;

      background: linear-gradient(${(props) => props.theme.colors.blue500} 0 0)
        no-repeat calc(200% - var(--p, 0%)) 100% / 200% var(--p, 0.08em);
      transition: 0.3s var(--t, 0s),
        background-position 0.3s calc(0.3s - var(--t, 0s));

      &:hover {
        background-size: 100% 2%;
      }
      > svg {
        color: ${(props) => props.theme.colors.black};
      }
      > h2 {
        color: ${(props) => props.theme.colors.black};
        font-weight: 700;
        font-size: 1.5rem;
      }
      > p {
        line-height: 1.7rem;
        color: ${(props) => props.theme.colors.gray600};
        font-size: 1rem;
      }
    }
  }
`;

export const Blog = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin: 0 auto 64px;
  padding: 24px 80px;
  width: 100%;
  background-color: white;
  max-width: 1280px;
  .principal:hover {
    transform: scale(1.05);
  }
  .feed .card:hover {
    transform: scale(1.05);
  }
  .principal {
    transition: all 0.7s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 50%;

    figure {
      img {
        border-radius: 6px;
        width: 100%;
        height: auto;
        aspect-ratio: inherit;
        @media only screen and (max-width: 940px) {
          width: 220px;
          height: auto;
        }
      }
    }
    h2 {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.8rem;
      color: ${(props) => props.theme.colors.black};
    }
    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.blue300};
      font-weight: 600;
      font-size: 16px;
    }
    p {
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      display: -webkit-box;
      font-size: 16px;
      line-height: 2rem;
      color: ${(props) => props.theme.colors.gray600};
    }
    img {
      width: 100%;
    }
    @media only screen and (max-width: 940px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 45%;
    }
  }

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    @media only screen and (max-width: 940px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
  }

  .texto {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  .feed {
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: 24px;

    height: fit-content;
    .card {
      display: flex;
      align-items: flex-start;
      cursor: pointer;
      transition: all 0.7s;
    }
    figure {
      img {
        border-radius: 6px;
        width: 220px;
        height: auto;
        aspect-ratio: inherit;
      }
    }
    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.blue300};
      font-weight: 600;
      font-size: 16px;
    }
    h2 {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.8rem;
      color: ${(props) => props.theme.colors.black};
    }
    p {
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      display: -webkit-box;
      font-size: 16px;
      line-height: 177.52%;
      color: ${(props) => props.theme.colors.gray600};
    }
  }
  @media only screen and (max-width: 940px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 24px;
    padding: 20px;
    align-items: center;
    .principal {
      width: 100%;
      text-align: center;
    }
    .feed {
      width: 100%;
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        text-align: center;
      }
    }
  }
`;
export const HeaderBlog = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: center;
  margin: 0 auto;
  padding: 32px 80px;
  margin-top: 12px;
  width: 100%;
  max-width: 1280px;
  flex-wrap: wrap;
  .botaoPost {
    display: flex;
    justify-content: right;
  }
  .cabeçalho h1 {
    font-weight: 800;
    font-size: 42px;
    line-height: 105.02%;
    width: 85%;
    color: ${(props) => props.theme.colors.black};
  }
  @media only screen and (max-width: 940px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    padding: 32px 20px;
    .cabeçalho h1 {
      text-align: center;
      width: 100%;
    }
  }
`;
