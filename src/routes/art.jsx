import { useContext } from "react";
import { Link } from "react-router-dom/dist";
import { CMSContext } from "../useContetful";

export default function Art() {
  const { art } = useContext(CMSContext);
  console.log(art);
  return (
    <>
      <div>art</div>
      {console.log("inside", art)}
    </>
  );
}
