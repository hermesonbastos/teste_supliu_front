import React from "react";
import { Music2, Trash2 } from "lucide-react";
import { FAIXA_DELETE } from "../../api";
import useFetch from "../../hooks/useFetch";

const Faixas = ({ faixas, fetchAlbumFaixas }) => {

  const { request } = useFetch();

  async function deleteFaixa(id_faixa) {
    const { url, options } = FAIXA_DELETE({ id_faixa });
    await request(url, options);
    fetchAlbumFaixas();
  }

  return (
    <ul className="flex flex-col gap-2">
      {faixas &&
        faixas.map((faixa, index) => (
          <li className="" key={index}>
            <div className="flex gap-4 border-solid border-2 border-primary justify-between py-3 px-4 rounded-lg">
              <div className="flex gap-3 items-center">
                <Music2 className="self-center" size={16} />
                <p className="text-nowrap">{faixa.nome}</p>
              </div>
              <button
                onClick={() => deleteFaixa(faixa.id)}
                className="btn btn-circle hover:bg-red-500 hover:text-white"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Faixas;
