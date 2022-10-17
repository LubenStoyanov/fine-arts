import React from "react";
import { useLoaderData } from "react-router-dom";
import contentful from "../data/useContentful";
import search from "../search";

export async function loader({ request }) {
  let url = new URL(request.url);
  let searchTerm = url.searchParams.get("query");

  const { getBooks, getArt, getMusic } = contentful();

  const art = await getArt();
  const music = await getMusic();
  const books = await getBooks();

  const works = search(searchTerm, art, books, music);
  return { works };
}

export default function Works() {
  const { works } = useLoaderData();
  return (
    <div>
      {works.map((work) => (
        <h2>{work.fields.title}</h2>
      ))}
      {/* <img
        src={book.fields.cover.fields.file.url}
        className="max-w-sm rounded-lg shadow-2xl"
      /> */}
    </div>
  );
}
