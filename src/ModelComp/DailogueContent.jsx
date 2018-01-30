import React, { Component } from 'react';
import './Dailogue.css';

export default class DailogueContent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data
    })
  }

  render() {
    debugger;
    return (
      <div height={this.state.data.height} width={this.state.data.width} className={this.state.data.show ? 'showMe' : 'hideMe'}>
        {this.props.modelInner}
      </div>
    )
  }
}
