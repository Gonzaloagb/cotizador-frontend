import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* GTM SCRIPT HEAD */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-KGQQ2PVC'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KGQQ2PVC');
            `,
          }}
        />

        {/* Estilos y links */}
        <link rel="stylesheet" href="/plugins/bulma/bulma.min.css" />
        <link rel="stylesheet" href="/plugins/themify-icons/themify-icons.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Honk&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/Logo.png" />
      </Head>
      <body>
        {/* GTM NOSCRIPT */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGQQ2PVC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
