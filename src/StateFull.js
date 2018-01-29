import React, { Component } from 'react';
import './Custome.css';
class StateFull extends Component {
    constructor (props) {
        super(props);
        this.state = { fieldName: props.fieldname };
    }
    render() {
        return (
            <div className="Header">
                 { this.state.fieldName }
            </div>
        );
    }

}

export default StateFull;