import React, { Component } from 'react'
import _ from 'underscore';

export default class DailogueChildren extends Component {
  constructor(props) {
    super(props);
    this.DailogueOver=this.DailogueOver.bind(this);
  }
  DailogueOver() {
    this.props.DailogueOver();
    // return _.map(this.state.data,(calc,i)=> {
    //    return calc;
    //  });
     
}
  render() {
    
    return (
      <div className="Dailogue_view">
          <span onMouseOver={this.DailogueOver}>Mouse over</span>
      </div>
    )
  }
}
