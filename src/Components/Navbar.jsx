import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-11/12 z-10">
      <div className="navbar bg-base-100 rounded-4xl shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
            </ul>
          </div>
          <div className="text-2xl ml-3 font-bold">
            <Link to="/">
              <span className="text-blue-600"> Manha</span>{" "}
              <span className="text-pink-500">Enterprise</span>{" "}
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-3">
          <a
            href="#contact"
            className="btn btn-sm md:btn-md bg-blue-600 hover:bg-blue-700 text-white"
          >
            Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
