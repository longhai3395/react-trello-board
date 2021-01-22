import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ComponentsContainer from './ComponentsContainer';
import FormDragLayer from './FormDragLayer';
import DynamicPage from './DynamicPage';

@DragDropContext(HTML5Backend)
export default class DynameicForm extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  moveForm(lastX, lastY, nextX, nextY) {
    console.log(lastX, lastY, nextX, nextY);
  }

  render() {
    const components = [
      {id: "input", text: "文本框", type: "input"},
      {id: "select", text: "下拉列表", type: "select"}
    ];
    const forms = [{id: "form1"}, {id: "form2"}, {id: "form3"}];

    return (
      <div style={{ height: '100%' }}>
        <FormDragLayer snapToGrid={false} />
        <ComponentsContainer components={components} moveForm={this.moveForm} />
        <DynamicPage forms={forms} />
      </div>
    );
  }
}
