import Link from "next/link";
import React from "react";
import {
  aside,
  description,
  descriptionApp,
  descriptionLogo,
  iconOfFunctionsOfApp,
  linkOfFunctionsOfApp,
  linkOfListApp,
  listApps,
  listFunctionsOfApps,
  listNavOfFunctionsOfApp,
  logo,
} from "./Aside.css";
import { FcGoogle } from "react-icons/fc";
import { FaFigma, FaDesktop } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { MdPhotoCamera, MdOutlineAnalytics } from "react-icons/md";
import { TbGraph } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { IoAddCircleOutline } from "react-icons/io5";
import { LiaRedditAlien } from "react-icons/lia";
import { CiTwitter } from "react-icons/ci";
import { RiMenu5Fill, RiLoopLeftLine } from "react-icons/ri";
import { icon, iconMark, mark } from "../../style/GlobalStyle.css";
import { RiApps2Line } from "react-icons/ri";

const Aside = () => {
  return (
    <aside className={aside}>
      <nav>
        <ul className={listApps}>
          <li className={linkOfListApp}>
            <Link className={linkOfListApp} href={""}>
              <FaFigma />
            </Link>
          </li>
          <li className={linkOfListApp}>
            <Link className={linkOfListApp} href={""}>
              <FcGoogle />
            </Link>
          </li>
          <li className={linkOfListApp}>
            <Link className={linkOfListApp} href={""}>
              <CiTwitter className={icon} />
            </Link>
          </li>
          <li className={linkOfListApp}>
            <Link className={linkOfListApp} href={""}>
              <LiaRedditAlien className={icon} />
            </Link>
          </li>
          <li className={linkOfListApp}>
            <Link className={linkOfListApp} href={""}>
              <IoAddCircleOutline className={icon} />
            </Link>
          </li>
        </ul>
      </nav>
      <div className={listFunctionsOfApps}>
        <div className={description}>
          <div className={descriptionLogo}>
            <img className={logo} src="/logo.png" alt="logo" />
            <p className={mark}>Navio</p>
          </div>
          <RiMenu5Fill className={iconMark} />
        </div>
        <div className={descriptionApp}>
          <p className={mark}>Google</p>
          <BsThreeDots className={iconMark} />
        </div>
        <nav className={listNavOfFunctionsOfApp}>
          <ul className={listNavOfFunctionsOfApp}>
            <li>
              <Link className={linkOfFunctionsOfApp} href={""}>
                <RiApps2Line className={iconOfFunctionsOfApp} />
                <p>Overview</p>
              </Link>
            </li>
            <li>
              <Link className={linkOfFunctionsOfApp} href={""}>
                <FiMail className={iconOfFunctionsOfApp} />
                <p>Mail</p>
              </Link>
            </li>
            <li>
              <Link className={linkOfFunctionsOfApp} href={""}>
                <BiWorld className={iconOfFunctionsOfApp} />
                <p>Travel</p>
              </Link>
            </li>
            <li>
              <Link className={linkOfFunctionsOfApp} href={""}>
                <MdPhotoCamera className={iconOfFunctionsOfApp} />
                <p>Gallery</p>
              </Link>
            </li>
            <li>
              <Link className={linkOfFunctionsOfApp} href={""}>
                <TbGraph className={iconOfFunctionsOfApp} />
                <p>Emergency Cash</p>
              </Link>
            </li>
            <li>
              <Link className={linkOfFunctionsOfApp} href={""}>
                <RiLoopLeftLine className={iconOfFunctionsOfApp} />
                <p>Student Loans</p>
              </Link>
            </li>
            <li>
              <Link className={linkOfFunctionsOfApp} href={""}>
                <MdOutlineAnalytics className={iconOfFunctionsOfApp} />
                <p>Analytics</p>
              </Link>
            </li>
            <li>
              <Link className={linkOfFunctionsOfApp} href={""}>
                <FaDesktop className={iconOfFunctionsOfApp} />
                <p>Domains</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Aside;
