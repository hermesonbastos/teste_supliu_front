import React from "react";
import dupla from '../../public/dupla.png';

const Cover = () => {
  return (
    <div className="flex flex-col lg:flex-row  w-full justify-center gap-12 mt-8">
      <div className="avatar flex justify-center">
        <div className="w-64 mask mask-squircle">
          <img src={dupla} />
        </div>
      </div>
      <div className="flex flex-col text-center lg:text-start justify-center">
        <h1 className="text-3xl font-bold text-pretty">Tião Carreiro e Pardinho</h1>
        <p className="text-lg">A dupla sertaneja mais querida entre os devs.</p>
      </div>
    </div>
  );
};

export default Cover;
