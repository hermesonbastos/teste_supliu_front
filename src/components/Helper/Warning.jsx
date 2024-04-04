import React from "react";
import { Frown } from "lucide-react";

const Warning = ({ children }) => {
  return (
    <div className="flex w-fit items-center mt-6 gap-3 bg-warning rounded-lg p-3 mx-auto">
      <p className="text-base">{children}</p>
      <Frown />
    </div>
  );
};

export default Warning;
