import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import axios from "axios";
import { FadeLoader } from "react-spinners";

import { Route, Link, Routes, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { weeklydataCall } from "../../Slices/weeklySlice";
import { monthlydataCall } from "../../Slices/monthlySlice";
import { dailydataCall } from "../../Slices/dailySlice";
import { itemselected } from "../../Slices/Itemselection";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const dailyData = useSelector((state) => state.daily.Data);

  const monthlyData = useSelector((state) => state.monthly.Data);
  const weeklyData = useSelector((state) => state.weekly.Data);
  const selectedItem = useSelector((state) => state.selectedItem.selectedItem);

  const [valueselected, setvalueSelected] = useState();
  const [val, setval] = useState("Daily");

  useEffect(() => {
    if (dailyData == null) {
      setvalueSelected();
    } else {
      setvalueSelected(dailyData[selectedItem]);
    }
    // dailyData[selectedItem]
  }, [dailyData]);

  useEffect(() => {
    const getdailyData = async () => {
      axios
        .get("http://localhost/daily-budget")

        .then((response) => {
          console.log("Date created: ", response.data);
          dispatch(dailydataCall(response.data));
        });
    };
    const getweeklyData = async () => {
      axios
        .get("http://localhost/weekly-budget")

        .then((response) => {
          console.log("Date created: ", response.data);
          dispatch(weeklydataCall(response.data));
        });
    };

    const getmonthlyData = async () => {
      axios
        .get("http://localhost/monthly-budget")

        .then((response) => {
          console.log("Date created: ", response.data);
          dispatch(monthlydataCall(response.data));
        });
    };

    getmonthlyData();
    getdailyData();
    getweeklyData();

    takeValue("Daily");
  }, []);

  const takeValue = (value) => {
    if (value === "Monthly") {
      setvalueSelected(monthlyData[selectedItem]);
      setval("Monthly");
    } else if (value === "Weekly") {
      setvalueSelected(weeklyData[selectedItem]);
      setval("Weekly");
    } else {
      setvalueSelected(dailyData[selectedItem]);

      setval("Daily");
    }
  };

  return (
    <>
      {
      valueselected ?
     

      <div className="p-5 h-full flex flex-col justify-between md:w-[500px] mx-auto">
        <Header />
        <SearchBar />
        <div className="my-4">
          <h3 className="text-2xl font-bold my-2">Balance</h3>
          <div className="flex items-center justify-evenly font-bold my-2">
            <p
              className={`cursor-pointer p-1 ${
                val === "Daily" && "border-b-[#6D5FFE] border-b-4 "
              }`}
            >
              Daily
            </p>
            <p
              className={`cursor-pointer p-1   ${
                val === "Weekly" && "border-b-[#6D5FFE] border-b-4"
              }`}
            >
              Weekly
            </p>
            <p
              className={`cursor-pointer p-1 ${
                val === "Monthly" && "border-b-[#6D5FFE] border-b-4"
              }`}
            >
              Monthly
            </p>
          </div>
        </div>
        <div className="bg-white shadow-xl w-full h-[300px] my-4 p-2">
          <select
            className="bg-[#EFF0FC] px-3 py-2 rounded-lg"
            defaultValue="Daily"
            onChange={(e) => takeValue(e.target.value)}
          >
            <option value="Daily" selected>
              Daily
            </option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
          <div className="w-[150px] h-[150px] rounded-full mx-auto border-[12px] border-[#6D5FFE] flex items-center justify-center my-4">
            <p style={{ maxWidth: "100px", overflow: "hidden" }}>
              {" "}
              {valueselected}{" "}
            </p>
          </div>
        </div>
        <Footer />
      </div>

     
      
:
<div className="flex justify-center items-center h-screen">
<FadeLoader></FadeLoader>
</div> 
   
            }
      </>
  );
}
