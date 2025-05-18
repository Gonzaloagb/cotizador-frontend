import '../styles/style.css';
import Script from 'next/script';
import { CotizacionProvider } from '../context/CotizacionContext';
import CotizacionPanel from '../components/CotizacionPanel';
import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CotizacionProvider>
        <CotizacionPanel />
        <Component {...pageProps} />
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/js/script.js" strategy="afterInteractive" />
      </CotizacionProvider>
    </AuthProvider>
  );
}

export default MyApp;
