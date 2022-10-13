import React from "react";
import { Link } from "react-router-dom/dist";
import { CMSContext } from "../useContetful";

export default function Root() {
  console.log();
  return (
    <div>
      <Link to={`literature`}>Literature</Link>
      <Link to={`music`}>Music</Link>
      <Link to={`art`}>Art</Link>
    </div>
  );
}
