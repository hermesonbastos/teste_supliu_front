import React, { useState } from "react";
import { X } from "lucide-react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../hooks/useForm";
import { ALBUM_POST } from "../../api";
import useFetch from "../../hooks/useFetch";

const CreateAlbumModal = ({ setModal, reFetch }) => {

  const nome = useForm("nome");
  const ano = useForm("ano");
  const { request } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();
    
    async function createAlbum() {
      const { url, options } = ALBUM_POST({ "nome": nome.value, "ano": ano.value });
      await request(url, options);
      reFetch();
      setModal(false);
    }

    if(!nome.error && !ano.error) createAlbum();
  }

  return (
    <div className="flex fixed justify-center items-center top-0 left-0 w-full h-full bg-black/40 z-100 px-8 py-4 md:px-16 md:py-8 z-50">
      <div className="flex flex-col  w-96 bg-white rounded-lg p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Novo Álbum</h2>
          <button
            onClick={() => setModal(false)}
            className="btn self-end btn-sm btn-circle btn-ghost right-2 top-2"
          >
            <X />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3 mt-5">
          <Input label="Nome do álbum" type="text" name="nome" {...nome} />
          <Input label="Ano de lançamento" type="text" name="ano" {...ano} />
          <Button full={1}>Adicionar</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateAlbumModal;
