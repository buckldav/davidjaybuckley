import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  componentDidMount() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-159039662-1");
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/img/favicon/favicon.ico" />
          <meta
            name="google-site-verification"
            content="i8VX5_urdZHJM-PvClpYg7vhpjOglRB77S2MT6UZQCY"
          />
          <meta name="theme-color" content="#274060" />
          <meta
            name="description"
            content="David Jay Buckley | Web Developer (django, React.js, sass), Jazz Musician (piano, guitar, bass, organ), High School Teacher (computer science, jazz band, private music lessons)"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-159039662-1"
          ></script>
        </Head>
        <body itemScope itemType="https://schema.org/Person">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
