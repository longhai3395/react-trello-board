import React, { PropTypes } from 'react';

const propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.object
};

const Form = (props) => {
  const { style, id, type, text} = props;

  return (
    <div style={style} className="form" id={id}>
      {text}
    </div>
  );
};

Form.propTypes = propTypes;

export default Form;
