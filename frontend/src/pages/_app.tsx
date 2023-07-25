import type { AppProps } from "next/app";
import "../style/GlobalStyle.css";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Content from "../patterns/Content";
import Container from "../patterns/Container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Aside />
      <Content>
        <Component {...pageProps} />
      </Content>
    </Container>
  );
}

export default MyApp;
