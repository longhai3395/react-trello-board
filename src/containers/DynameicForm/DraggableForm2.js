import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import Form from './Form2';

function getStyles(isDragging) {
  return {
    display: isDragging ? 0.1 : 1
  };
}

const formSource = {
  beginDrag(props, monitor, component) {
    console.log(props, monitor, component);
    const { id, type, text} = props;
    const { clientWidth, clientHeight } = findDOMNode(component);

    return { id, type, text, clientWidth, clientHeight };
  },
  endDrag(props, monitor) {
    console.log(props, monitor);
    document.getElementById(monitor.getItem().id).style.display = 'block';
  },
  isDragging(props, monitor) {
    const isDragging = props.id && props.id === monitor.getItem().id;
    return isDragging;
  }
};

const OPTIONS = {
  arePropsEqual: function arePropsEqual(props, otherProps) {
    let isEqual = true;
    if (props.id === otherProps.id &&
        props.type === otherProps.type) {
      isEqual = true;
    } else {
      isEqual = false;
    }
    return isEqual;
  }
};

function collectDragSource(connectDragSource, monitor) {
  return {
    connectDragSource: connectDragSource.dragSource(),
    connectDragPreview: connectDragSource.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

@DragSource('form', formSource, collectDragSource, OPTIONS)
export default class DraggableForm extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  render() {
    const {id, type, text, isDragging, connectDragSource } = this.props;

    return connectDragSource(
      <div>
        <Form id={id} type={type} 
          text={text} 
          style={getStyles(isDragging)} />
      </div>
    );
  }
}
