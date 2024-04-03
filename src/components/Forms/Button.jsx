import React from "react";

const Button = ({ style="primary", children, ...props }) => {
  return (
    <button className={`btn btn-${style} text-slate-100`} {...props}>
      {children}
    </button>
  );
};

export default Button;
