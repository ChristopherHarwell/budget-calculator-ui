import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";

import { itemselected } from "../../Slices/Itemselection";
import { useDispatch } from "react-redux";

export default function Card() {
  const dispatch = useDispatch();

  return (
    <div className="p-5  flex flex-col justify-between md:w-[500px] mx-auto rounded">
      <Header />
      <br />
      <br />
      <SearchBar border="rounded-md" />

      <div className="my-4">
        <Link to="/" onClick={() => dispatch(itemselected("Savings"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            />
            <p className="ml-4">Saving</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Contractors"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Contractors</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Office Supplies"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Office Supplies</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Service Fees"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            <p className="ml-4">Service Fees</p>
          </div>
        </Link>

        <Link
          to="/"
          onClick={() => dispatch(itemselected("Software and Web Services"))}
        >
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Software and Web Services</p>
          </div>
        </Link>

        <Link
          to="/"
          onClick={() => dispatch(itemselected("Business Insurance"))}
        >
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Business Insurance</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("QuickBooks"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            <p className="ml-4">QuickBooks</p>
          </div>
        </Link>
        <Link
          to="/"
          onClick={() => dispatch(itemselected("Electronic Accessories"))}
        >
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            <p className="ml-4">Electronic Accessories</p>
          </div>
        </Link>

        <Link
          to="/"
          onClick={() => dispatch(itemselected("Inflow: Ready to Assign"))}
        >
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Inflow: Ready to Assign</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Uncategorized"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Uncategorized</p>
          </div>
        </Link>

        <Link
          to="/"
          onClick={() => dispatch(itemselected("CREDIT CARD (Christopher)"))}
        >
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">CREDIT CARD (Christopher)</p>
          </div>
        </Link>

        <Link
          to="/"
          onClick={() => dispatch(itemselected("CREDIT CARD (Kaylee)"))}
        >
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">CREDIT CARD (Kaylee)</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Abundant Sharing"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Abundant Sharing</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Birthdays"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Birthdays</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Christmas"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Christmas</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Birthdays"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Birthdays</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Investments"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Investments</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("YNAB"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">YNAB</p>
          </div>
        </Link>

        <Link
          to="/"
          onClick={() => dispatch(itemselected("Auto Loan (Christopher)"))}
        >
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Auto Loan (Christopher)</p>
          </div>
        </Link>

        <Link
          to="/"
          onClick={() => dispatch(itemselected("Auto Loan (Kaylee)"))}
        >
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Auto Loan (Kaylee)</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Car Insurance"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Car Insurance</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Life Insurance"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Life Insurance</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("ICloud"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">ICloud</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Internet"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Internet</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Cellphone"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Cellphone</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Childcare"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Childcare</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Eating Out"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Eating Out</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Transportation"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Transportation</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Xbox Live"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Xbox Live</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("ESO"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">ESO</p>
          </div>
        </Link>

        <Link
          to="/"
          onClick={() =>
            dispatch(itemselected("Toiletry and Hygeinic Supplies"))
          }
        >
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Toiletry and Hygeinic Supplies</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Pet Food"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Pet Food</p>
          </div>
        </Link>

        <Link
          to="/"
          onClick={() => dispatch(itemselected("Hair & Beauty Supplies"))}
        >
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Hair & Beauty Supplies</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Books"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Books</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Home Maintenance"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Home Maintenance</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Auto Maintenance"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Auto Maintenance</p>
          </div>
        </Link>

        <Link
          to="/"
          onClick={() => dispatch(itemselected("Debt In Collections"))}
        >
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Debt In Collections</p>
          </div>
        </Link>

        <Link
          to="/"
          onClick={() => dispatch(itemselected("6 Month Emergency Fund"))}
        >
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">6 Month Emergency Fund</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Vacation"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Vacation</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Education"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Education</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Home Investment"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Home Investment</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Fun Money"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Fun Money</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Crafting/Macrome"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4"> Crafting/Macrome</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Alcohol"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Alcohol </p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Hobbies"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Hobbies</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Amazon Prime"))}>
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Amazon Prime</p>
          </div>
        </Link>
        <Link
          to="/"
          onClick={() => dispatch(itemselected("Health & wellness"))}
        >
          <div className="flex flex-start items-center p-2 border-b-backgroundSearch border-b-2">
            {/* <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Fuel.png"
            /> */}
            <p className="ml-4">Health & wellness</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Gas"))}>
          <div className="flex flex-start items-center  p-2  border-b-backgroundSearch border-b-2">
            <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Gas.png"
            />
            <p className="ml-4 text-black">Gas</p>
          </div>
        </Link>
        <Link to="/" onClick={() => dispatch(itemselected("Disney+"))}>
          <div className="flex flex-start items-center p-2  border-b-backgroundSearch border-b-2">
            <img
              className="ml-1 h-[20px] w-[20px]"
              src="./images/icons/Disney.png"
            />
            <p className="ml-4 text-black">Disney+</p>
          </div>
        </Link>
        <Link to="/" onClick={() => dispatch(itemselected("Groceries"))}>
          <div className="flex flex-start p-2 items-center  border-b-backgroundSearch border-b-2">
            <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Grocery.png"
            />
            <p className="ml-4 text-black">Groceries</p>
          </div>
        </Link>
        <Link to="/" onClick={() => dispatch(itemselected("All catageories"))}>
          <div className="flex flex-start p-2 items-center  border-b-backgroundSearch border-b-2">
            <img
              className="ml-1  h-[20px] w-[20px]"
              src="./images/icons/Allcat.png"
            />
            <p className="ml-4 text-black">All catageories</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Electric"))}>
          <div className="flex flex-start p-2 items-center  border-b-backgroundSearch border-b-2">
            <img
              className="ml-1 h-[20px] w-[20px]"
              src="./images/icons/Electric.png"
            />
            <p className="ml-4 text-black">Electric</p>
          </div>
        </Link>

        <Link to="/" onClick={() => dispatch(itemselected("Hulu/Disney+"))}>
          <div className="flex flex-start p-2 items-center  border-b-backgroundSearch border-b-2">
            <img
              className="ml-1 h-[20px] w-[20px]"
              src="./images/icons/Hulu.png"
            />
            <p className="ml-4 text-black">Hulu/Disney+</p>
          </div>
        </Link>
        <Link to="/" onClick={() => dispatch(itemselected("Rent/Mortage"))}>
          <div className="flex flex-start p-2 items-center items-center  border-b-backgroundSearch border-b-2">
            <img
              className="ml-1 h-[20px] w-[20px]"
              src="./images/icons/Rent.png"
            />
            <p className="ml-4 text-black ">Rent/Mortage</p>
          </div>
        </Link>
        <Link to="/" onClick={() => dispatch(itemselected("Dining OVT"))}>
          <div className="flex flex-start p-2 items-center  border-b-backgroundSearch border-b-2">
            <img
              className="ml-1 h-[20px] w-[20px]"
              src="./images/icons/Dining.png"
            />
            <p className="ml-4 text-black">Dining OVT</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
