import React from "react";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        className="input input-bordered input-primary w-full max-w-xs"
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
