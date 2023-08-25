import React from "react";
import ReactDOM from "react-dom";

const Count = () => {
  let count = 0;
  const interval = setInterval(() => {
    const paragraph = <p>{count}</p>;

    ReactDOM.render(paragraph, document.getElementById("count"));
    if (count === 1000) {
      clearInterval(interval);
    } else {
      count++;
    }
  }, 30);

  return <>{interval}</>;
};

export default Count;
