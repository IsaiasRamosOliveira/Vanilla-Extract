import type { NextPage, NextPageContext } from "next";
import Menu from "../components/Menu";
import { container, messages } from "../style/Home.css";
import Message from "../components/Message";
import Actions from "../components/Actions";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { IMessage } from "../interfaces/IMessage";
import {v4 as uuid} from "uuid"

export const getServerSideProps: GetServerSideProps<{
  data: IMessage[];
}> = async () => {
  const dataJSON = await fetch("http://localhost:3001/messages");
  const data: IMessage[] = await dataJSON.json();
  return { props: { data } };
};

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <section className={container}>
      <Menu />
      <div className={messages}>
        {data?.map((message: IMessage) => (
          <Message
            description={message.description}
            to={message.to}
            from={message.from}
            key={uuid()}
            id_user={message.id_user}
            createdAt={message.createdAt}
          />
        ))}
      </div>
      <Actions />
    </section>
  );
};

export default Home;
