import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="flex p-6 w-full items-center justify-center">
      <ReactLoading
        type="bars"
        color="primary"
        height={"4rem"}
        width={"4rem"}
      />
    </div>
  );
};

export default Loading;
