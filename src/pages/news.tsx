import Head from "next/head";
import { Container, Noticia } from "@/styles/pages/News";
import Header from "@/components/Header";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";

interface Post {
  title: any;
  content: { text: string | null; image: string; body: any };
  published: Date;
}
export default function News({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postsFetched, setPostsFetched] = useState(1);
  const { id } = useRouter().query;

  function fetchMorePosts() {
    setPosts(getThreePosts(postsFetched + 1));
    setPostsFetched(postsFetched + 1);
  }

  function extractDataPosts(dataFull: any) {
    const array = [];
    array.push({
      title: dataFull.title,
      content: {
        body: dataFull.content,
        text: new DOMParser().parseFromString(dataFull.content, "text/html")
          .body.textContent,
        image:
          new DOMParser()
            .parseFromString(dataFull.content, "text/html")
            .body.querySelector("img") != null
            ? new DOMParser()
                .parseFromString(dataFull.content, "text/html")
                .body.querySelector("img")!.src
            : "",
      },
      published: dataFull.published,
    });
    return array;
  }

  function getThreePosts(numPosts: number = 1) {
    if (id != undefined) {
      return extractDataPosts(data);
    } else {
      const array = [];
      for (let i = 0; i < numPosts; i++) {
        if (data.items == undefined || i >= data.items.length) {
          return array;
        }
        array.push(...extractDataPosts(data.items[i]));
      }
      return array;
    }
  }

  useEffect(() => {
    setPosts(getThreePosts());
  }, []);

  function getDate(published: Date) {
    const date = new Date(published);
    const month = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    return `${date.getDate()} DE ${month[date.getMonth()].toUpperCase()}`;
  }

  return (
    <>
      <Head>
        <title>Notícias</title>
      </Head>
      <Header color="secondary" />
      <Container>
        <div className="background"></div>
        {posts && (
          <InfiniteScroll
            dataLength={posts.length}
            next={() => fetchMorePosts()}
            hasMore={
              id ? false : data.items.length == posts.length ? false : true
            }
            loader={<h4 style={{ width: "100%" }}>Carregando...</h4>}
          >
            {posts.map((post, index) => {
              return (
                <Noticia key={index}>
                  <div className="titulo">
                    <h1>{post.title}</h1>
                    <p>{getDate(post.published)}</p>
                  </div>
                  <div className="imagem">
                    <Image
                      src={post.content.image}
                      alt=""
                      width={200}
                      height={200}
                    />
                    <p>Por Instituto Hominis</p>
                  </div>
                  <div
                    className="descricao"
                    dangerouslySetInnerHTML={{
                      __html: post.content.text!,
                    }}
                  ></div>
                </Noticia>
              );
            })}
          </InfiniteScroll>
        )}
      </Container>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{ data: any }> = async (
  context
) => {
  const { id } = context.query;
  let res;

  if (id == undefined) {
    res = await fetch(
      "https://www.googleapis.com/blogger/v3/blogs/1662176285574311515/posts?key=AIzaSyAGPORScP6q_KFAsOiLVR_0t6_rNCVBZok"
    );
  } else {
    res = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/1662176285574311515/posts/${id}?key=AIzaSyAGPORScP6q_KFAsOiLVR_0t6_rNCVBZok`
    );
  }
  const data: any = await res.json();

  return {
    props: {
      data,
    },
  };
};
