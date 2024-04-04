import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ALBUM_FAIXAS_GET, ALBUM_GET } from "../api";
import useFetch from "../hooks/useFetch";

import { Plus } from "lucide-react";
import Faixas from "../components/Faixas/Faixas";
import CreateAlbumModal from "../components/Albuns/CreateAlbumModal";

const Album = () => {
  const { id_album } = useParams();
  const { request } = useFetch();
  
  const [album, setAlbum] = useState(null);
  const [faixas, setFaixas] = useState(null);
  const [albumModal, setAlbumModal] = useState(false);

  async function fetchAlbumFaixas() {
    const { url, options } = ALBUM_FAIXAS_GET({ id_album });
    const { response, json } = await request(url, options);
    setFaixas(json);
  }

  useEffect(() => {
    async function fetchAlbum() {
      const { url, options } = ALBUM_GET({ id_album });
      const { response, json } = await request(url, options);
      setAlbum(json);
    }

    fetchAlbumFaixas();
    fetchAlbum();
  }, []);

  if (!faixas || !album) return <p>loading...</p>;
  else
    return (
      <div className="flex pt-56">
        {albumModal && (<CreateAlbumModal setModal={setAlbumModal} album_id={id_album} reFetch={fetchAlbumFaixas} />)}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold text-pretty">{album.nome}</h1>
            <h2 className="text-xl text-pretty">{album.ano}</h2>
          </div>
          <button
            onClick={() => setAlbumModal(true)}
            className="flex h-fit w-fit btn rounded-lg hover:bg-primary hover:text-white"
          >
            Adicionar Faixa <Plus />
          </button>
        </div>
        <div className="w-2/3">
          <Faixas faixas={faixas} fetchAlbumFaixas={fetchAlbumFaixas} />
        </div>
      </div>
    );
};

export default Album;
