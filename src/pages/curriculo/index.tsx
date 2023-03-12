import { Container } from "@/styles/pages/Curriculo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Head from "next/head";
import * as Select from "@radix-ui/react-select";
import React from "react";
import classnames from "classnames";
import { CaretDown, CaretUp, Check } from "phosphor-react";

export default function Curriculo() {
  const [nameFile, setNameFile] = React.useState(
    "Clique para anexar o currículo"
  );

  interface SelectItemProps extends React.ComponentProps<typeof Select.Item> {
    value: string;
    children: React.ReactNode;
    className?: string;
  }

  const SelectItem = React.forwardRef(
    (
      { value, children, className, ...props }: SelectItemProps,
      forwardedRef: React.Ref<HTMLDivElement>
    ) => {
      return (
        <Select.Item
          value={value}
          {...props}
          ref={forwardedRef}
          onClick={(e) => e.stopPropagation()}
          className={classnames("SelectItem", className)}
        >
          <Select.ItemText>{children}</Select.ItemText>
          <Select.ItemIndicator className="SelectItemIndicator">
            <Check />
          </Select.ItemIndicator>
        </Select.Item>
      );
    }
  );
  return (
    <>
      <Head>
        <title> Faça parte</title>
      </Head>
      <Header />
      <Container className="limitWidth">
        <div className="header">
          <h1> Faça parte do Hominis</h1>
          <strong>
            Você é uma pessoa apaixonada por ajudar os outros e que deseja fazer
            a diferença no mundo?
          </strong>
          <p>
            Se você deseja fazer parte de um grupo de pessoas que compartilha
            dos mesmos valores e objetivos que você, então o Instituto Hominis é
            o lugar certo para você. Estamos constantemente buscando talentos
            que compartilhem dos nossos valores e objetivos, que possuam
            habilidades e experiências diversas, e que possam agregar valor e
            contribuir para nossos projetos em andamento e futuros. Se você
            deseja se juntar a um time engajado e dedicado a construir um mundo
            melhor, envie seu currículo para o Instituto Hominis.
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
            <label>Seu currículo *</label>
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
          <div className="campo">
            <label htmlFor="iarea">Seletivos *</label>
            <Select.Root required>
              <Select.Trigger className="SelectTrigger" aria-label="Food">
                <Select.Value placeholder=" Não disponível" />
                <Select.Icon className="SelectIcon">
                  <CaretDown />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="SelectContent">
                  <Select.ScrollUpButton className="SelectScrollButton">
                    <CaretUp />
                  </Select.ScrollUpButton>
                  <Select.Viewport className="SelectViewport">
                    <Select.Group>
                      <SelectItem value="apple" disabled>
                        Não disponível
                      </SelectItem>
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
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

          <Button className="submit">Enviar</Button>
        </form>
      </Container>
      <Footer />
    </>
  );
}
