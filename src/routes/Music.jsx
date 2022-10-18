import React from "react";
import { useLoaderData } from "react-router-dom";
import contentful from "../data/contentful";

export async function loader() {
  const { getMusic } = contentful();
  const music = await getMusic();
  return { music };
}

export default function Music() {
  const { music } = useLoaderData();
  console.log(music);

  const mappedMusic = music.map((song) => (
    <div>
      <label className="swap swap-flip text-9xl">
        <input type="checkbox" />
        <div className="swap-on">
          <div
            className="card card-compact w-60 sm:w-40 bg-base-100 shadow-xl"
            key={song.sys.id}
          >
            😈
          </div>
        </div>
        <div
          className="card card-compact w-60 sm:w-40 bg-base-100 shadow-xl swap-off"
          key={song.sys.id}
        >
          <figure>
            <img
              src={song.fields.cover.fields.file.url}
              alt={`Single cover of ${song.fields.title} by ${song.fields.artist}`}
            />
          </figure>
        </div>
      </label>
    </div>
  ));

  return (
    <div className="flex flex-col items-center ">
      <div className="container prose h1 my-10">
        <h1 style={{ textAlign: "center" }}>Music</h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap space-y-10 space-x-5">
        <div></div>
        {mappedMusic}
      </div>
    </div>
  );
}
