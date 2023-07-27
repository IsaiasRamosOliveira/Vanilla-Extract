import type { NextPage } from "next";
import Menu from "../components/Menu";
import { messages } from "../style/Home.css";
import Message from "../components/Message";
const Home: NextPage = () => {
  
  return (
    <section>
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
    </section>
  );
};

export default Home;
