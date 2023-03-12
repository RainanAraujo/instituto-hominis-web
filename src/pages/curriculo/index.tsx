import { Container } from "@/styles/pages/Curriculo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Head from "next/head";
import React from "react";

export default function Curriculo() {
  const [nameFile, setNameFile] = React.useState(
    "Clique para anexar o currículo"
  );
  return (
    <>
      <Head>
        <title>Envie-nos seu currículo</title>
      </Head>
      <Header />
      <Container className="limitWidth">
        <div className="header">
          <h1>Envie-nos seu currículo</h1>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself.
          </p>
        </div>
        <form
          action="https://formsubmit.co/jadson.hudson78@gmail.com"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="campo">
            <label htmlFor="inome">Nome *</label>
            <input
              type="text"
              name="nome"
              id="inome"
              placeholder="Digite aqui"
              autoComplete="username"
              required
            />
          </div>
          <div className="campo">
            <label htmlFor="iemail">E-mail *</label>
            <input
              type="email"
              name="email"
              id="iemail"
              placeholder="Digite aqui"
              autoComplete="email"
              required
            />
          </div>
          <div className="campo">
            <p>Seu currículo *</p>
            <label htmlFor="icurrículo" id="arquivo">
              {nameFile}
            </label>
            <input
              type="file"
              name="attachment"
              accept="image/png, image/jpeg, application/pdf"
              id="icurrículo"
              required
              onChange={(e) => {
                if (e.target.files) {
                  setNameFile(e.target.files[0].name);
                }
              }}
            />
          </div>
          <input type="hidden" name="_subject" value="Currículo" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Agradecemos pela submissão"
          ></input>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/curriculo"
          ></input>
          <Button>Enviar</Button>
        </form>
      </Container>
      <Footer />
    </>
  );
}
