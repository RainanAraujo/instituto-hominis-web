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
import * as Dialog from "@radix-ui/react-dialog";
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
  X,
} from "phosphor-react";
import ButtonToTop from "@/components/ButtonToTop";
import React, { useRef, useState } from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import { InferGetServerSidePropsType } from "next";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";

interface Post {
  title: any;
  id: string;
  content: { text: string | null; image: string; body: any };
}

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [posts, setPosts] = useState<Post[]>([]);

  function getThreePosts() {
    const array = [];
    for (let i = 0; i < 3; i++) {
      if (data.items == undefined || i >= data.items.length) {
        return array;
      }
      array.push({
        title: data.items[i].title,
        id: data.items[i].id,
        content: {
          body: data.items[i].content,
          text: new DOMParser().parseFromString(
            data.items[i].content,
            "text/html"
          ).body.textContent,
          image:
            new DOMParser()
              .parseFromString(data.items[i].content, "text/html")
              .body.querySelector("img") != null
              ? new DOMParser()
                  .parseFromString(data.items[i].content, "text/html")
                  .body.querySelector("img")!.src
              : "",
        },
      });
    }
    return array;
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  useEffect(() => {
    setPosts(getThreePosts());
  }, []);

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
                Transformando vidas e construindo um futuro mais humanizado -
                Bem vindo ao Instituto Hominis
              </p>
              <div className="groupWordsCards">
                <div className="wordCard">
                  <Heartbeat
                    size={32}
                    width={32}
                    height={32}
                    weight="regular"
                  />
                  <span>Saúde</span>
                </div>

                <div className="wordCard">
                  <HandFist size={32} width={32} height={32} weight="regular" />
                  <span>Assis. social</span>
                </div>

                <div className="wordCard">
                  <LightbulbFilament
                    size={24}
                    width={32}
                    height={32}
                    weight="regular"
                  />
                  <span>Educação</span>
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
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOnce={true}
          offset={500}
        >
          <KeyWord>
            <div className="contentKeyWords limitWidth" id="about">
              <div className="wordKeyConceptions">
                <h1>
                  Gestão de pessoas, serviços, hospitais e equipamentos de saúde
                </h1>
                <p className="paragraph">
                  Disponibilizamos ao setor público modelos eficientes de gestão
                  de saúde, com práticas inovadoras e excelência. Nossa equipe
                  multidisciplinar e especializada oferece atendimento
                  humanizado e serviços de qualidade, gerando resultados
                  expressivos para a sociedade.
                </p>
              </div>
              <div className="imageConcept"></div>
            </div>
          </KeyWord>
        </AnimationOnScroll>
        <Vantagens>
          <div className="contentVantagens">
            <Carousel
              responsive={responsive}
              ssr={true}
              keyBoardControl={true}
              containerClass="carousel-container"
              deviceType="desktop"
              autoPlay={true}
              autoPlaySpeed={3000}
              infinite={true}
              removeArrowOnDeviceType={["desktop", "mobile"]}
            >
              <AnimationOnScroll
                animateIn="animate__fadeInDown"
                animateOnce={true}
                offset={500}
              >
                <div className="cardVantagens">
                  <UsersThree size={46} />
                  <h2>Gestão Tecnologica</h2>
                  <p>
                    Gestão com o uso de tecnologias inovadoras, desenvolvimento
                    de pesquisa e projetos voltados para a saúde pública.
                  </p>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__fadeInDown"
                animateOnce={true}
                offset={500}
              >
                <div className="cardVantagens">
                  <CurrencyCircleDollar size={46} />
                  <h2>Economia</h2>
                  <p>
                    Redução de custos e potencialização de resultados para a
                    administração pública.
                  </p>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__fadeInDown"
                animateOnce={true}
                offset={500}
              >
                <div className="cardVantagens">
                  <TrendUp size={46} />
                  <h2>Eficiência</h2>
                  <p>
                    Otimizamos os resultados através de uma busca contínua por
                    uma gestão de excelência.
                  </p>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__fadeInDown"
                animateOnce={true}
                offset={500}
              >
                <div className="cardVantagens">
                  <Handshake size={46} />
                  <h2>Qualidade de Atendimento</h2>
                  <p>
                    Garantimos atendimento humanizado, universalizado, e de
                    qualidade para o bem estar dos pacientes.
                  </p>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__fadeInDown"
                animateOnce={true}
                offset={500}
              >
                <div className="cardVantagens">
                  <Receipt size={46} />
                  <h2>Desburocratização</h2>
                  <p>
                    Dinamização e simplificação dos processos administrativos,
                    possibilitando maior agilidade, economia e eficiência para a
                    administração pública.
                  </p>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__fadeInDown"
                animateOnce={true}
                offset={500}
              >
                <div className="cardVantagens">
                  <UserGear size={46} />
                  <h2>Gestão de profissionais</h2>
                  <p>
                    Administrar equipes multidisciplinares de saúde
                    eficientemente, reduzindo custos por meio da organização.
                  </p>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__fadeInDown"
                animateOnce={true}
                offset={500}
              >
                <div className="cardVantagens">
                  <Stack size={46} />
                  <h2>Prestação de contas e compliance</h2>
                  <p>
                    Gerenciar recursos públicos com transparência e ética,
                    garantindo a autonomia e economia das unidades
                    administradas.
                  </p>
                </div>
              </AnimationOnScroll>
            </Carousel>
          </div>
        </Vantagens>
        <Objetivos>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOnce={true}
            offset={500}
          >
            <div className="card ">
              <div className="bg-target">
                <div className="icon">
                  <Target size={42.6} color="white" />
                </div>
              </div>
              <h2>Missão</h2>
              <p>
                A transformação, valorização e proteção de vidas através de
                gestão eficiente, geração de conhecimento, práticas sociais e
                soluções inovadoras voltadas para promoção humana, social,
                cultural e ambiental.
              </p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOnce={true}
            offset={500}
          >
            <div className="card ">
              <div className="bg-eye">
                <div className="icon">
                  <Eye size={42.6} color="white" />
                </div>
              </div>
              <h2>Visão</h2>
              <p>
                Ser reconhecida como uma Organização Social referência local e
                nacional na promoção com excelência do desenvolvimento humano e
                da proteção e valorização da vida, capaz de propiciar impactos
                positivos sociais e ambientais.
              </p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            animateOnce={true}
            offset={500}
          >
            <div className="card">
              <div className="bg-diamond">
                <div className="icon">
                  <SketchLogo size={42.6} color="white" />
                </div>
              </div>
              <h2>Valores</h2>

              <ul>
                <li> Valorização e respeito à vida</li>
                <li>Equidade em saúde </li>
                <li> Valorização e proteção</li>
                <li>
                  Valorização e proteção de recursos humanos, ambientais e
                  culturais
                </li>
                <li>Responsabilidade, equidade e inclusão social</li>
              </ul>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button>Ler mais</button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="DialogOverlay" />
                  <Dialog.Content className="DialogContent">
                    <Dialog.Title className="DialogTitle">Valores</Dialog.Title>

                    <ul>
                      <li>Valorização e respeito à vida</li>
                      <li>Ética e transparência</li>
                      <li>Equidade em saúde</li>
                      <li>
                        Valorização e proteção de recursos humanos, ambientais e
                        culturais
                      </li>
                      <li>Responsabilidade, equidade e inclusão social</li>
                      <li>
                        Respeito a diversidade humana, cultural, ambiental e
                        econômica
                      </li>
                      <li>
                        Compromisso com a efetiva melhoria nas condições de
                        saúde da população
                      </li>
                      <li>Inovação, criatividade e proatividade</li>
                      <li>Gestão com excelência e foco nos resultados</li>
                      <li>
                        Acolhimento humanizado e digno a pacientes e
                        acompanhantes
                      </li>
                      <li>Reconhecimento e valorização profissional</li>
                      <li>Educação como instrumento de transformação</li>
                    </ul>
                    <Dialog.Close asChild>
                      <button className="IconButton">
                        <X size={24} />
                      </button>
                    </Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </AnimationOnScroll>
        </Objetivos>
        <HeaderBlog>
          <div className="cabeçalho">
            <h1>Oferecemos o melhor para você</h1>
          </div>
          <div className="botaoPost">
            <Link href={"/news"}>
              <Button outlined={true}>Ver todos os posts</Button>
            </Link>
          </div>
        </HeaderBlog>
        {posts.length > 0 && (
          <Blog>
            <Link
              legacyBehavior
              href={{
                pathname: "/news",
                query: { id: posts[0].id },
              }}
            >
              <div className="principal">
                <figure className="imgPrincipal">
                  <Image
                    src={posts[0].content.image}
                    alt="imagem"
                    width={200}
                    height={300}
                  />
                </figure>
                <div className="texto">
                  <h2>{posts[0].title}</h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: posts[0].content.text!,
                    }}
                  ></p>
                  <a href="#">Ver mais</a>
                </div>
              </div>
            </Link>

            <div className="feed">
              <Link
                legacyBehavior
                href={{
                  pathname: "/news",
                  query: { id: posts[1].id },
                }}
              >
                <div className="card">
                  <figure className="miniatura">
                    <Image
                      src={posts[1].content.image}
                      alt="imagem"
                      width={200}
                      height={150}
                    />
                  </figure>
                  <div className="texto">
                    <div className="titulo">
                      <h2>{posts[1].title}</h2>
                    </div>
                    <div className="descricao">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: posts[1].content.text!,
                        }}
                      ></p>
                    </div>
                    <a href="#">Ver mais</a>
                  </div>
                </div>
              </Link>
              <Link
                legacyBehavior
                href={{
                  pathname: "/news",
                  query: { id: posts[2].id },
                }}
              >
                <div className="card">
                  <figure className="miniatura">
                    <Image
                      src={posts[2].content.image}
                      alt="imagem"
                      width={200}
                      height={150}
                    />
                  </figure>
                  <div className="texto">
                    <div className="titulo">
                      <h2>{posts[2].title}</h2>
                    </div>
                    <div className="descricao">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: posts[2].content.text!,
                        }}
                      ></p>
                    </div>

                    <a>Ver mais</a>
                  </div>
                </div>
              </Link>
            </div>
          </Blog>
        )}
        <Footer id="footer" />
        <ButtonToTop />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{ data: any }> = async (
  context
) => {
  const res = await fetch(
    "https://www.googleapis.com/blogger/v3/blogs/1662176285574311515/posts?key=AIzaSyAGPORScP6q_KFAsOiLVR_0t6_rNCVBZok"
  );
  const data: any = await res.json();

  return {
    props: {
      data,
    },
  };
};
