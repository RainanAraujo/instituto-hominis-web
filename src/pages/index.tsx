import Head from "next/head";
import {
  Container,
  Presentation,
  KeyWord,
  Objetivos,
  Vantagens,
  Blog,
  HeaderBlog,
  ImageEquipe,
  ImagePresent,
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
                  <span>Sa??de</span>
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
                  <span>Educa????o</span>
                </div>
              </div>
            </div>
            <ImagePresent
              src="/images/largerImage.png"
              width={500}
              height={500}
              alt="Imagem de apresenta????o"
            ></ImagePresent>
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
                  Gest??o de pessoas, servi??os, hospitais e equipamentos de sa??de
                </h1>
                <p className="paragraph">
                  Disponibilizamos ao setor p??blico modelos eficientes de gest??o
                  de sa??de, com pr??ticas inovadoras e excel??ncia. Nossa equipe
                  multidisciplinar e especializada oferece atendimento
                  humanizado e servi??os de qualidade, gerando resultados
                  expressivos para a sociedade.
                </p>
              </div>
              <ImageEquipe
                src="/images/equipe.png"
                width={500}
                height={500}
                alt="Equipe"
              ></ImageEquipe>
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
                  <h2>Gest??o Tecnologica</h2>
                  <p>
                    Gest??o com o uso de tecnologias inovadoras, desenvolvimento
                    de pesquisa e projetos voltados para a sa??de p??blica.
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
                    Redu????o de custos e potencializa????o de resultados para a
                    administra????o p??blica.
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
                  <h2>Efici??ncia</h2>
                  <p>
                    Otimizamos os resultados atrav??s de uma busca cont??nua por
                    uma gest??o de excel??ncia.
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
                  <h2>Desburocratiza????o</h2>
                  <p>
                    Dinamiza????o e simplifica????o dos processos administrativos,
                    possibilitando maior agilidade, economia e efici??ncia para a
                    administra????o p??blica.
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
                  <h2>Gest??o de profissionais</h2>
                  <p>
                    Administrar equipes multidisciplinares de sa??de
                    eficientemente, reduzindo custos por meio da organiza????o.
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
                  <h2>Presta????o de contas e compliance</h2>
                  <p>
                    Gerenciar recursos p??blicos com transpar??ncia e ??tica,
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
              <h2>Miss??o</h2>
              <p>
                A transforma????o, valoriza????o e prote????o de vidas atrav??s de
                gest??o eficiente, gera????o de conhecimento, pr??ticas sociais e
                solu????es inovadoras voltadas para promo????o humana, social,
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
              <h2>Vis??o</h2>
              <p>
                Ser reconhecida como uma Organiza????o Social refer??ncia local e
                nacional na promo????o com excel??ncia do desenvolvimento humano e
                da prote????o e valoriza????o da vida, capaz de propiciar impactos
                positivos sociais e ambientais.
              </p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
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
                <li> Valoriza????o e respeito ?? vida</li>
                <li>Equidade em sa??de </li>
                <li> Valoriza????o e prote????o</li>
                <li>
                  Valoriza????o e prote????o de recursos humanos, ambientais e
                  culturais
                </li>
                <li>Responsabilidade, equidade e inclus??o social</li>
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
                      <li>Valoriza????o e respeito ?? vida</li>
                      <li>??tica e transpar??ncia</li>
                      <li>Equidade em sa??de</li>
                      <li>
                        Valoriza????o e prote????o de recursos humanos, ambientais e
                        culturais
                      </li>
                      <li>Responsabilidade, equidade e inclus??o social</li>
                      <li>
                        Respeito a diversidade humana, cultural, ambiental e
                        econ??mica
                      </li>
                      <li>
                        Compromisso com a efetiva melhoria nas condi????es de
                        sa??de da popula????o
                      </li>
                      <li>Inova????o, criatividade e proatividade</li>
                      <li>Gest??o com excel??ncia e foco nos resultados</li>
                      <li>
                        Acolhimento humanizado e digno a pacientes e
                        acompanhantes
                      </li>
                      <li>Reconhecimento e valoriza????o profissional</li>
                      <li>Educa????o como instrumento de transforma????o</li>
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
          <div className="cabe??alho">
            <h1>Fique por dentro</h1>
          </div>
          <div className="botaoPost">
            <Link href={"/news"}>
              <Button outlined={true}>Ver todos os posts</Button>
            </Link>
          </div>
        </HeaderBlog>
        {posts.length === 0 && (
          <p className="noHave"> Ainda n??o h?? postagens...</p>
        )}

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
              {posts.length > 1 && (
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
              )}
              {posts.length > 2 && (
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
              )}
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
