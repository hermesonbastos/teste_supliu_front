import React, { useState } from "react";
import { X } from "lucide-react";
import Input from "../Forms/Input";

const CreateAlbumModal = ({ setModal }) => {

  const [nome, setNome] = useState("");

  return (
    <div className="flex fixed justify-center items-center top-0 left-0 w-full h-full bg-black/40 z-100 px-8 py-4 md:px-16 md:py-8">
      <div className="w-2/4 bg-white rounded-lg p-4">
        <div className="flex justify-between items-center">
          <h2>Nova Faixa</h2>
          <button
            onClick={() => setModal((v) => !v)}
            className="btn self-end btn-sm btn-circle btn-ghost right-2 top-2"
          >
            <X />
          </button>
        </div>
        <Input name="Nome da faixa" value={nome} onChange={() => setNome(({ target }) => target.value)} />
      </div>
    </div>
  );
};

export default CreateAlbumModal;
