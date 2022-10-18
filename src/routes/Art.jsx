import { useState } from "react";
import { Link } from "react-router-dom/dist";
import { useLoaderData } from "react-router-dom";
import debounce from "lodash/debounce";
import contentful from "../data/contentful";

export async function loader() {
  const { getArt } = contentful();
  const art = await getArt();
  return { art };
}

export default function Art() {
  const { art } = useLoaderData();
  console.log("art", art);

  return (
    <div className="">
      {art.map((a) => (
        <div key={a.sys.id} className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              onMouseEnter={() => console.log(a.fields.link)}
              src={a.fields.artworks[0].fields.file.url}
              alt="Album"
              width="480px"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-red-800 justify-center">
              {a.fields.title}
            </h2>
            <h3 className="card-title justify-center">{a.fields.artist}</h3>
            <p>{a.fields.description}</p>
            <div className="card-actions justify-end">
              <button
                onMouseEnter={() => setToggle(true)}
                className="btn btn-primary"
              >
                Listen
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
