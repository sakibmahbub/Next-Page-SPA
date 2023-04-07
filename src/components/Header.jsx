import React from "react";
import { BoltIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex items-center justify-between py-5">
      {/* Logo Area */}
      <Link to="/" className="inline-flex items-center">
        <BoltIcon className="w-6 h-6 text-blue-500" />
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
          nextPage
        </span>
      </Link>
      {/* Nav Link Area */}
      <ul className="items-center font-bold hidden space-x-8 lg:flex">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "default"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "default"
            }
          >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "default"
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
