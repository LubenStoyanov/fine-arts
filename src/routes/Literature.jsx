import React from "react";
import { useLoaderData } from "react-router-dom";
import contentful from "../data/useContentful";

export async function loader() {
  const { getBooks } = contentful();
  const books = await getBooks();
  return { books };
}

export default function Literature() {
  const { books } = useLoaderData();
  console.log(books);

  return (
    <div>
      <h2>Literature</h2>
    </div>
  );
}
