import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import Form from './DraggableForm2';

const formTarget = {
  canDrop(props, monitor) {
    console.log(monitor, monitor.getItem());
    return props.formCanDrop(props.id);
  },
  hover(props, monitor, component) {
    console.log(props, monitor);
    if (window.innerWidth - monitor.getClientOffset().x < 200) {

    } else if (monitor.getClientOffset().x < 200) {

    }
  },
  drop(props, monitor, component) {
    console.log(props, monitor, component);
    console.log(monitor.getItem());
    props.formDrop(props.id, monitor.getItem());
  }
};

@DropTarget('form', formTarget, connectDragSource => ({
  connectDropTarget: connectDragSource.dropTarget(),
}))
export default class DynamicPageComponent extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    formCanDrop: PropTypes.func.isRequired,
    formDrop: PropTypes.func.isRequired,
    removeForm: PropTypes.func.isRequired,
    children: PropTypes.object,
  }

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { connectDropTarget, removeForm } = this.props;
    if(this.props.children != null) {
      const {id, type, text} = this.props.children;
      return connectDropTarget(
        <div className="form-container" >
          <Form 
            key={id}
            id={id}
            type={type}
            text={text}
            removeForm={removeForm}
             />
        </div>
      );
    } else {
      return connectDropTarget(
        <div className="form-container" >
        </div>
      );
    }
  }
}
