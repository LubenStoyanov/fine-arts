import { sample } from "lodash";
import { useLoaderData } from "react-router-dom";
import useContentful from "../data/contentful";

export async function loader() {
  const { getArt } = useContentful();
  const art = await getArt();
  return { art };
}
const RandomArt = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <img
        src={art.fields.artwork[0].fields.file.url}
        className="max-w-sm rounded-lg shadow-2xl"
      />
    </div>
  );
};

export default RandomArt;
