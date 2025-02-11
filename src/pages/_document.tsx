import Document, { Html, Head, Main, NextScript } from 'next/document';
import Navbar from './components/Navbar';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          {/* Aqui você pode adicionar outras tags meta ou links externos */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
                /* Configuração para evitar problemas com styled-components SSR */
                body { margin: 0; font-family: sans-serif; }
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;