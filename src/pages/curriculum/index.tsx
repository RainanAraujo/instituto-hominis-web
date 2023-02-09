import { Container } from "@/styles/pages/Curriculum";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Curriculum() {
    return (
        <>
            <Header />
            <Container className="limitWidth">
                <div>
                    <h1>Envie nos seu currículo</h1>
                    <p>
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth, the master-builder of human happiness. No one
                        rejects, dislikes, or avoids pleasure itself.
                    </p>
                </div>
                <form action="" method="post">
                  <div className="campo">
                      <label htmlFor="inome">Nome *</label>
                      <input type="text" name="nome" id="inome" autoComplete="username" required />
                  </div>
                  <div className="campo">
                      <label htmlFor="iemail">E-mail *</label>
                      <input type="email" name="email" id="iemail" autoComplete="email" required />
                  </div>
                  <div className="campo">
                      <label htmlFor="icurrículo">Seu currículo *</label>
                      <input type="file" name="currículo" id="icurrículo" required />
                  </div>
                    <Button>Enviar</Button>
                </form>
            </Container>
            <Footer />
        </>
    );
}
