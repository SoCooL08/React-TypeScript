import React from "react";
interface Props {
  x: number;
  y: number;
}

const Calculate = ({ x, y }: Props) => {
  return <p>{x * y}</p>;
};

export default Calculate;
