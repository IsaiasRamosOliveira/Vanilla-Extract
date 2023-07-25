import Link from "next/link";
import React from "react";
import { aside } from "./Aside.css";

const Aside = () => {
  return (
    <aside className={aside}>
      <nav>
        <ul>
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
    </aside>
  );
};

export default Aside;
