import React, { Component } from 'react';
import "./SvgStyle.css"

class Pics extends Component {
    constructor (props) {
        super(props);
       this.state={DimeW:props.DimeW,DimeH:props.DimeH,styling:props.styling};
    }
 

    render () {
        return (
            <div className="Svg_implementation">
                <svg>
                    <rect width={this.state.DimeW} height={this.state.DimeH} className={this.state.styling} />
                </svg> 
            </div> 
        );
    }
}
export default Pics;