import React from "react";

function Input({ typee, name, onChange, value, placeholder, Class,autoComplete }) {
  return (
    <>
      <input
        type={typee}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        className={`${Class}`}
        autoComplete={autoComplete}
      />
    </>
  );
}

export default Input;
