import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  className, placeholder, name, ...props
}) => (
  <div className="form-group">
    <div className="input-group">
      <input
        className={className}
        placeholder={placeholder}
        name={name}
        {...props}
      />
    </div>
  </div>
);

InputField.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default InputField;
