import React, { useState } from "react";
import { Disc3, ListMusic, Trash2, X } from "lucide-react";
import useFetch from "../../hooks/useFetch";
import { ALBUM_DELETE } from "../../api";
import { Link } from "react-router-dom";
import Button from "../Forms/Button";
import ReactLoading from "react-loading";
import Loading from "../Helper/Loading";

const AlbumCard = ({ album, reFetch, numFaixas }) => {
  const { request, loading } = useFetch();
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);

  function randomDefaultAlbumImage() {
    return Math.floor(Math.random() * 4 + 1);
  }

  async function deleteAlbum(id_album) {
    const { url, options } = ALBUM_DELETE(id_album);
    await request(url, options);
    reFetch();
  }

  function handleDelete(id_album) {
    deleteAlbum(id_album);
    setConfirmDeleteModal(false);
  }

  if (loading || !album) return <Loading />;
  return (
    <div className="flex gap-12 sm:flex-row mx-4 items-center border-solid border-2 border-primary py-3 px-3 rounded-lg">
      {confirmDeleteModal && (
        <div className="flex fixed justify-center items-center top-0 left-0 w-full h-full bg-black/40 z-100 px-8 py-4 md:px-16 md:py-8 z-50">
          <div className="flex bg-white rounded-lg p-4">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <h2 className="text-lg font-bold">Tem Certeza?</h2>
                <button
                  onClick={() => setConfirmDeleteModal(false)}
                  className="btn self-start btn-sm btn-circle btn-ghost right-2 top-2"
                >
                  <X />
                </button>
              </div>

              <p>Todas as faixas do álbum serão apagadas.</p>

              <form className="flex w-full gap-3 mt-5">
                <div className="flex flex-col gap-2 w-full">
                  <Button
                    full={true}
                    style="btn-neutral"
                    onClick={() => setConfirmDeleteModal(false)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    full={true}
                    style="hover:bg-red-500"
                    onClick={() => handleDelete(album.id)}
                  >
                    Apagar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="flex w-1/2 items-center justify-center overflow-hidden rounded-md">
        <img
          className="w-full"
          src={
            album?.cover
              ? album.cover
              : `/randomalbum${randomDefaultAlbumImage()}.png`
          }
          alt=""
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col w-full justify-start gap-2 font-medium">
          <div className="flex items-center gap-2">
            <p className="flex items-center text-3xl">{album.nome}</p>
            <Disc3 className="hidden lg:block mt-2" />
          </div>
          <p className="font-normal">Lançamento - {album.ano}</p>
        </div>
        <div className="flex flex-col w-full items-end sm:items-center sm:flex-row sm:justify-start flex-nowrap gap-3">
          <Link className="flex gap-3" to={`/album/${album.id}`}>
            <button className="btn hover:text-white transition hover:bg-primary">
              <p>Acessar Faixas</p>
              <ListMusic />
              {numFaixas}
            </button>
          </Link>

          <button
            onClick={() => setConfirmDeleteModal(true)}
            className="btn btn-circle hover:bg-red-500 hover:text-white"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
