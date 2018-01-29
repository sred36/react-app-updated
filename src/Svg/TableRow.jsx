import React, { Component } from 'react';
import TableCol from './TableCol.jsx';
import _ from 'underscore';
class TableRow extends Component {
    getColums = () => {
        return _.map(this.props.data, (col, i) => {
            return <TableCol key={i} cValue={col} />
        })
    }

    render() {
        const cols = this.getColums();
        return (
            <tr>
               {cols}
            </tr>
        );
    }
}

export default TableRow;