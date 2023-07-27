import React, { useState } from "react";
import { BsFillInboxFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { PiStarLight, PiStarFill } from "react-icons/pi";
import { IoSend } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

const Menu = () => {
  const [starred, setStarred] = useState(false);
  return (
    <div>
      <ul>
        <li>
          <button>
            <BsFillInboxFill />
            <p>Inbox</p>
          </button>
        </li>
        <li>
          <button onClick={() => setStarred(starred ? false : true)}>
            {!starred ? <PiStarLight /> : <PiStarFill />}
            <p>Starred</p>
          </button>
        </li>
        <li>
          <button>
            <AiOutlineClockCircle />
            <p>Snoozed</p>
          </button>
        </li>
        <li>
          <button>
            <IoSend />
            <p>Sent</p>
          </button>
        </li>
        <li>
          <button>
            <FaRegEdit />
            <p>Draft</p>
          </button>
        </li>
      </ul>
      <button>
        <IoMdAdd />
        <p>Compose</p>
      </button>
    </div>
  );
};

export default Menu;
