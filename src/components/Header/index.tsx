import { Container } from "@/styles/components/Header";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  color?: "primary" | "secondary";
}
export default function Header({ color = "primary" }: HeaderProps) {
  return (
    <Container color={color}>
      <div className="content" id="header">
        {color === "primary" ? (
          <Image
            src="/images/Layer_x0020_1.svg"
            width={120}
            height={40}
            alt="Logo do Instituto Hominis"
          />
        ) : (
          <Image
            src="/images/logodark.svg"
            width={120}
            height={58}
            alt="Logo do Instituto Hominis"
          />
        )}

        <menu>
          <ul>
            <li>
              <Link href="/" target="_self">
                Início
              </Link>
            </li>
            <li>
              <Link href="/aboutUs" target="_self">
                Quem somos
              </Link>
            </li>
            <li>
              <Link href="/news" target="_self">
                Notícias
              </Link>
            </li>
            <li>
              <Link href="https://linktr.ee/institutohominis" target="_blank">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/curriculo" target="_self">
                Envie seu currículo
              </Link>
            </li>
            <li>
              <Link href="/seja-fornecedor" target="_self">
                Seja um fornecedor
              </Link>
            </li>
          </ul>
        </menu>
      </div>
    </Container>
  );
}
