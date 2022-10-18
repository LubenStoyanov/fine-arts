import { useState } from "react";
import { Link } from "react-router-dom/dist";
import { useLoaderData } from "react-router-dom";
import shuffle from "lodash/shuffle";
import contentful from "../data/contentful";
import { flip } from "lodash";

export async function loader() {
  const { getArt } = contentful();
  const art = await getArt();
  return { art };
}

export default function Art() {
  const { art } = useLoaderData();
  const sart = shuffle(art)
  console.log(sart)
  console.log("art", art);
  const flip = false


  return (
    <div className="space-y-4">
      {sart.map((a) => (
        <div key={a.sys.id} className="card lg:card-side bg-base-100 shadow-xl">
          <figure>

            <img
              /* onMouseEnter={() => flip = true}  
                onMouseLeave={() => flip = false} */
              src={a.fields.artworks[0].fields.file.url}
              alt="Album"
              width="480px"

            />


          </figure>
          <div className="card-body">
            <h2 className="card-title text-red-800 justify-center">
              {a.fields.title}
            </h2>
            <h3 className="card-title justify-center">{a.fields.artist} {!a.fields.alive ? <span>♱</span> : <></>}
            </h3>
            <p>{a.fields.description}</p>
            <div className="card-actions justify-center">
              <a target="blank" href={a.fields.link} className="btn btn-primary">Atrist Info</a>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
