import '../styles/style.css';
import Script from 'next/script';
import { CotizacionProvider } from '../context/CotizacionContext';
import CotizacionPanel from '../components/CotizacionPanel';
import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* GTM HEAD SCRIPT - HARDCODEADO */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
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

      <AuthProvider>
        <CotizacionProvider>
          <CotizacionPanel />
          <Component {...pageProps} />
          <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
          <Script src="/js/script.js" strategy="afterInteractive" />
        </CotizacionProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
