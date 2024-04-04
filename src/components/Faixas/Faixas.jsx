import React, { useState } from "react";
import { Music2, Trash2 } from "lucide-react";
import { FAIXA_DELETE } from "../../api";
import useFetch from "../../hooks/useFetch";

const Faixas = ({ faixas, fetchAlbumFaixas }) => {
  const [busca, setBusca] = useState("");
  const { request } = useFetch();

  async function deleteFaixa(id_faixa) {
    const { url, options } = FAIXA_DELETE({ id_faixa });
    await request(url, options);
    fetchAlbumFaixas();
  }

  const filteredFaixas = faixas?.filter((faixa) =>
    faixa.nome.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <ul className="flex w-full flex-col gap-2 mb-12">
      <input
        className="input input-bordered input-primary w-full"
        placeholder="Buscar faixa"
        value={busca}
        onChange={({ target }) => setBusca(target.value)}
      />
      {filteredFaixas &&
        filteredFaixas.map((faixa, index) => (
          <li className="" key={index}>
            <div className="flex gap-4 border-solid border-2 border-primary justify-between py-3 px-4 rounded-lg">
              <div className="flex gap-3 items-center">
                <Music2 className="self-center" size={16} />
                <p className="text-lg">{faixa.nome}</p>
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
