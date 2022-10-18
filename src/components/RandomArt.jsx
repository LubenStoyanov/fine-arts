import { sample } from "lodash";
import { useLoaderData } from "react-router-dom";
import useContentful from "../data/contentful";

const RandomArt = ({ fart }) => {
  console.log(fart);
  return (
    <div className="basis-1/3">
      <img
        src={fart.fields.artworks[0].fields.file.url}
        className="max-w-sm rounded-lg shadow-2xl"
      />
    </div>
  );
};

export default RandomArt;
