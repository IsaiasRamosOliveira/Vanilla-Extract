import React, { useState } from "react";
import { BsFillInboxFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { PiStarLight, PiStarFill } from "react-icons/pi";
import { IoSend } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { button, buttonCompose, icon, iconCompose, menu, nav } from "./Menu.css";

const Menu = () => {
  const [starred, setStarred] = useState(false);
  return (
    <div className={menu}>
      <ul className={nav}>
        <li>
          <button className={button}>
            <BsFillInboxFill className={icon} />
            <p>Inbox</p>
          </button>
        </li>
        <li>
          <button className={button} onClick={() => setStarred(starred ? false : true)}>
            {!starred ? <PiStarLight className={icon} /> : <PiStarFill className={icon} />}
            <p>Starred</p>
          </button>
        </li>
        <li>
          <button className={button}>
            <AiOutlineClockCircle className={icon} />
            <p>Snoozed</p>
          </button>
        </li>
        <li>
          <button className={button}>
            <IoSend className={icon} />
            <p>Sent</p>
          </button>
        </li>
        <li>
          <button className={button}>
            <FaRegEdit className={icon} />
            <p>Draft</p>
          </button>
        </li>
      </ul>
      <button className={buttonCompose}>
        <IoMdAdd className={iconCompose} />
        <p>Compose</p>
      </button>
    </div>
  );
};

export default Menu;
