import ButtonToTop from "@/components/ButtonToTop";
import { Container, ImageLogo } from "@/styles/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo, InstagramLogo } from "phosphor-react";
import React from "react";

export default function Footer(
  props: React.HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <Container {...props}>
      <div className="content">
        <div className="wrapperFooter">
          <ImageLogo
            src="/images/logovertical.svg"
            width={120}
            height={86}
            alt="Logo do Instituto Hominis"
          />
          <div className="linkColumn">
            <h3>Saiba mais</h3>
            <div className="linkGroup">
              <Link href="#">Notícias</Link>
              <Link href="#">Política e Privacidade</Link>
              <Link href="#">Contate-nos</Link>
            </div>
          </div>
          <div className="linkColumn">
            <h3>Junte-se</h3>
            <div className="linkGroup">
              <Link href="#"> Faça parte</Link>
              <Link href="#">Seja um fornecedor</Link>
            </div>
          </div>
          <div className="linkColumn">
            <h3>Contate-nos</h3>
            <div className="linkGroup">
              <Link href="mailto:contato@institutohominis.org.br">
                E-mail: contato@institutohominis.org.br
              </Link>
              <a>Telefone: (98) 8581-1294</a>
            </div>
          </div>
          <div className="linkColumn">
            <h3>Redes sociais</h3>
            <div className="socialNetworkingIcons">
              <Link
                href="https://api.whatsapp.com/send/?phone=559885811294&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                <WhatsappLogo
                  size={32}
                  weight="regular"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.instagram.com/institutohominis/"
                target="_blank"
              >
                <InstagramLogo
                  size={32}
                  weight="regular"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
        <p>© 2023 INSTITUTO HOMINIS | Todos os Direitos Reservados</p>
      </div>
    </Container>
  );
}
