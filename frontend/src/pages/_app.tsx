import type { AppProps } from "next/app";
import "../style/GlobalStyle.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
