import React, { useEffect } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { itemselected } from "../../Slices/Itemselection";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Card() {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.daily.Data);
  const selected = [];
  function getItems() {
    for (const [key, value] of Object.entries(selectedItem)) {
      console.log(key);
      selected.push(key);
    }
  }
    getItems();


  return (
    <div className="p-5  flex flex-col justify-between md:w-[500px] mx-auto rounded">
      <Header />
      <br />
      <br />
      <SearchBar border="rounded-md" />

      <div className="my-4">
        {selected.map((item) => (
        <Link to="/" onClick={() => dispatch(itemselected(item))}>
        <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
          <p className="ml-4">{item}</p>
        </div>
      </Link>
      ))}

        
      </div>
    </div>
  );
}
