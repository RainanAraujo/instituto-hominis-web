import styled from "styled-components";

export const Container = styled.main`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .background {
    width: 100%;
    height: 460px;
    background-color: ${(props) => props.theme.colors.gray900};
  }
  .noHave {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    color: ${(props) => props.theme.colors.gray600};
  }
  & > div:nth-child(2) {
    margin-top: -420px;
  }
  @media (max-width: 940px) {
    .background {
      height: 260px;
    }
    & > div:nth-child(2) {
      margin-top: -280px;
      width: 100%;
    }
  }
`;

export const Noticia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  align-items: flex-start;
  margin: 0 auto;
  padding: 48px 80px;
  width: 100%;
  max-width: 900px;

  .imagem {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;

    img {
      width: 100%;
      height: auto;
      aspect-ratio: inherit;
    }

    p {
      font-weight: 400 !important;
      font-size: 16px !important;
      line-height: 1.84rem !important;
      color: ${(props) => props.theme.colors.gray600} !important;
    }
  }

  .titulo {
    display: flex;
    flex-direction: column;
    gap: 18px;
    p {
      font-weight: 400 !important;
      font-size: 16px !important;
      line-height: 1.85rem !important;
      color: ${(props) => props.theme.colors.gray600} !important;
    }
    h1 {
      font-weight: 800;
      font-size: 42px;
      line-height: 3rem;
      color: ${(props) => props.theme.colors.black};
    }
  }

  .descricao {
    width: 100%;
    span,
    p {
      font-size: 1rem !important;
      line-height: 1.85rem !important;
      color: ${(props) => props.theme.colors.gray400} !important;
      font-family: "Inter", sans-serif !important;
    }
  }
  @media only screen and (max-width: 940px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 24px;
    padding: 20px;
    align-items: center;
    .titulo {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 18px;
      h1 {
        font-size: 1.6rem;
        line-height: 2rem;
      }
    }
    .imagem {
      display: flex;
      flex-direction: column;
      gap: 14px;
      width: 100%;
      img {
        width: 100%;
        height: auto;
        aspect-ratio: inherit;
      }
    }
  }
`;
