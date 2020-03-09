import React from 'react';
import PropTypes from 'prop-types';


const Headline = ({
  header,
  desc,
}) => {
  if (!header) return null;

  return (
    <div test="headlineComponent">
      <h1 test="header">{header}</h1>
      <p test="desc">{desc}</p>
    </div>
  );
};

const propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
};

Headline.propTypes = propTypes;

export default Headline;
