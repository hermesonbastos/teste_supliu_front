import React, { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import useFetch from "../../hooks/useFetch";
import { ALBUNS_GET } from "../../api";
import Button from "../Forms/Button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

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

  if (loading) return <p>loading</p>;
  else
    return (
      <div className="mt-12">
        <div className="flex justify-end py-3 mx-4">
          <Button>
            Adicionar novo Álbum <Plus />
          </Button>
        </div>
        <ul className="flex flex-col gap-2">
          {albuns &&
            albuns.map((album, index) => (
              <li key={index}>
                <Link to={`/album/${album.id}`}>
                  <AlbumCard album={album} />
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
};

export default Albuns;
