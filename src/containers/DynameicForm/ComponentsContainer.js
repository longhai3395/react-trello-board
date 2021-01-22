import React, { Component } from 'react';

import Forms from './Forms';

export default class FormsContainer extends Component {
  render() {
    const { components } = this.props;

    return (
      <div className="form-components" >
        <Forms
          forms={components}
        />
      </div>
    );
  }
}
