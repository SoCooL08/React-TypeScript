import React from "react";

const Input = () => {
  return (
    <>
      <label htmlFor="jsxInput">This is test label</label>
      <input
        id="jsxInput"
        aria-label="This is an input"
        maxLength={10}
        readOnly
        className="input-style"
      ></input>
    </>
  );
};

export default Input;
