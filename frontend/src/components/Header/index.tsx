import Link from "next/link";
import React from "react";
import { header, img, input, list, profile, search } from "./Header.css";
import { BsSearch, BsChatDots } from "react-icons/bs";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { icon, iconMark, mark } from "../../style/GlobalStyle.css";
const Header = () => {
  return (
    <header className={header}>
      <div className={search}>
        <BsSearch className={icon} />
        <input
          className={input}
          type="text"
          placeholder="What are you lookin for?"
        />
      </div>
      <nav>
        <ul className={list}>
          <li>
            <Link href={""}>
              <BsChatDots className={iconMark} />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <MdOutlineNotificationsNone className={iconMark} />
            </Link>
          </li>
          <li>
            <Link href={""} className={profile}>
              <p>Hi, <span className={mark}>Isaías</span></p>
              <img className={img} src="/perfil.jpg" alt="foto de perfil" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
