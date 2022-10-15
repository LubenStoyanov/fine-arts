import { sample } from "lodash";
import { Outlet, useLoaderData } from "react-router-dom";
import contentful from "../data/useContentful";
import Hero from "./Hero";
import Navbar from "./Navbar";

export async function loader() {
  const { getBooks } = contentful();
  const books = await getBooks();
  return { books };
}

export default function Root() {
  const { books } = useLoaderData();
  const book = sample(books);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
