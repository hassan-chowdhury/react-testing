import React from 'react';


const Headline = ({header, desc}) => {
  if (!header) return null;

  return (
    <div test="headlineComponent">
      <h1 test="header">{header}</h1>
      <p test="desc">{desc}</p>
    </div>
  );
};

export default Headline;
