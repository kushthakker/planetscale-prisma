import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="w-screen h-screen overflow-y-auto dark">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=Oswald&display=swap"
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
}

export default MyDocument;
