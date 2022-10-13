import React from "react";
import { useContext } from "react";
import { CMSContext } from "../useContetful";

export default function Music() {
  const { music } = useContext(CMSContext);
  console.log(music);
  return (
    <div>
      <h2>Music</h2>
    </div>
  );
}
