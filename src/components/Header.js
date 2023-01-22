import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const location = useLocation();
  const pathNameRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <header className="border-b shadow-sm bg-gray-800">
      <div className="flex justify-between items-center p-5 max-w-6xl mx-auto">
        <Link to="/">
          <img className="h-7" src={logo} alt="logo" />
        </Link>
        <ul className="flex space-x-10 text-white">
          <Link
            className={`border-b-[3px] border-transparent font-semibold ${
              pathNameRoute("/") && "border-red-500"
            }`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`border-b-[3px] border-transparent font-semibold ${
              pathNameRoute("/offers") && "border-red-500"
            }`}
            to="/offers"
          >
            Offers
          </Link>
          <Link
            className={`border-b-[3px] border-transparent font-semibold ${
              pathNameRoute("/sign-in") && "border-red-500"
            }`}
            to="/sign-in"
          >
            Sign In
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
