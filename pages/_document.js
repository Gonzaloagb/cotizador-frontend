// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="stylesheet" href="/plugins/bulma/bulma.min.css" />
        <link rel="stylesheet" href="/plugins/themify-icons/themify-icons.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Honk&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/Logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
