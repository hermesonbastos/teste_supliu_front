import React from "react";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name}>
        {label}
      </label>
      <input
        className="input input-bordered input-primary w-full"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
