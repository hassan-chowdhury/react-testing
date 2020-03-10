import React from 'react';
import PropTypes from 'prop-types';


const ListItem = ({
  title,
  desc,
}) => {
  if (!title) return null;

  return (
    <div test="listItemComponent">
      <h2 test="componentTitle">{title}</h2>
      <div test="componentDescription">{desc}</div>
    </div>
  );
};

const propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

ListItem.propTypes = propTypes;

export default ListItem;
