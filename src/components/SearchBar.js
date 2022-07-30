import React from "react";
import { IoMdSearch } from "react-icons/io";

function SearchBar(props) {
  return (
    <div className={`flex items-center justify-start gap-4 bg-[#EFF0FC] p-3 my-2 ${props.border}`}>
      <IoMdSearch color="black" size={30} />
      <input
        type="text"
        placeholder="Search"
        className="outline-none bg-transparent w-full"
      />
    </div>
  );
}

export default SearchBar;
