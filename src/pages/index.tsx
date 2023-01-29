/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import { Container } from "../styles/pages/Home";
import Heading from "@/components/Header";

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <title>Home</title>
                
            </Head>
            <Container>
                <Heading />
            </Container>
        </>
    );
}
