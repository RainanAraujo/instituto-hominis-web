import { Container } from "@/styles/components/Header";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <Container>
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
              <Link href="/" target="_self">
                Início
              </Link>
            </li>
            <li>
              <Link href="#" target="_self">
                Quem somos
              </Link>
            </li>
            <li>
              <Link href="#" target="_self">
                Notícias
              </Link>
            </li>
            <li>
              <Link href="#" target="_self">
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
