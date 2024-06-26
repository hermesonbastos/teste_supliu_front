import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ALBUM_FAIXAS_GET, ALBUM_GET } from "../api";
import useFetch from "../hooks/useFetch";

import { Plus, Undo2 } from "lucide-react";
import Faixas from "../components/Faixas/Faixas";
import CreateFaixaModal from "../components/Faixas/CreateFaixaModal";
import Button from "../components/Forms/Button";
import Warning from "../components/Helper/Warning";
import Loading from "../components/Helper/Loading";

const Album = () => {
  const { id_album } = useParams();
  const { request } = useFetch();

  const [album, setAlbum] = useState(null);
  const [faixas, setFaixas] = useState(null);
  const [faixaModal, setFaixaModal] = useState(false);

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

  if (!faixas || !album) return <Loading />;
  else
    return (
      <div className="flex items-center flex-col w-full lg:items-start pt-24 lg:flex-row gap-8">
        {faixaModal && (
          <CreateFaixaModal
            setModal={setFaixaModal}
            album_id={id_album}
            reFetch={fetchAlbumFaixas}
          />
        )}
        <div className="flex w-full items-center flex-col gap-4 text-center lg:items-start lg:w-1/3">
          <div className="flex items-start w-full">
            <Link to="/">
              <button className="btn btn-circle hover:bg-secondary hover:text-white">
                <Undo2 />
              </button>
            </Link>
          </div>
          <div className="text-center lg:text-start">
            <h1 className="text-3xl font-bold text-pretty">{album.nome}</h1>
            <h2 className="text-xl text-pretty">{album.ano}</h2>
          </div>
          <Button onClick={() => setFaixaModal(true)}>
            Adicionar Faixa <Plus />
          </Button>
        </div>
        <div className="flex w-full mt-6 h-full lg:mt-0 items-center">
          {faixas.length > 0 ? (
            <Faixas faixas={faixas} fetchAlbumFaixas={fetchAlbumFaixas} />
          ) : (
            <Warning>Nenhuma faixa adicionada</Warning>
          )}
        </div>
      </div>
    );
};

export default Album;
