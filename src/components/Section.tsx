import React from "react";

interface Props {
  headingText: string;
}

const Section = ({ headingText }: Props) => {
  return (
    <section>
      <h1>{headingText}</h1>
    </section>
  );
};

export default Section;
