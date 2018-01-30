import React, { Component } from 'react'
import _ from 'underscore';

export default class DailogueChildren extends Component {
  constructor(props) {
    super(props);
    this.state={data:props.data};
    this.DailogueOver=this.DailogueOver.bind(this);
  }
  DailogueOver() {
    return _.map(this.state.data,(calc,i)=> {
       return calc;
     });
     
}
  render() {
    
    return (
      <div className="Dailogue_view">
          <span onMouseOver={this.DailogueOver}>Mouse over</span>
      </div>
    )
  }
}
