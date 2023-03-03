import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FileText } from "phosphor-react";
import { Container } from "@/styles/pages/AboutUs";
import Head from "next/head";

interface AboutUsProps {
  texto: string;
}

export default function AboutUs({ texto }: AboutUsProps) {
  return (
    <>
      <Head>
        <title>Sobre nós</title>
      </Head>
      <Header />
      <Container>
        <div className="head limitWidth">
          <h1>
            Uma gestão compartilhada da saúde em conjunto ao poder público, nas
            esferas municipais, estaduais e federais.
          </h1>
          <span>
            Disponibilizamos ao poder público modelos eficientes de gestão de
            pessoas, serviços, hospitais e demais equipamentos de saúde,
            adotando modelos de excelência e práticas inovadoras, através de uma
            equipe multidisciplinar e especialista focada em atendimento
            humanizado na prestação de serviços de qualidade, gerando assim
            resultados expressivos para toda a sociedade.
          </span>
        </div>
        <h1 className="titleCertificates">Atestados de capacidade técnica</h1>
        <div className="certificates limitWidth">
          <div className="background"></div>
          <div className="cardCertificates">
            <div className="header">
              <FileText size={32} />
              <h2>Hospital de Câncer Tarquínio Lopes Filho</h2>
            </div>

            <span>Empresa Maranhense de Serviços Hospitalares - EMSERH</span>
          </div>
          <div className="cardCertificates">
            <div className="header">
              <FileText size={32} />
              <h2>Policlínica Vila Luizão</h2>
            </div>

            <span>
              Ultrassonografia - Empresa Maranhense de Serviços Hospitalares -
              EMSERH
            </span>
          </div>
          <div className="cardCertificates">
            <div className="header">
              <FileText size={32} />
              <h2>Hospital Geral de Barreirinhas</h2>
            </div>

            <span>
              Cardiologia - Empresa Maranhense de Serviços Hospitalares - EMSERH
            </span>
          </div>
        </div>
        <div className="compromisse limitWidth">
          <h1>Nosso compromisso</h1>
          <span>
            Cumprir com competência nossos contratos de gestão, dando
            efetividade e promovendo melhorias contínuas nos serviços prestados,
            de maneira que se promova uma saúde com mais dignidade e maior
            cuidado com as pessoas.
          </span>
        </div>
        <div className="classifications limitWidth">
          <h1>Qualificações e Certificações</h1>
          <div className="qualifications">
            <div className="quali">
              <h2>
                Qualificação como Organização Social (OS) - Secretaria de Estado
                de Saúde (MA)
              </h2>
              <span>Portaria/SES/MA nº 1272/2022</span>
            </div>
            <div className="quali">
              <h2>
                Certificado de Entidade Beneficente de Assistência Social em
                Saúde (CEBAS) - Ministério da Saúde
              </h2>
              <span>Em processo de conclusão</span>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
