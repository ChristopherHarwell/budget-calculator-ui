import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsJustify } from "react-icons/bs";

function Header() {
  return (
    <div className="flex justify-between items-center ">
      <Link to="/">
        <BiArrowBack />
      </Link>
      <Link to="/card">
        <BsJustify />
      </Link>
    </div>
  );
}

export default Header;
