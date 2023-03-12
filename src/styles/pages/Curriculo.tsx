import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  min-height: 80vh;
  margin: 0 auto;
  padding: 0 80px 40px;

  flex-wrap: wrap;
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 6rem 0 4rem;
    h1 {
      text-align: center;
      color: ${(props) => props.theme.colors.black};
      margin-bottom: 1.6rem;
      font-weight: 800;
    }
    strong {
      color: ${(props) => props.theme.colors.black};
      font-size: 1.2rem;
      text-align: center;
      margin-bottom: 1.6rem;
      font-weight: 500;
    }
    p {
      color: ${(props) => props.theme.colors.gray600};
      text-align: center;
      font-size: 1rem;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 100%;
    margin-bottom: 4rem;
    .campo {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 1.5rem;
      label {
        font-size: 1rem;
        margin-bottom: 10px;
      }
      input[type="file"] {
        display: none;
      }
      input {
        font-size: 1rem;
        padding: 16px;
        border: 1px solid ${(props) => props.theme.colors.gray600};
        border-radius: 4px;
      }
      #arquivo {
        border: 1px solid ${(props) => props.theme.colors.gray600};
        border-radius: 4px;
        padding: 1rem;
        margin-bottom: 0;
        color: ${(props) => props.theme.colors.gray600};
        text-align: center;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 940px) {
    padding: 0 40px 20px;
    .submit {
      width: 100%;
      padding: 16px 0;
    }
  }
`;

export const Seletivos = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 4rem;
  h1 {
    text-align: center;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
    font-weight: 800;
  }
  span {
    text-align: center;
    color: ${(props) => props.theme.colors.gray600};
    font-size: 1rem;
  }
`;
