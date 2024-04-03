import React, { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import useFetch from "../../hooks/useFetch";
import { ALBUNS_GET } from "../../api";

const Albuns = () => {
  const [albuns, setAlbuns] = useState(null);
  const { data, request, loading, error } = useFetch();

  useEffect(() => {
    async function fetchAlbuns() {
      const { url, options } = ALBUNS_GET();
      const { response, json } = await request(url, options);
      setAlbuns(json);
    }

    fetchAlbuns();
  }, []);

  if(loading) return <p>loading</p>
  else return (
    <div className="mt-12">
      <ul className="flex flex-col gap-2">
        {albuns && albuns.map((album, index) => (
            <li key={index}>
              <AlbumCard />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Albuns;
