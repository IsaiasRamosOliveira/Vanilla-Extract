import React from "react";
import { container } from "./Container.css";

interface IContainer {
  children: React.ReactNode;
}
const Container = ({ children }: IContainer) => {
  return <main className={container}>{children}</main>;
};

export default Container;
