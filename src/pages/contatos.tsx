import Head from "next/head";

interface ContatosProps {
  texto: string;
}

export default function Contatos({ texto }: ContatosProps) {
  return (
    <>
      <Head>
        <title>Contatos</title>
      </Head>
      <main></main>
    </>
  );
}
