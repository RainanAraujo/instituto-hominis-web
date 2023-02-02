import styled from "styled-components";

export const Container = styled.main`
<<<<<<< Updated upstream
  background: ${(props) => props.theme.colors.black};
  h1 {
  }
=======
  background-color: ${(props) => props.theme.colors.black};
  width: 100%;
  min-height: 100vh;
>>>>>>> Stashed changes
`;
export const Objetivos = styled.section`
  display: flex;
  justify-content: center;
  gap: 24px;
  align-items: center;
  margin: 0 auto;
  padding: 24px 80px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray950};
  flex-wrap: wrap;

  .card {
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    width: 340px;
    height: 414px;
    transition: all 0.3s ease-out;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 115.02%;
    padding-bottom: 12px;
    padding-top: 24px;
    color: ${(props) => props.theme.colors.black};
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 181%;
    color: ${(props) => props.theme.colors.gray600};
  }
  .bg-target {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.blue300};
    width: 64px;
    height: 64px;
    border-radius: 8.88889px 8.88889px 0px 8.88889px;
  }
  .bg-eye {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.blue500};
    width: 64px;
    height: 64px;
    border-radius: 8.88889px 8.88889px 0px 8.88889px;
  }
  .bg-diamond {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.green300};
    width: 64px;
    height: 64px;
    border-radius: 8.88889px 8.88889px 0px 8.88889px;
  }
`;

export const Propostas = styled.section`
  display: flex;
  justify-content: center;
  gap: 24px;
  align-items: center;
  margin: 0 auto;
  padding: 64px;
  width: 100%;
  background-color: white;
  flex-wrap: wrap;

  .titulo h1 {
    color: ${(props) => props.theme.colors.black};
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 42px;
    line-height: 105%;
    width: 343px;
    height: 88px;
  }
  .card_1 {
    width: 254px;
    height: 233px;
    transition: all 0.3s ease-out;
  }
  .card_2 {
    width: 254px;
    height: 233px;
    transition: all 0.3s ease-out;
  }

  h2 {
    color: ${(props) => props.theme.colors.black};
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 105%;
    padding-bottom: 24px;
    padding-top: 24px;
    width: 161px;
    white-space: nowrap;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 139%;
    color: ${(props) => props.theme.colors.gray600};
    width: 254px;
    height: 110px;
  }
  .icon {
    color: ${(props) => props.theme.colors.black};
  }
`;

export const Blog = styled.section`
  display: flex;
  justify-content: center;
  gap: 24px;
  align-items: center;
  margin: 0 auto;
  padding: 24px 80px;
  width: 100%;
  background-color: white;
  .principal h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 42px;
    line-height: 105.02%;
    color: ${(props) => props.theme.colors.black};
    width: 522px;
    height: 88px;
  }
  .principal h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 105.02%;
    color: ${(props) => props.theme.colors.black};
    width: 307;
    height: 50px;
  }
  .principal p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 177.52%;
    color: ${(props) => props.theme.colors.gray600};
    width: 467px;
    height: 56px;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.blue300};
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 147.52%;
  }

  .principal img {
    width: 467px;
    height: 211px;
  }
  .imgPrincipal {
    padding-top: 58px;
    padding-bottom: 24px;
  }

  .descricao {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .feed img {
    width: 305px;
    height: 189px;
  }
  .card_1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card_2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
  }
  .feed img {
    width: 305px;
    height: 189px;
  }

  .texto {
    width: 307px;
    height: 189px;
    padding-left: 18px;
  }
  .botaoPost {
    display: flex;
    justify-content: right;
    padding-bottom: 72px;
  }

  .feed h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 105.02%;
    color: ${(props) => props.theme.colors.black};
  }
  .feed p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 177.52%;
    color: ${(props) => props.theme.colors.gray600};
    width: 306px;
  }
`;
