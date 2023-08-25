import React, { useState } from "react";

const PassValue = () => {
  const [text, settext] = useState();

  const getText = (name: string) => {
    return `My name is ${name}`;
  };
  return <div>{getText("Serban")}</div>;
};

export default PassValue;
