import Head from "next/head";
import { Container, Noticia } from "@/styles/pages/News";
import Header from "@/components/Header";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

interface Post {
  title: any;
  content: { text: string | null; image: string; body: any };
}
export default function News({
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
  console.log(posts);
  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <Header color="secondary" />
      <Container>
        <div className="background"></div>
        {posts.map((post, index) => {
          return (
            <Noticia key={index}>
              <div className="titulo">
                <h1>{post.title}</h1>
                <p>05 JAN</p>
              </div>
              <div className="imagem">
                <img src={post.content.image} alt="" />
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
      </Container>
      <Footer />
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
