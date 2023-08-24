import React from "react";
import { button, icon, message, messageBtns } from "./Message.css";
import { useState } from "react";
import { PiStarLight, PiStarFill } from "react-icons/pi";
import { checkout } from "../../style/GlobalStyle.css";

interface IMessage {
  user: string;
  to: string;
  from: string;
  description: string;
}

const Message = ({ user, to, from, description }: IMessage) => {
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
        <p>Dribble</p>
      </div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      <div>8:00 PM</div>
    </div>
  );
};

export default Message;
