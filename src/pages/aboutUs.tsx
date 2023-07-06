import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { FileText } from 'phosphor-react'
import { Container } from '@/styles/pages/AboutUs'
import Head from 'next/head'

interface AboutUsProps {
  texto: string
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
          <h1>Somos o Instituto Hominis, uma organização dedicada à gestão compartilhada da saúde.</h1>
          <div className="rightText">
            <strong>
              Nossa missão é contribuir para o fortalecimento do sistema de saúde, promovendo o acesso universal, integral e de qualidade
              aos serviços de saúde para a população.
            </strong>
            <p>
              Nosso trabalho consiste em desenvolver e implementar soluções inovadoras e eficientes para a gestão de serviços de saúde,
              atuando em parceria com governos, organizações sociais e empresas privadas. Trabalhamos com um time multidisciplinar de
              profissionais especializados em saúde pública, administração e gestão de projetos. Seja bem-vindo ao Instituto Hominis.
              Junte-se a nós na construção de um sistema de saúde mais justo e acessível para todos.
            </p>
          </div>
        </div>
        <h1 className="titleCertificates">Qualificações e Certificações</h1>
        <div className="certificates limitWidth">
          <div className="background"></div>

          <div className="cardCertificates">
            <div className="header">
              <FileText size={32} />
              <h2>Qualificação como Organização Social (OS) - Secretaria de Estado de Saúde (MA)</h2>
            </div>

            <span>Portaria/SES/MA nº 1272/2022</span>
          </div>
          {/* <div className="cardCertificates">
            <div className="header">
              <FileText size={32} />
              <h2>
                Certificado de Entidade Beneficente de Assistência Social em
                Saúde (CEBAS) - Ministério da Saúde
              </h2>
            </div>

            <span>Em processo de conclusão</span>
          </div> */}
        </div>
        <div className="compromisse limitWidth">
          <h1>Nosso compromisso</h1>
          <span>
            Nosso compromisso é com a transparência e a ética em todas as nossas atividades, sempre pautados pelos princípios da equidade,
            da justiça social e da promoção da saúde como direito humano fundamental.
          </span>
        </div>
        {/* <div className="classifications limitWidth">
          <h1>Qualificações e Certificações</h1>
          <div className="qualifications">
            <div className="quali">
              <h2></h2>
              <span></span>
            </div>
            <div className="quali">
              <h2></h2>
              <span></span>
            </div>
          </div>
        </div> */}
      </Container>
      <Footer />
    </>
  )
}
