import React from "react";
import { useContext } from "react";
import { CMSContext } from "../useContetful";
import { Breadcrumbs } from "@material-tailwind/react";

export default function Literature() {
  const { literature } = useContext(CMSContext);
  return (
    <div>
      <h2>literature</h2>
    </div>
  );
}
