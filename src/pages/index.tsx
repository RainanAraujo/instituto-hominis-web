/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import { Container, Presentation, KeyWord } from "@/styles/pages/Home";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

import { Heartbeat, HandFist, Student } from "phosphor-react";

export default function Home() {
    return (
        <>
            <Head>
                <title>Instituto Hominis</title>
            </Head>
            <Container>
                <Header />
                <Presentation className="limitWidth">
                    <div className="containerTitle">
                        <h1>O Instituto para a sua vida</h1>
                        <p>
                            A melhor forma mostrar texto sbtitulo texto para
                            texto subtitulo A melhor forma mostrar texto
                            sbtitulo texto para texto subtitulo lorem
                        </p>
                        {/* Alterar: Componente button */}
                        <Button Text="Entre em Contato" />
                    </div>
                    <div className="containerImages">
                        <div className="largerImage">
                            <div className="smallerImage"></div>
                        </div>
                    </div>
                </Presentation>
                <KeyWord>
                    <div className="contentKeyWords limitWidth">
                        <div className="wordKeyConceptions">
                            <h1>Palavras chaves para definir o conceito</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Vitae earum voluptatem delectus fugit ratione,
                                nobis placeat iusto cum corrupti magni neque totam,
                                quidem quia adipisci velit dolore aliquid maxime
                                dicta.
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
                                    <strong>Assitência social</strong>
                                </div>
                                <div className="wordCard">
                                    <Student
                                        size={24}
                                        width={32}
                                        height={32}
                                        weight="regular"
                                    />
                                    <strong>Educação</strong>
                                </div>
                            </div>
                        </div>
                        <div className="imageConcept"></div>
                    </div>
                </KeyWord>
                <Footer/>
            </Container>
        </>
    );
}
