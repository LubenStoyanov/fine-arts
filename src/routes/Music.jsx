import React from "react";
import { useContext } from "react";
import { CMSContext } from "../data/cmsContext";

export default function Music() {
  const { music } = useContext(CMSContext);
  return (
    <div>
      <h2>Music</h2>
    </div>
  );
}
