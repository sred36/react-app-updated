import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableData from './TableData.jsx';
import Rect from './Rect.jsx';

class PopulationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { sno: "1", Sname: "Ind", Spop: "2000" },
                { sno: "2", Sname: "WES", Spop: "3000" },
                { sno: "3", Sname: "AUS", Spop: "4000" },
                { sno: "4", Sname: "SRI", Spop: "5000" },
                { sno: "5", Sname: "yyyy", Spop: "55000" }
            ]
        }
    }

    render() {
        return (
            <div>
                <span><TableData data={this.state.data} /></span>
                <span><Rect data={this.state.data} /></span>
            </div>
        );
    }
}


export default PopulationView;