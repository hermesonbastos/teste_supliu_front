import React from "react";
import { Disc3, AudioLines, Trash2 } from "lucide-react";
import useFetch from "../../hooks/useFetch";
import { ALBUM_DELETE } from "../../api";
import { Link } from "react-router-dom";

const AlbumCard = ({ album, reFetch, numFaixas }) => {
  const { request } = useFetch();

  async function deleteAlbum(id_album) {
    const { url, options } = ALBUM_DELETE(id_album);
    await request(url, options);
    reFetch();
  }

  return (
    <div className="flex mx-4 items-center h-16 border-solid border-2 border-primary justify-between py-3 px-4 rounded-lg">
      <div className="flex gap-3 items-center font-medium">
        <Disc3 />
        <p className="flex items-center text-xl">{album.nome}</p>
      </div>
      <div className="flex items-center flex-nowrap gap-3">
        <button className="btn hover:text-white transition hover:bg-primary">
          <Link className="flex items-center gap-3" to={`/album/${album.id}`}>
            <p>{numFaixas} Faixas</p>
            <AudioLines />
          </Link>
        </button>

        <button
          onClick={() => deleteAlbum(album.id)}
          className="btn btn-circle hover:bg-red-500 hover:text-white"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default AlbumCard;
