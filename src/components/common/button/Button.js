import React from 'react';
import PropTypes from 'prop-types';
import '@Common/styles/_buttons.scss';

const Button = ({ className, id, text }) => (
  <div className="form-group">
    <button
      type="submit"
      className={className}
      id={id}
    >
      {text}
    </button>
  </div>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Button;
