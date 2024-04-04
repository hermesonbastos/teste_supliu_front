import React, { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import useFetch from "../../hooks/useFetch";
import { ALBUNS_FAIXAS_GET } from "../../api";
import Button from "../Forms/Button";
import { Plus } from "lucide-react";
import CreateAlbumModal from "./CreateAlbumModal";
import Warning from "../Helper/Warning";
import Loading from "../Helper/Loading";

const Albuns = () => {
  const [albumModal, setAlbumModal] = useState(false);
  const [busca, setBusca] = useState("");
  const [albuns, setAlbuns] = useState(null);
  const { request, loading } = useFetch();

  async function fetchAlbuns() {
    const { url, options } = ALBUNS_FAIXAS_GET();
    const { json } = await request(url, options);
    console.log(json);
    setAlbuns(json);
  }

  useEffect(() => {
    fetchAlbuns();
  }, []);

  const filteredAlbuns = albuns?.filter((album) =>
    album.nome.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <div className="mt-12 mb-12">
      {albumModal && (
        <CreateAlbumModal setModal={setAlbumModal} reFetch={fetchAlbuns} />
      )}
      <div className="flex justify-end py-3 mx-4 gap-3">
        <input
          className="input input-bordered input-primary w-full"
          placeholder="Buscar álbum"
          value={busca}
          onChange={({ target }) => setBusca(target.value)}
        />
        <Button onClick={() => setAlbumModal(true)} style="btn-primary">
          Adicionar novo Álbum <Plus />
        </Button>
      </div>
      <ul className="flex flex-col gap-2">
        {filteredAlbuns ? (
          filteredAlbuns.map((album, index) => (
            <li key={index}>
              <AlbumCard
                reFetch={fetchAlbuns}
                album={album}
                numFaixas={album.faixas.length}
              />
            </li>
          ))
        ) : (
          <Loading />
        )}
        {filteredAlbuns && filteredAlbuns.length === 0 && (
          <Warning>Nenhum álbum adicionado</Warning>
        )}
      </ul>
    </div>
  );
};

export default Albuns;
