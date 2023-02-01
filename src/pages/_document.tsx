import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
      <Html lang="pt-br">
          <Head>
              <meta charSet="utf-8" />
              <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.ico" />
              <link
                  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
                  rel="stylesheet"
              />
          </Head>
          <body>
              <Main />
              <NextScript />
          </body>
      </Html>
  );
}
