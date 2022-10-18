import React from "react";
import RandomBook from "../components/RandomBook";
import RandomArt from "../components/RandomArt";
import RandomMusic from "../components/RandomMusic";
import Searchbar from "./Searchbar";
import { useLoaderData } from "react-router-dom";
import contentful from "../data/contentful";
import { sample } from "lodash";
import useForceUpdate from "use-force-update";

export async function loader() {
  const { getBooks, getArt, getMusic } = contentful();
  const books = await getBooks();
  const art = await getArt();
  const music = await getMusic();
  return { books, art, music };
}

export default function Hero() {
  const { books, art, music } = useLoaderData();
  const book = sample(books);
  const fart = sample(art);
  const song = sample(music);

  const forceUpdate = useForceUpdate();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div>
          <h1 className="text-5xl font-bold">Enjoy the Art</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button onClick={forceUpdate}>Get Random Art</button>
        </div>
        <div className="flex space-x-10">
          <RandomBook book={book} />
          <RandomArt fart={fart} />
          <RandomMusic song={song} />
        </div>
        <div>
          <Searchbar />
        </div>
      </div>
    </div>
  );
}
