import React from "react";
import { content } from "./Content.css";

interface IContent {
  children: React.ReactElement;
}

const Content = ({ children }: IContent) => {
  return <section className={content}>{children}</section>;
};

export default Content;
