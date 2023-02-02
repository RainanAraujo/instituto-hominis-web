import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 24px 80px;
  gap: 129px;
  width: 100%;
  max-width: 1280px;
  height: 99px;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 12px;

    width: 615px;
    height: 24px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    font-size: 16px;
    a {
      color: white;
      font-weight: 400;
      &:hover {
        line-height: 1.4rem;
        border-bottom: 2px solid white;
      }
    }
  }
`;
