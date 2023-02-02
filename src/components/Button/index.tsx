import React from "react";
import Container from "../../styles/components/Button";

interface Button {
  outlined?: boolean;
  children?: React.ReactNode;
}

export default function Button({ children, outlined }: Button) {
  return <Container outlined={outlined}>{children}</Container>;
}
