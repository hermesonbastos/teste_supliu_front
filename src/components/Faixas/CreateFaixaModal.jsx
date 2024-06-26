import React, { useState } from "react";
import { X } from "lucide-react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../hooks/useForm";
import { FAIXA_POST } from "../../api";
import useFetch from "../../hooks/useFetch";
import Loading from "../Helper/Loading";

const CreateFaixaModal = ({ setModal, album_id, reFetch }) => {

  const nome = useForm("nome");
  const { request, loading } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome, album_id);
    
    async function createFaixa() {
      const { url, options } = FAIXA_POST({ "nome": nome.value, "album_id": album_id });
      await request(url, options);
      reFetch();
      setModal(false);
    }

    if(!nome.error) createFaixa();
  }

  return (
    <div className="flex fixed justify-center items-center top-0 left-0 w-full h-full bg-black/40 z-100 px-8 py-4 md:px-16 md:py-8 z-50">
      {!loading ? (<div className="flex flex-col  w-96 bg-white rounded-lg p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Nova Faixa</h2>
          <button
            onClick={() => setModal(false)}
            className="btn self-end btn-sm btn-circle btn-ghost right-2 top-2"
          >
            <X />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3 mt-5">
          <Input label="Nome da faixa" type="text" name="nome" {...nome} />
          <Button full={1}>Adicionar</Button>
        </form>
      </div>) : (<Loading />)}
      
    </div>
  );
};

export default CreateFaixaModal;
