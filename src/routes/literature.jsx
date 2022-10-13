import React from "react";
import { useContext } from "react";
import { CMSContext } from "../useContetful";

export default function Literature() {
  const { literature } = useContext(CMSContext);
  console.log(literature);
  return <div>literature</div>;
}
