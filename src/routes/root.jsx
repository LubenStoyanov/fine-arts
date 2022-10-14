import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { CMSContext } from "../useContetful";
import { Breadcrumbs, Input } from "@material-tailwind/react";

export default function Root() {
  const fart = useContext(CMSContext);
  const [search, setSearch] = useState("");
  // console.log("FART", fart);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.firstChild.value);
  };

  const homesearch = fart.music.concat(fart.art, fart.literature)
  const filterData = (data) => {
    const work = data.filter((item) =>
      item.fields.title.toLowerCase().includes(search.toLowerCase())
    );
    console.log('wor', work);
  };

  useEffect(() => {
    const searchArray =
      window.location.pathname === "/art"
        ? fart.art
        : window.location.pathname === "/music"
          ? fart.music
          : window.location.pathname === "/literature"
            ? fart.literature
            : homesearch //fart.music.concat(fart.art, fart.literature); 
    filterData(searchArray);
    console.log(searchArray);
  }, [search]);

  return (
    <div className="flex-column justify-evenly items-center">
      <h1>Fine Arts</h1>
      <Breadcrumbs>
        <Link to={`/`} className="opacity-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
        <Link to={`literature`}>Literature</Link>
        <Link to={`music`}>Music</Link>
        <Link to={`art`}>Art</Link>
      </Breadcrumbs>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="submit" name="" id="" />
      </form>
      <Outlet />
    </div>
  );
}
