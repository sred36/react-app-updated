import React, { Component } from 'react';
import logo from './logo.svg';
import './Bgcolor.css';

class Background extends Component {
  constructor(props){
    super(props);
    this.state={bgcolor:'red'};
    this.ChnageColor = this.ChnageColor.bind(this);
  }
 
  ChnageColor() {
    const color=['green','orange','blue','yellow','pink','black','grey'];
    let colorRandom=color[ Math.floor(Math.random() * color.length)];
    this.setState({
       bgcolor: colorRandom
    });
  }
  render() {

    return (
      <div className="background-color">
        <img onClick={this.ChnageColor} src={logo}  className={this.state.bgcolor} alt="logo"/>
      </div>
    ); 
  }
}

export default Background;
