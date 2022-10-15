import React from "react";

export default function RandomBook({ book }) {
  return (
    <div>
      <img
        src={book.fields.cover.fields.file.url}
        className="max-w-sm rounded-lg shadow-2xl"
      />
    </div>
  );
}
