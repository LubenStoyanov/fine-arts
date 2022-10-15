import { createContext, useEffect, useState } from "react";
import { createClient } from "contentful";

export const CMSContext = createContext();

const CMSContextProvider = (props) => {
  const [art, setArt] = useState([]);
  const [literature, setLiterature] = useState([]);
  const [music, setMusic] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: "3okd8zp7ryvu",
      accessToken: "-pnmSaf6zCMRu7wHMDVxXcgremsSGvRADeGgQs9Y3po",
    });

    const handleData = async () => {
      try {
        const musicData = await client.getEntries({
          content_type: "music",
        });
        setMusic(musicData.items);
        const artData = await client.getEntries({
          content_type: "visualArt",
        });
        setArt(artData.items);
        const literatureData = await client.getEntries({
          content_type: "literature",
        });
        setLiterature(literatureData.items);
      } catch (error) {
        console.log("my error: ", error);
      }
    };

    handleData();
  }, []);

  return (
    <CMSContext.Provider
      value={{
        art,
        setArt,
        literature,
        setLiterature,
        music,
        setMusic,
      }}
    >
      {props.children}
    </CMSContext.Provider>
  );
};
export default CMSContextProvider;
