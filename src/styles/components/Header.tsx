import styled from "styled-components";

interface HeaderProps {
  color?: "primary" | "secondary";
}

export const TopBar = styled.div`
  width: 100%;
  .content {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
    padding: 8px 80px;
    @media (max-width: 940px) {
      .link {
        display: none;
      }
      .mobile {
        display: flex;
      }
      justify-content: center;
    }
  }
  background-color: ${(props) => props.theme.colors.blue300};

  color: ${(props) => props.theme.colors.white};
  .link {
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 4px;

    font-weight: 500;
  }
`;

export const Container = styled.header<HeaderProps>`
  background-color: ${(props) =>
    props.color === "primary"
      ? props.theme.colors.black
      : props.theme.colors.gray900};

  #header {
    img {
      cursor: pointer;
    }
  }
  .content {
    width: 100%;
    max-width: 1280px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 24px 80px;

    .HambuguerButton {
      display: none;
      color: ${(props) => props.theme.colors.white};
    }
    .menu {
      display: flex;

      max-width: 80%;
      ul {
        display: flex;

        justify-content: space-between;
        align-items: center;
        gap: 12px;

        width: 100%;
        height: 24px;

        flex: none;
        order: 1;
        flex-grow: 0;
        font-size: 1rem;
        li {
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
    }
  }
  @media (max-width: 940px) {
    .content {
      display: flex;

      padding: 24px 20px;
      justify-content: space-between;
      .HambuguerButton {
        display: block;
        svg {
          color: ${(props) =>
            props.color === "primary"
              ? props.theme.colors.gray900
              : props.theme.colors.black};
        }
      }

      .menu {
        display: none;
      }
    }
  }
`;

export const ContainerMobileMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  animation: showMenu ease 0.3s;

  background-color: ${(props) => props.theme.colors.white};
  .close {
    position: absolute;
    top: 26px;
    right: 18px;
  }
  .menuMobile {
    display: flex !important;

    max-width: 80%;
    ul {
      display: flex;
      flex-direction: column;

      justify-content: space-between;
      align-items: center;
      padding: 0px;
      gap: 12px;

      width: 100%;
      font-size: 2rem;
      li a {
        display: block;
        text-align: center;
        color: ${(props) => props.theme.colors.black};
        font-weight: 400;
      }
    }
  }
  @keyframes showMenu {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;
