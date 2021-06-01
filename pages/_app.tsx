// next imports
import { SSRProvider, OverlayProvider } from "react-aria";
import type { AppProps } from "next/app";
// axios config
import "@config/axios-configurations";
// styles
import "@styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SSRProvider>
      <OverlayProvider>
        <Component {...pageProps} />
      </OverlayProvider>
    </SSRProvider>
  );
}
