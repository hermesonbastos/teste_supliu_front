import React from "react";

const Button = ({ style = false, full = false, children, ...props }) => {
  return (
    <button
      className={`flex h-fit btn
      ${style ? style : ""}
      ${full ? "w-full" : "w-fit"}
      rounded-lg hover:bg-primary hover:text-white flex-nowrap text-nowrap`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
