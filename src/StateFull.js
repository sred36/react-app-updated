import React, { Component } from 'react';
import './Custome.css';
class StateFull extends Component {
 
    constructer (props) {
        this.state = { fieldName: props.fieldname };
    }
    render() {
        return (
            <div className="Header">
              { this.state }
            </div>
        );
    }

}

export default StateFull;