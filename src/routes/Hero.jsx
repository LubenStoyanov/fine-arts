import React from "react";
import RandomBook from "../components/RandomBook";
import Searchbar from "./Searchbar";
import { useLoaderData } from "react-router-dom";
import contentful from "../data/useContentful";
import { sample } from "lodash";

export async function loader() {
  const { getBooks } = contentful();
  const books = await getBooks();
  return { books };
}

export default function Hero() {
  const { books } = useLoaderData();
  const book = sample(books);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div>
          <h1 className="text-5xl font-bold">Enjoy the works</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <RandomBook book={book} />
        <Searchbar />
      </div>
    </div>
  );
}
