import ButtonToTop from "@/components/ButtonToTop";
import { Container } from "@/styles/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo, InstagramLogo } from "phosphor-react";

export default function Footer() {
    return (
        <Container>
            <div className="content">
                <div className="wrapperFooter">
                    <Image
                        src="/images/Layer_x0020_1.svg"
                        width={81}
                        height={58}
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
                            <Link href="#">Envie seu currículo</Link>
                            <Link href="#">Seja um fornecedor</Link>
                        </div>
                    </div>
                    <div className="linkColumn">
                        <h3>Contate-nos</h3>
                        <div className="linkGroup">
                            <Link href="#" target="__blank">
                                E-mail: faleconosco@institutohominis.org.br
                            </Link>
                            <Link href="#" target="__blank">
                                Telefone: (98) 98536-7570
                            </Link>
                        </div>
                    </div>
                    <div className="linkColumn">
                        <h3>Redes sociais</h3>
                        <div className="socialNetworkingIcons">
                            <Link href="#">
                                <WhatsappLogo
                                    size={32}
                                    weight="regular"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                            <Link href="#">
                                <InstagramLogo
                                    size={32}
                                    weight="regular"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        </div>
                    </div>
                    <ButtonToTop />
                </div>
                <p>© 2023 INSTITUTO HOMINIS | Todos os Direitos Reservados</p>
            </div>
        </Container>
    );
}
