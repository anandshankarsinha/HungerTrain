import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import hungerbglogo from "../../src/hungerbglogo.png";
function Title() {
  return (
    <div className="title p-2 w-36 h-28 ">
      <img id="title" data-testid="logo" key="h2" src={hungerbglogo} alt="Not ren"/>
      {/* <img src="../../src/hungerbglogo.png" alt="" /> */}
    </div>
  );
}

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header flex justify-between bg-[#FFB001] shadow-lg sm:bg-[#FFB060] md:bg-[#FFB000]">
      <Title />
      <div className="nav-items">
        <ul className="flex py-8 mx-2 text-lg font-bold text-[#C51605]">
          <li className="px-2 mx-2">
            <Link to="/">Home</Link>
          </li>
          <Link to="/about">
            <li className="px-2 mx-2">About</li>
          </Link>
          <li className="px-2 mx-2">
            <Link to="/contact">Contact</Link>
          </li>
          <Link to="/instamart">
            <li className="px-2 mx-2">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-2 mx-2" data-testid="cart">
              Cart - {cartItems.length} items
            </li>
          </Link>
        </ul>
      </div>
      <h1 data-testid="online-status" className="mt-8 ">{isOnline ? "✅" : "❌"}</h1>
      {/* <span className="p-10 font-bold text-red-400">
        {user.name} - {user.email}
      </span> */}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)} className="mx-4 font-serif first-letter:font-bold">Log Out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)} className="mx-4 font-serif first-letter:font-bold">Log In</button>
      )}
    </div>
  );
};

export default HeaderComponent;
