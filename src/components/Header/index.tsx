import { Container } from "@/styles/components/Header";
import Image from "next/image";

interface HeaderProps {
  color?: "primary" | "secondary";
}
export default function Header({ color = "primary" }: HeaderProps) {
  return (
    <Container color={color}>
      <div className="content">
        <Image
          src="/images/Layer_x0020_1.svg"
          width={81}
          height={58}
          alt="Logo do Instituto Hominis"
        />
        <menu>
          <ul>
            <li>
              <a href="#" target="_self">
                Início
              </a>
            </li>
            <li>
              <a href="#" target="_self">
                Quem somos
              </a>
            </li>
            <li>
              <a href="#" target="_self">
                Notícias
              </a>
            </li>
            <li>
              <a href="#" target="_self">
                Contato
              </a>
            </li>
            <li>
              <a href="#" target="_self">
                Envie seu currículo
              </a>
            </li>
            <li>
              <a href="#" target="_self">
                Seja um fornecedor
              </a>
            </li>
          </ul>
        </menu>
      </div>
    </Container>
  );
}
