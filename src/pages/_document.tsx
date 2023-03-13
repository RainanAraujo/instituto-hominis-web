import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="O Instituto Hominis é uma organização sem fins lucrativos que tem como objetivo promover a educação e a cultura, por meio de projetos que visam a inclusão social e a geração de renda."
          />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta
            property="og:image"
            content="https://www.institutohominis.org.br/images/thumbnail.jpg"
          />

          <meta property="og:image:width" content="120" />
          <meta property="og:image:height" content="86" />
          <meta property="og:site_name" content="Instituto Hominis" />
          <meta property="og:title" content="Instituto Hominis" />
          <meta
            property="og:description"
            content="O Instituto Hominis é uma organização sem fins lucrativos que tem como objetivo promover a educação e a cultura, por meio de projetos que visam a inclusão social e a geração de renda."
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:url" content="https://institutohominis.org.br" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
