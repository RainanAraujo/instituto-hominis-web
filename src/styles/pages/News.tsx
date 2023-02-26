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
  & > div:nth-child(2) {
    margin-top: -420px;
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
      height: 387px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 1.84rem;
      color: ${(props) => props.theme.colors.gray600};
    }
  }

  .titulo {
    display: flex;
    flex-direction: column;
    gap: 18px;
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 1.85rem;
      color: ${(props) => props.theme.colors.gray600};
    }
    h1 {
      font-weight: 800;
      font-size: 42px;
      line-height: 3rem;
      color: ${(props) => props.theme.colors.black};
    }
  }

  .descricao {
    > p {
      color: ${(props) => props.theme.colors.gray400};
    }
  }
`;
