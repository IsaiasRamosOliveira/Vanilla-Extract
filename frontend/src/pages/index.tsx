import type { NextPage, NextPageContext } from "next";
import Menu from "../components/Menu";
import { container, messages } from "../style/Home.css";
import Message from "../components/Message";
import Actions from "../components/Actions";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useQuery } from "@tanstack/react-query";
import { IMessage } from "../interfaces/IMessage";
import { v4 as uuid } from "uuid";
import messagesService from "../services/http/messagesService";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["messages"],
    queryFn: messagesService.getAllMessages,
  });
  return (
    <section className={container}>
      <Menu />
      <div className={messages}>
        {isLoading ? (
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "aliceblue",
              height: "50vh",
            }}
          >
            Sem mensagens
          </span>
        ) : (
          data?.map((message: IMessage) => (
            <Message
              description={message.description}
              to={message.to}
              from={message.from}
              key={uuid()}
              id_user={message.id_user}
              createdAt={message.createdAt}
            />
          ))
        )}
      </div>
      <Actions />
    </section>
  );
};

export default Home;
