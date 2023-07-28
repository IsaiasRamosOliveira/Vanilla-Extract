import type { NextPage, NextPageContext } from "next";
import Menu from "../components/Menu";
import { container, messages } from "../style/Home.css";
import Message from "../components/Message";
import Actions from "../components/Actions";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { IMessage } from "../interfaces/IMessage";

export const getServerSideProps: GetServerSideProps<{
  data: IMessage;
}> = async () => {
  const dataJSON = await fetch("http://localhost:3001/users");
  const data = await dataJSON.json();
  return { props: { data } };
};

const Home = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
  return (
    <section className={container}>
      <Menu />
      <div className={messages}>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <Actions />
    </section>
  );
};

export default Home;
