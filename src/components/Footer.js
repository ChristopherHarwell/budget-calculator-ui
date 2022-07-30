import React from "react";
import { IoIosHome } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { BiUser } from "react-icons/bi";

function Footer() {
  return (
    <div className="flex items-center justify-between mt-4">
      <div>
        <IoIosHome />
      </div>
      <div>
        <IoIosStats />
      </div>{" "}
      <div>
        <FiPlus />
      </div>
      <div>
        <FaRegBell />
      </div>{" "}
      <div>
        <BiUser />
      </div>
    </div>
  );
}

export default Footer;
