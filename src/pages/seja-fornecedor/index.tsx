import { Container } from "@/styles/pages/Fornecedor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Head from "next/head";
import { useRef } from "react";

export default function SejaFornecedor() {
  const cpnjRef = useRef<HTMLInputElement>(null);

  function validateCNPJ(cnpj: any) {
    cnpj = cnpj.replace(/[^\d]+/g, "");
    if (cnpj == "") return false;
    if (cnpj.length != 14) return false;
    if (
      cnpj == "00000000000000" ||
      cnpj == "11111111111111" ||
      cnpj == "22222222222222" ||
      cnpj == "33333333333333" ||
      cnpj == "44444444444444" ||
      cnpj == "55555555555555" ||
      cnpj == "66666666666666" ||
      cnpj == "77777777777777" ||
      cnpj == "88888888888888" ||
      cnpj == "99999999999999"
    )
      return false;
    var tamanho = cnpj.length - 2;
    var numeros = cnpj.substring(0, tamanho);
    var digitos = cnpj.substring(tamanho);
    var soma = 0;
    var pos = tamanho - 7;
    for (var i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }
    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(0)) return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (var i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(1)) return false;
    return true;
  }
  return (
    <>
      <Head>
        <title>Seja um fornecedor</title>
      </Head>
      <Header />
      <Container>
        <div className="header">
          <h1>Seja um fornecedor!</h1>
          {/* <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself.
          </p> */}
        </div>
        <form
          action="https://formsubmit.co/contato@institutohominis.org.br"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="campo">
            <label htmlFor="irazao">Razão social *</label>
            <input
              type="text"
              name="razao"
              id="irazao"
              placeholder="Digite aqui"
              required
            />
          </div>
          <div className="campo">
            <label htmlFor="icnpj">CPNJ *</label>
            <input
              type="text"
              name="cpnj"
              ref={cpnjRef}
              id="icpnj"
              placeholder="Digite aqui"
              required
            />
          </div>
          <div className="campo">
            <label htmlFor="icnaes">
              CNAES (atividades econômicas exercidas) *
            </label>
            <input
              type="text"
              name="cnaes"
              id="icnaes"
              placeholder="Digite aqui"
              required
            />
          </div>
          <div className="campo">
            <label htmlFor="iendereco">Endereço*</label>
            <input
              type="text"
              name="endereco"
              id="iendereco"
              placeholder="Digite aqui"
              autoComplete="address"
              required
            />
          </div>
          <div className="campo">
            <label htmlFor="inome">Nome do responsável*</label>
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
            <label htmlFor="iemail">E-mail para contato *</label>
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
            <label htmlFor="itel">Telefone para contato*</label>
            <input
              type="text"
              name="tel"
              id="itel"
              placeholder="Digite aqui"
              autoComplete="username"
              required
            />
          </div>
          <input type="hidden" name="_subject" value="Fornecedor" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Agradecemos pela submissão"
          ></input>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/seja-fornecedor"
          ></input>
          <Button
            onClick={(e) => {
              if (!validateCNPJ(cpnjRef.current?.value)) {
                alert("CNPJ inválido");
                cpnjRef.current?.focus();

                e.preventDefault();
              }
            }}
          >
            Enviar
          </Button>
        </form>
      </Container>
      <Footer />
    </>
  );
}
