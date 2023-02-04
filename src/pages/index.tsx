import Head from "next/head";
import {
  Container,
  Presentation,
  KeyWord,
  Objetivos,
  Propostas,
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
  Student,
  Eye,
  SketchLogo,
  Target,
  UsersThree,
  Handshake,
  Phone,
  ArrowRight,
} from "phosphor-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Instituto Hominis</title>
      </Head>
      <Container>
        <Header />
        <Presentation>
          <div className="content">
            <div className="containerTitle ">
              <h1>O Instituto para a sua vida</h1>
              <p>
                A melhor forma mostrar texto sbtitulo texto para texto subtitulo
                A melhor forma mostrar texto sbtitulo texto para texto subtitulo
                lorem
              </p>
              <Button>
                <Phone size={18} weight="bold" />
                Entre em contato
              </Button>
            </div>
            <div className="containerImages">
              <div className="largerImage">
                <div className="smallerImage"></div>
              </div>
            </div>
          </div>
        </Presentation>
        <KeyWord>
          <div className="contentKeyWords limitWidth">
            <div className="wordKeyConceptions">
              <h1>Palavras chaves para definir o conceito</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                earum voluptatem delectus fugit ratione, nobis placeat iusto cum
                corrupti magni neque totam, quidem quia adipisci velit dolore
                aliquid maxime dicta.
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
                  <HandFist size={32} width={32} height={32} weight="regular" />
                  <strong>Assitência social</strong>
                </div>
                <div className="wordCard">
                  <Student size={24} width={32} height={32} weight="regular" />
                  <strong>Educação</strong>
                </div>
              </div>
            </div>
            <div className="imageConcept"></div>
          </div>
        </KeyWord>
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
            <ol>
              <li>Valorização</li>
              <li>Respeito a vida </li>
              <li> Valorização e proteção</li>
              <li>Responsabilidade</li>
              <li> Equidade </li>
              <li>Compromisso</li>
              <li>Transparência</li>
            </ol>
          </div>
        </Objetivos>
        <Propostas>
          <div className="titulo">
            <h1>A solução para texto texto</h1>
            <a href="#">
              <Button>
                <ArrowRight size={24} color="white" />
                Seja um fornecedor
              </Button>
            </a>
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
        <Footer />
      </Container>
    </>
  );
}
