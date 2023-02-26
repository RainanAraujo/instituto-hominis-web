import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${(props) => props.theme.colors.black};

  .content {
    display: flex;
    flex-direction: column;
    gap: 64px;
    min-height: 350px;
    width: 100%;
    max-width: 1280px;
    background-color: ${(props) => props.theme.colors.black};
    margin: 0 auto;
    padding: 72px 80px 44px;
  }
  p {
    border-top: 1px solid #215d7f;
    padding: 32px 0px 0px;

    font-size: .9rem;
    font-weight: 500;
    text-align: center;
    color: white;
  }
  .wrapperFooter {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .linkColumn {
    > h3 {
      font-size: 1rem;
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
    }
  }
  .socialNetworkingIcons {
    display: flex;
    align-items: center;
    gap: 4px;
    svg {
      color: #3a9dd7;
    }
  }
`;
