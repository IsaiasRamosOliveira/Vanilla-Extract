import React from "react";
import { action, button, list } from "./Actions.css";
import { BsThreeDots } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { PiWarningOctagonLight } from "react-icons/pi";
import { HiInboxArrowDown } from "react-icons/hi2";
import { checkout } from "../../style/GlobalStyle.css";

const Actions = () => {
  return (
    <div className={action}>
      <ul className={list}>
        <li>
          <input className={checkout} type="checkbox" name="message" id="message" />
        </li>
        <li>
          <button className={button}>
            <HiInboxArrowDown />
          </button>
        </li>
        <li>
          <button className={button}>
            <PiWarningOctagonLight />
          </button>
        </li>
        <li>
          <button className={button}>
            <RiDeleteBin5Line />
          </button>
        </li>
        <li>
          <button className={button}>
            <BsThreeDots />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Actions;
