import React from "react";
import { button, icon, message, messageBtns } from "./Message.css";
import { useState } from "react";
import { PiStarLight, PiStarFill } from "react-icons/pi";
import { checkout } from "../../style/GlobalStyle.css";
import { IMessage } from "../../interfaces/IMessage";

const Message = ({ id_user, to, from, description, createdAt }: IMessage) => {
  const [starred, setStarred] = useState(false);
  return (
    <div className={message}>
      <div className={messageBtns}>
        <input
          className={checkout}
          type="checkbox"
          name="message"
          id="message"
        />
        <button
          className={button}
          onClick={() => setStarred(starred ? false : true)}
        >
          {!starred ? (
            <PiStarLight className={icon} />
          ) : (
            <PiStarFill className={icon} />
          )}
        </button>
        <p>{from}</p>
      </div>
      <div>{description}</div>
      <div>{new Date(createdAt).toLocaleTimeString()}</div>
    </div>
  );
};

export default Message;
