import React, { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import useFetch from "../../hooks/useFetch";
import { ALBUNS_GET } from "../../api";
import Button from "../Forms/Button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import CreateAlbumModal from "./CreateAlbumModal";

const Albuns = () => {
  const [albuns, setAlbuns] = useState(null);
  const [albumModal, setAlbumModal] = useState(false);
  const { request, loading } = useFetch();

  async function fetchAlbuns() {
    const { url, options } = ALBUNS_GET();
    const { json } = await request(url, options);
    setAlbuns(json);
  }

  useEffect(() => {
    fetchAlbuns();
  }, []);

  if (loading) return <p>loading</p>;
  else
    return (
      <div className="mt-12">
        {albumModal && (
          <CreateAlbumModal
            setModal={setAlbumModal}
            reFetch={fetchAlbuns}
          />
        )}
        <div className="flex justify-end py-3 mx-4">
          <Button onClick={() => setAlbumModal(true)} style="btn-primary">
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
