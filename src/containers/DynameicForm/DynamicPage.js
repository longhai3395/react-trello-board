import React, { Component, PropTypes } from 'react';
import DynamicPageComponent from './DynamicPageComponent'

export default class DynamicPage extends Component {
  static propTypes = {
    forms: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {forms: props.forms};
  }

  formCanDrop = (id) => {
    const { forms } = this.state;
    const form = forms.filter(f => f.id === id)[0];
    return form.children == null;
  }

  formDrop = (id, children) => {
    const { forms } = this.state;
    const form = forms.filter(f => f.id === id)[0];
    form.children = children;
    this.setState({forms}, () => {console.log(this.state.forms)});
  }

  render() {
    let formsList = [];
    this.state.forms.forEach(element => {
      let {id, children} = element;
      formsList.push(<DynamicPageComponent key={id} 
        id={id} 
        children={children} 
        formCanDrop={this.formCanDrop} 
        formDrop={this.formDrop}
      />);
    });
    return (
      <div className="form-page" >
        {formsList}
      </div>
    );
  }
}
