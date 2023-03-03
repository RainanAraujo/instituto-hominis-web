import Head from "next/head";
import {
    Container,
    Presentation,
    KeyWord,
    Objetivos,
    Vantagens,
    Blog,
    HeaderBlog,
} from "@/styles/pages/Home";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

import Image from "next/image";
import {
    Heartbeat,
    HandFist,
    LightbulbFilament,
    Eye,
    SketchLogo,
    Target,
    UsersThree,
    CurrencyCircleDollar,
    Phone,
    TrendUp,
    Handshake,
    Receipt,
    UserGear,
    Stack,
} from "phosphor-react";
import ButtonToTop from "@/components/ButtonToTop";
import React, { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export default function Home() {
    const boxRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [startScrollPosition, setStartScrollPosition] = useState(0);
    const [open, setOpen] = React.useState(false);
    const handleMouseDown = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        setIsDragging(true);
        setStartPosition(e.clientX);
        setStartScrollPosition(boxRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (isDragging) {
            const distance = e.clientX - startPosition;
            if (boxRef.current) {
                boxRef.current.scrollLeft = startScrollPosition - distance;
            }
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <>
            <Head>
                <title>Instituto Hominis</title>
            </Head>
            <Container>
                <Header color="primary" />
                <Presentation>
                    <div className="content">
                        <div className="containerTitle ">
                            <h1>Instituto Hominis</h1>
                            <p>
                                Transformando vidas e construindo um futuro mais
                                humanizado - Bem vindo ao Instituto Hominis
                            </p>
                            <div className="groupWordsCards">
                                <div className="wordCard">
                                    <Heartbeat
                                        size={32}
                                        width={32}
                                        height={32}
                                        weight="regular"
                                    />
                                    <strong>Saúde</strong>
                                </div>
                                <div className="wordCard">
                                    <HandFist
                                        size={32}
                                        width={32}
                                        height={32}
                                        weight="regular"
                                    />
                                    <strong>Assis. social</strong>
                                </div>
                                <div className="wordCard">
                                    <LightbulbFilament
                                        size={24}
                                        width={32}
                                        height={32}
                                        weight="regular"
                                    />
                                    <strong>Educação</strong>
                                </div>
                            </div>
                        </div>
                        <div className="containerImages">
                            <div className="largerImage">
                                <div className="smallerImage"></div>
                            </div>
                        </div>
                    </div>
                </Presentation>
                <KeyWord>
                    <div className="contentKeyWords limitWidth" id="about">
                        <div className="wordKeyConceptions">
                            <h1>
                                Gestão de pessoas, serviços, hospitais e
                                equipamentos de saúde
                            </h1>
                            <p className="paragraph">
                                Disponibilizamos ao setor público modelos
                                eficientes de gestão de saúde, com práticas
                                inovadoras e excelência. Nossa equipe
                                multidisciplinar e especializada oferece
                                atendimento humanizado e serviços de qualidade,
                                gerando resultados expressivos para a sociedade.
                            </p>
                        </div>
                        <div className="imageConcept"></div>
                    </div>
                </KeyWord>
                <Vantagens>
                    <div
                        className="contentVantagens box"
                        ref={boxRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                    >
                        <div className="cardVantagens">
                            <UsersThree size={46} />
                            <h2>Gestão Tecnologica</h2>
                            <p>
                                Gestão com o uso de tecnologias inovadoras,
                                desenvolvimento de pesquisa e projetos voltados
                                para a saúde pública.
                            </p>
                        </div>
                        <div className="cardVantagens">
                            <CurrencyCircleDollar size={46} />
                            <h2>Economia</h2>
                            <p>
                                Redução de custos e potencialização de
                                resultados para a administração pública.
                            </p>
                        </div>
                        <div className="cardVantagens">
                            <TrendUp size={46} />
                            <h2>Eficiência</h2>
                            <p>
                                Otimizamos os resultados através de uma busca
                                contínua por uma gestão de excelência.
                            </p>
                        </div>
                        <div className="cardVantagens">
                            <Handshake size={46} />
                            <h2>Qualidade de Atendimento</h2>
                            <p>
                                Garantimos atendimento humanizado,
                                universalizado, e de qualidade para o bem estar
                                dos pacientes.
                            </p>
                        </div>
                        <div className="cardVantagens">
                            <Receipt size={46} />
                            <h2>Desburocratização</h2>
                            <p>
                                Dinamização e simplificação dos processos
                                administrativos, possibilitando maior agilidade,
                                economia e eficiência para a administração
                                pública.
                            </p>
                        </div>
                        <div className="cardVantagens">
                            <UserGear size={46} />
                            <h2>Gestão de profissionais</h2>
                            <p>
                                Administrar equipes multidisciplinares de saúde
                                eficientemente, reduzindo custos por meio da
                                organização.
                            </p>
                        </div>
                        <div className="cardVantagens">
                            <Stack size={46} />
                            <h2>Prestação de contas e compliance</h2>
                            <p>
                                Gerenciar recursos públicos com transparência e
                                ética, garantindo a autonomia e economia das
                                unidades administradas.
                            </p>
                        </div>
                    </div>
                </Vantagens>
                <Objetivos>
                    <div className="card ">
                        <div className="bg-target">
                            <div className="icon">
                                <Target size={42.6} color="white" />
                            </div>
                        </div>
                        <h2>Missão</h2>
                        <p>
                            A transformação, valorização e proteção de vidas
                            através de gestão eficiente, geração de
                            conhecimento, práticas sociais e soluções inovadoras
                            voltadas para promoção humana, social, cultural e
                            ambiental.
                        </p>
                    </div>

                    <div className="card ">
                        <div className="bg-eye">
                            <div className="icon">
                                <Eye size={42.6} color="white" />
                            </div>
                        </div>
                        <h2>Visão</h2>
                        <p>
                            Ser reconhecida como uma Organização Social
                            referência local e nacional na promoção com
                            excelência do desenvolvimento humano e da proteção e
                            valorização da vida, capaz de propiciar impactos
                            positivos sociais e ambientais.
                        </p>
                    </div>

                    <div className="card ">
                        <div className="bg-diamond">
                            <div className="icon">
                                <SketchLogo size={42.6} color="white" />
                            </div>
                        </div>
                        <h2>Valores</h2>

                        <ol>
                            <li> Valorização e respeito à vida</li>
                            <li>Equidade em saúde </li>
                            <li> Valorização e proteção</li>
                            <li>
                                Valorização e proteção de recursos humanos,
                                ambientais e culturais
                            </li>
                            <li>
                                Responsabilidade, equidade e inclusão social
                            </li>
                        </ol>
                        <button>Ler mais</button>
                    </div>
                </Objetivos>
                <HeaderBlog>
                    <div className="cabeçalho">
                        <h1>Oferecemos o melhor para você</h1>
                    </div>
                    <div className="botaoPost">
                        <Button outlined={true}>Ver todos os posts</Button>
                    </div>
                </HeaderBlog>
                <Blog>
                    <div className="principal">
                        <figure className="imgPrincipal">
                            <Image
                                src="/images/Layer_x0020_1.svg"
                                width={40}
                                height={40}
                                alt="Imagem"
                            />
                        </figure>
                        <div className="texto">
                            <h2>
                                The standard Lorem Ipsum passage, used since...
                            </h2>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, tota...
                            </p>
                            <a href="#">Ver mais</a>
                        </div>
                    </div>

                    <div className="feed">
                        <div className="card">
                            <figure className="miniatura">
                                <Image
                                    src="/images/Layer_x0020_1.svg"
                                    width={40}
                                    height={40}
                                    alt="Imagem"
                                />
                            </figure>
                            <div className="texto">
                                <div className="titulo">
                                    <h2>
                                        The standard Lorem Ipsum passage,...
                                    </h2>
                                </div>
                                <div className="descricao">
                                    <p>
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        doloremque laudantium, tota...
                                    </p>
                                </div>
                                <a href="#">Ver mais</a>
                            </div>
                        </div>
                        <div className="card">
                            <figure className="miniatura">
                                <Image
                                    src="/images/Layer_x0020_1.svg"
                                    width={40}
                                    height={40}
                                    alt="Imagem"
                                />
                            </figure>
                            <div className="texto">
                                <div className="titulo">
                                    <h2>
                                        The standard Lorem Ipsum passage,...
                                    </h2>
                                </div>
                                <div className="descricao">
                                    <p>
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        doloremque laudantium, tota...
                                    </p>
                                </div>
                                <a href="#">Ver mais</a>
                            </div>
                        </div>
                    </div>
                </Blog>
                <Footer id="footer" />
                <ButtonToTop />
            </Container>
        </>
    );
}
