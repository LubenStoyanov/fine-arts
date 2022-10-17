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

  const mappedBooks = books.map((book) => (
    <a className="link " href={book.fields.link} target="_blank">
      <div
        className="card card-compact w-60 sm:w-40 bg-base-100 shadow-xl"
        key={book.sys.id}
      >
        <figure>
          <img
            src={book.fields.cover.fields.file.url}
            alt={`Book cover of ${book.fields.title} by ${book.fields.author}`}
          />
        </figure>
        <div className="card-body">
          <h2 className="text-center">
            {book.fields.title} <br />
            by {book.fields.author}
          </h2>
        </div>
      </div>
    </a>
  ));

  return (
    <div className="flex flex-col items-center ">
      <div className="container prose h1 my-10">
        <h1 style={{ textAlign: "center" }}>Literature</h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap space-y-10 space-x-5">
        <div></div>
        {mappedBooks}
      </div>
    </div>
  );
}
