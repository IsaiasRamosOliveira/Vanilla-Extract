import type { AppProps } from "next/app";
import "../style/GlobalStyle.css";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Content from "../patterns/Content";
import Container from "../patterns/Container";
import Head from "next/head";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../services/queryClient";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Head>
          <title>Navio</title>
        </Head>
        <Header />
        <Aside />
        <Content>
          <Component {...pageProps} />
        </Content>
      </Container>
    </QueryClientProvider>
  );
}

export default MyApp;
