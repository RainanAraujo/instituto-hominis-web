import styled from "styled-components";

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.black};

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 12px;

    width: 615px;
    height: 24px;

    flex: none;
    order: 1;
    flex-grow: 0;
    font-size: 1rem;
    > li {
      transition: all 0.2s;
      &:hover {
        transform: translateY(-10%);
        border-bottom: 3px solid white;
      }
      a {
        color: white;
        font-weight: 400;
      }
    }
  }
  .content {
    max-width: 1280px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.colors.black};
    margin: 0 auto;
    padding: 24px 80px;
    width: 100%;
  }
`;
