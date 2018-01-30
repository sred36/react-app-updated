import React, { Component } from 'react';
import './Dailogue.css';

export default class DailogueContent extends Component {
  constructor(props) {
    super(props);
    this.state = {data:props.data}
      


  }
  render() {
    return (
      <div height={this.state.data.width} width={this.state.data.width} className={this.state.show ? 'showMe' : 'hideMe'}>
        {this.state.modelInner}
      </div>
    )
  }
}
