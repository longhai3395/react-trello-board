import React, { PropTypes } from 'react';
import Form from './Form';

const styles = {
  display: 'inline-block',
  // transform: 'rotate(-7deg)',
  // WebkitTransform: 'rotate(-7deg)'
};

const propTypes = {
  form: PropTypes.object
};

const FormDragPreview = (props) => {
  styles.width = `${props.form.clientWidth || 243}px`;
  styles.height = `${props.form.clientHeight || 243}px`;
  const {id, type, text} = props.form;

  return (
    <div style={styles}>
      <Form 
          id={id}
          type={type}
          text={text} />
    </div>
  );
};

FormDragPreview.propTypes = propTypes;

export default FormDragPreview;
