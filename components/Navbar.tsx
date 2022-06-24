import Link from "next/link";
import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="bg-black flex flex-row gap-3 w-max px-7 py-3 z-[2] fixed left-1/2 -translate-x-2/4 bottom-8 rounded-3 backdrop-blur-lg">
      <Link href="/#">
        <a
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
      </Link>
      <Link href="/#about">
        <a
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
      </Link>
      <Link href="/#experience">
        <a
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiBook />
        </a>
      </Link>
      <Link href="/#services">
        <a
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
      </Link>
      <Link href="/#contact">
        <a
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
