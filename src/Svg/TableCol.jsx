import React, { Component } from 'react';

class TableCol extends Component {
    render() {
        return (
            <td>
                {this.props.cValue}
            </td>
        );
    }
}

export default TableCol;