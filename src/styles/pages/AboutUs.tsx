import styled from "styled-components";

export const Container = styled.main`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding: 80px 0;
  flex-direction: column;
  align-items: center;
  .head {
    padding: 0 80px;
    margin-bottom: 80px;
    display: flex;
    justify-content: space-between;
    h1 {
      width: 100%;
    }
    span {
      width: 100%;
      font-size: 1rem;
      line-height: 1.5rem;
      color: ${(props) => props.theme.colors.gray};
    }
  }
  .titleCertificates {
    margin-bottom: 36px;
  }
  .classifications::before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.gray600};
  }
  .classifications {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 100%;
    h2 {
      font-weight: 500;
    }
    .qualifications {
      display: flex;
      width: 100%;
      justify-content: space-around;
      .quali {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 400px;
      }
    }
  }
  .compromisse {
    padding: 80px 80px;

    display: flex;
    justify-content: space-between;
    h1 {
      width: 50px;
      font-size: 2.4rem;
    }
    span {
      width: 40%;
      font-size: 1rem;
      line-height: 1.5rem;
      color: ${(props) => props.theme.colors.gray};
    }
  }
  .certificates {
    position: relative;
    height: 400px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .background {
      width: 70%;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      height: 100%;
      position: absolute;
      background-color: #f1f3f8;
    }
    .cardCertificates {
      padding: 32px;
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 16px;
      flex-direction: column;
      width: 320px;
      height: 260px;
      background-color: white;
      .header {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      svg {
        color: ${(props) => props.theme.colors.blue300};
      }
      h2 {
        font-size: 1.5rem;

        color: ${(props) => props.theme.colors.black};
      }
      span {
        font-size: 1rem;
        line-height: 1.5rem;
        color: ${(props) => props.theme.colors.gray};
      }
    }
  }
  .limitWidth {
    max-width: 1280px;
  }
`;
