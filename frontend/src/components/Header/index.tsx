import Link from "next/link";
import React from "react";
import { header, list } from "./Header.css";

const Header = () => {
  return (
    <header className={header}>
      <nav>
        <ul className={list}>
          <li>
            <Link href={""}>link</Link>
          </li>
          <li>
            <Link href={""}>link</Link>
          </li>
          <li>
            <Link href={""}>link</Link>
          </li>
          <li>
            <Link href={""}>link</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <Link href={""}>link</Link>
      </nav>
    </header>
  );
};

export default Header;
