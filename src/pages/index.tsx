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
  LightbulbFilament,
  Eye,
  SketchLogo,
  Target,
  UsersThree,
  CurrencyCircleDollar,
  Phone,
  ArrowRight,
} from "phosphor-react";
import ButtonToTop from "@/components/ButtonToTop";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";

interface Post {
  title: any;
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
              <h1>O Instituto para a sua vida</h1>
              <p>
                Através de uma equipe multidisciplinar e especialista focada em
                atendimento humanizado com prestação de serviços de qualidade.
              </p>
              <a href="#footer">
                <Button>
                  <Phone size={18} weight="bold" />
                  Entre em contato
                </Button>
              </a>
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
              <h1>Gestão de pessoas, serviços, hospitais e equipamentos</h1>
              <p className="paragraph">
                Somos uma entidade sem fins lucrativos, fundada em 29 de outubro
                de 1974, que atua hoje na gestão compartilhada de saúde em
                conjunto ao Poder Público, nas esferas municipais, estaduais e
                federais.
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
            <h1>A qualidade é o caminho</h1>
            <Link href="/seja-fornecedor">
              <Button>
                <ArrowRight size={24} color="white" />
                Seja um fornecedor
              </Button>
            </Link>
          </div>
          <div className="card">
            <div className="icon">
              <UsersThree size={46} />
            </div>
            <h2>Tecnologia</h2>
            <p>
              Gestão orientada por dados com o uso de tecnologias inovadoras,
              desenvolvimento de pesquisa e projetos voltados para a saúde
              pública.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <CurrencyCircleDollar size={46} />
            </div>
            <h2>Economia</h2>
            <p>
              Redução de custos e potencialização de resultados para a
              administração pública.
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

        {posts.length > 0 && (
          <Blog>
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

            <div className="feed">
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
                  <a href="#">Ver mais</a>
                </div>
              </div>
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
