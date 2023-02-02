import Head from "next/head";
<<<<<<< Updated upstream
import { Container } from "../styles/pages/Home";
=======
import { Container, Objetivos, Propostas, Blog } from "../styles/pages/Home";
import Heading from "@/components/Header";
import { Target, Eye, SketchLogo, UsersThree, Handshake } from "phosphor-react";
import Button from "@/components/Button1";
import Posts from "@/components/Button2";
>>>>>>> Stashed changes

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
<<<<<<< Updated upstream
      <Container></Container>
=======
      <Container>
        <Heading />

        <Objetivos>
          <div className="card ">
            <div className="bg-target">
              <div className="icon">
                <Target size={42.6} color="white" />
              </div>
            </div>
            <h2>Missão</h2>
            <p>
              A transformação, valorização e proteção de vidas através de gestão
              eficiente, geração de conhecimento, práticas sociais e soluções
              inovadoras voltadas para promoção humana, social, cultural e
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
              Ser reconhecida como uma Organização Social referência local e
              nacional na promoção com excelência do desenvolvimento humano e da
              proteção e valorização da vida, capaz de propiciar impactos
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
            <p>
              Valorização Respeito a vida Valorização e proteção
              Responsabilidade Equidade Compromisso Transparência
            </p>
          </div>
        </Objetivos>
        <Propostas>
          <div className="titulo">
            <h1>A solução para texto texto</h1>
            <Button />
          </div>
          <div className="card_1">
            <div className="icon">
              <UsersThree size={46} />
            </div>
            <h2>Vantagem 1</h2>
            <p>
              llamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur
            </p>
          </div>
          <div className="card_2">
            <div className="icon">
              <Handshake size={46} />
            </div>
            <h2>Vantagem 2</h2>
            <p>
              llamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur
            </p>
          </div>
        </Propostas>
        <Blog>
          <div className="principal">
            <h1>Oferecemos o melhor para você</h1>
            <figure className="imgPrincipal">
              <img src="/images/foto.png" alt="" />
            </figure>
            <div className="titulo">
              <h2>The standard Lorem Ipsum passage, used since...</h2>
            </div>
            <div className="descricao">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, tota...
              </p>
            </div>
            <a href="#">Ver mais</a>
          </div>

          <div className="feed">
            <div className="botaoPost">
              <Posts />
            </div>

            <div className="card_1">
              <figure className="miniatura">
                <img src="/images/foto.png" alt="" />
              </figure>
              <div className="texto">
                <div className="titulo">
                  <h2>The standard Lorem Ipsum passage,...</h2>
                </div>
                <div className="descricao">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, tota...
                  </p>
                </div>
                <a href="#">Ver mais</a>
              </div>
            </div>
            <div className="card_2">
              <figure className="miniatura">
                <img src="/images/foto.png" alt="" />
              </figure>
              <div className="texto">
                <div className="titulo">
                  <h2>The standard Lorem Ipsum passage,...</h2>
                </div>
                <div className="descricao">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, tota...
                  </p>
                </div>
                <a href="#">Ver mais</a>
              </div>
            </div>
          </div>
        </Blog>
      </Container>
>>>>>>> Stashed changes
    </>
  );
}
