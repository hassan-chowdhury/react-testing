import React from 'react';
import PropTypes from 'prop-types';


const SharedButton = ({
  buttonText,
  emitEvent,
}) => {
  const submitEvent = () => {
    if (emitEvent) {
      emitEvent();
    }
  };

  return (
    <button
      type="button"
      test="buttonComponent"
      onClick={submitEvent}
    >
      {buttonText}
    </button>
  );
};

const propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

SharedButton.propTypes = propTypes;

export default SharedButton;
