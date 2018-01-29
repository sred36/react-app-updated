import React, { Component } from 'react';
class TableCol extends Component {
    constructor(props) {
        super(props);
        this.state={CountryNo:props.CountryNo,CountryName:props.CountryName,columnPop:props.columnPop};
  
    }

    render () {
        return (
            <tr>
                <td>{this.state.CountryNo}</td>
                <td>{this.state.CountryName}</td>
                <td>{this.state.columnPop}</td>
            </tr>
        )
    }

}
export default TableCol;
