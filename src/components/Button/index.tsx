import React from "react";
import Container from "../../styles/components/Button";

interface Button extends React.HTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
  children?: React.ReactNode;
}

export default function Button({ children, outlined, ...props }: Button) {
  return (
    <Container outlined={outlined} {...props}>
      {children}
    </Container>
  );
}
