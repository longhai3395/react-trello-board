import React, { Component, PropTypes } from 'react';

import Form from './DraggableForm';

export default class Forms extends Component {
  static propTypes = {
    forms: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { forms} = this.props;

    let formList = [];
    forms.forEach((item, i) => {
      formList.push(
        <Form 
          key={item.id}
          id={item.id}
          type={item.type}
          text={item.text}
        />
      );
    });

    return (
      <div className="form-items">
        {formList}
      </div>
    );
  }
}
