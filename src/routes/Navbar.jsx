import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <div className="flex-column justify-evenly items-center">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={`/`} className="btn btn-ghost normal-case text-xl">
            The Fine Art
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to={`music`}>Music</Link>
            </li>
            <li>
              <Link to={`art`}>Art</Link>
            </li>
            <li>
              <Link to={`literature`}>Literature </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
