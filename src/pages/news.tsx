import Head from "next/head";
import { Container, Noticia } from "@/styles/pages/News";
import Header from "@/components/Header";

export default function News() {
  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <Header color="secondary" />
      <Container>
        <div className="background"></div>
        <Noticia>
          <div className="titulo">
            <h1>Título da postagem aqui teste para título</h1>
            <p>05 JAN</p>
          </div>
          <div className="imagem">
            <div className="img"></div>
            <p>Por Instituto Hominis</p>
          </div>
          <div className="descricao">
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter Consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?
            </p>
          </div>
        </Noticia>
      </Container>
    </>
  );
}
