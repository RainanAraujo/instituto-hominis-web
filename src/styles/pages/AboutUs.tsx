import styled from "styled-components";

export const Container = styled.main`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding: 80px 0;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  .head {
    padding: 0 80px;
    margin-bottom: 80px;
    display: flex;
    justify-content: space-between;
    h1 {
      color: ${(props) => props.theme.colors.black};
      font-size: 2rem;
      width: 100%;
      margin-top: 16px;
    }
    span {
      width: 100%;
      font-size: 1rem;
      line-height: 1.5rem;
      color: ${(props) => props.theme.colors.gray600};
    }
  }
  .titleCertificates {
    color: ${(props) => props.theme.colors.black};
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
    h1 {
      color: ${(props) => props.theme.colors.black};
    }
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
        span {
          color: ${(props) => props.theme.colors.gray600};
        }
      }
    }
  }
  .compromisse {
    padding: 80px 80px;

    display: flex;
    justify-content: space-between;
    gap: 20px;
    h1 {
      width: 50px;
      color: ${(props) => props.theme.colors.black};
      font-size: 2.4rem;
    }
    span {
      width: 40%;
      font-size: 1rem;
      line-height: 1.5rem;
      color: ${(props) => props.theme.colors.gray600};
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
      border-radius: 8px;
    }
    .cardCertificates {
      width: 300px;
      height: 260px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      padding: 32px;
      gap: 16px;
      border-radius: 8px;
      background-color: white;
      -webkit-box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);
      -moz-box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);
      box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);
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
        color: ${(props) => props.theme.colors.gray600};
      }
    }
  }
  .limitWidth {
    max-width: 1280px;
  }

  @media (max-width: 940px) {
    padding: 0 20px;
    h1 {
      font-size: 1.8rem;
    }
    span {
      font-size: 0.9rem;
    }
    .head {
      padding: 24px 0px;
      flex-direction: column;
      gap: 20px;
      h1 {
        text-align: center;
        font-size: 1.8rem;
      }
      span {
        font-size: 0.9rem;
        text-align: justify;
        line-height: 1.8;
      }
    }
    .titleCertificates {
      text-align: center;
    }
    .certificates {
      display: flex;
      flex-direction: column;
      height: fit-content;
      width: 100%;
      gap: 20px;
      flex-direction: column;

      .background {
        height: 80%;
        width: 100%;
      }
      .cardCertificates {
        height: fit-content;
        width: 80%;

        h2 {
          font-size: 1.2rem;
        }
        span {
          font-size: 0.9rem;
        }
      }
    }

    .compromisse {
      flex-direction: column;
      padding: 80px 20px;
      gap: 20px;
      text-align: center;
      h1 {
        font-size: 1.8rem;
        width: 100%;
      }
      span {
        font-size: 0.9rem;
        width: 100%;
      }
    }
    .classifications {
      padding: 20px 0;
      h1 {
        text-align: center;
      }
      .qualifications {
        flex-direction: column;
        gap: 20px;
        .quali {
          width: 100%;
          h2 {
            font-size: 1.2rem;
            text-align: center;
          }
          span {
            text-align: center;
          }
        }
      }
    }
  }
`;
