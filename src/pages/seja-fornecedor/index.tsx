import { Container } from "@/styles/pages/Fornecedor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Head from "next/head";

export default function sejaFornecedor() {
    return (
        <>
            <Head>
                <title>fornecedor</title>
            </Head>
            <Header />
            <Container>
                <div className="header">
                    <h1>Seja um fornecedor!</h1>
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
                    <Button>Enviar</Button>
                </form>
            </Container>
            <Footer />
        </>
    );
}
