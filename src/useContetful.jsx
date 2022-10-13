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
    client
      .getEntries({
        content_type: "visualArt",
      })
      .then((response) => setArt(response.items));
    client
      .getEntries({
        content_type: "literature",
      })
      .then((response) => setLiterature(response.items));
    client
      .getEntries({
        content_type: "music",
      })
      .then((response) => setMusic(response.items));

    // const handleData = async () => {
    //   try {
    //     const data = await client.getEntries({
    //       content_type: "music",
    //       order: "sys.createdAt",
    //     });
    //     return data;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // handleData();
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
