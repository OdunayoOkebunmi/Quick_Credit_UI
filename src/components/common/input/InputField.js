import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  className, name, ...props
}) => (
  <div className="form-group">
    <div className="input-group">
      <input
        className={className}
        name={name}
        {...props}
      />
    </div>
  </div>
);

InputField.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default InputField;
