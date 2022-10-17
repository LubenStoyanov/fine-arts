import { sample } from "lodash";
import { useLoaderData } from "react-router-dom";
import useContentful from "../data/useContentful";

export async function loader() {
  const { getArt } = useContentful();
  const art = await getArt();
  return { art };
}
const RandomArt = () => {
  const { data } = useLoaderData();
  return <div>RandomArt</div>;
};

export default RandomArt;
