import React from "react";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name}>
        {label}
      </label>
      <input
        className="input input-bordered input-primary w-full mt-1"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        onBlur={onBlur}
      />
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
