import type { NextPage } from "next";
import Menu from "../components/Menu";
import { container, messages } from "../style/Home.css";
import Message from "../components/Message";
import Actions from "../components/Actions";
const Home: NextPage = () => {
  return (
    <section className={container
    }>
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
