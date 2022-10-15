export default function search(searchTerm, art, books, music) {
  const data = art.concat(...books, ...music);
  console.log(data);
  const works = data
    .map((work) => work)
    .filter((work) => {
      console.log(work.fields.title, searchTerm);
      const result = work.fields.title.toLowerCase().trim().includes(searchTerm)
        ? work
        : work.fields.artist &&
          work.fields.artist.toLowerCase().trim().includes(searchTerm)
        ? work
        : work.fields.author &&
          work.fields.author.toLowerCase().trim().includes(searchTerm);

      return result;
    });

  console.log(works);
  return works;
}
