import styled from "styled-components";
interface HeaderProps {
  color?: "primary" | "secondary";
}
export const Container = styled.header<HeaderProps>`
  background-color: ${(props) =>
    props.color === "primary"
      ? props.theme.colors.black
      : props.theme.colors.gray900};

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
        border-bottom: 3px solid
          ${(props) =>
            props.color === "primary"
              ? props.theme.colors.white
              : props.theme.colors.black};
      }
      a {
        color: ${(props) =>
          props.color === "primary"
            ? props.theme.colors.white
            : props.theme.colors.black};
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
    margin: 0 auto;
    padding: 24px 80px;
    width: 100%;
  }
`;
