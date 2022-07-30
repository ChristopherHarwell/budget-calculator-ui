import { useDispatch, useSelector } from "react-redux";

import { IoMdSearch } from "react-icons/io";
import React from "react";
import { saveResults } from "../Slices/searchResultsSlice";

function SearchBar(props) {

  const dispatch = useDispatch()
  const results = useSelector((state) => state.results);
  
  const queryHandler = (e) => {
    fetchResults(e.target.value);
  };

  const fetchResults = async (query) => {
    fetch(`localhost:8080/daily-budget`)
      .then((response) => response.json())
      .then((data) => dispatch(saveResults(data)))
      .then((data)=>console.log(data));
  };

  return (
    <div className={`flex items-center justify-start gap-4 bg-[#EFF0FC] p-3 my-2 ${props.border}`}>
      <IoMdSearch color="black" size={30} />
      <input
        type="text"
        placeholder="Search"
        className="outline-none bg-transparent w-full"
        onChange={e =>fetchResults(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
