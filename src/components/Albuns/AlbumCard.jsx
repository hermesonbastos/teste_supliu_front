import React, { useEffect, useState } from 'react'
import { ALBUM_FAIXAS_GET } from '../../api';
import useFetch from '../../hooks/useFetch';

const AlbumCard = ({ album }) => {

  return (
    <div className="flex justify-center mx-4 px-8 h-40 card bg-base-300 rounded-box">
      {album.nome}
    </div>
  )
}

export default AlbumCard