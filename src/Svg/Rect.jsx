import React, { Component } from 'react';
import _ from 'underscore';

class Rect extends Component {
    constructor(props) {
        super(props);
        this.state={
            data: props.data
        }
    }

    getRects = () => {
        return _.map(this.state.data, (rectRow, i) => {
            return <rect key={i} x={i*25} y={0} width="20" height={parseFloat(rectRow.Spop)/100} />
        });
    }
    
    render() {
        const rects = this.getRects();
        return (
            <svg>
            <g transform="translate(0, 100) scale(1, -1)">
                {rects}
            </g>
            </svg>
        );
    }
}

export default Rect;