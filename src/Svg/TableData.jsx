import React, { Component } from 'react';
import TableRow from './TableRow';
import _ from 'underscore';

class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }

    getAllTableRows = () => {
        return _.map(this.state.data, (row, i) => {
            return <TableRow key={i} data={row} />
        })
    }

    render() {
        const tableRows = this.getAllTableRows();
        return (
            <div className="table_data">
                <table border="1">
                    <tbody>
                        <tr>
                            <td>sno</td>
                            <td>Name</td>
                            <td>population</td>
                        </tr>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;