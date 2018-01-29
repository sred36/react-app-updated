import React, { Component } from 'react';
import './SvgStyle.css'
import TableCol from './TableCol.jsx';

class TableData extends Component {
    constructor(props) {
        super(props)
        this.state={CountryNo:props.CountryNo,CountryName:props.CountryName,columnPop:props.columnPop};
        //this.HandleSvgBasedPercentage=this.HandleSvgBasedPercentag.bind(this);;
    }


    render () {
        return (
            <div className="table_layout">
               <table border="1" className="Country_pop">
               <tbody>
                    <tr>
                        <td><b>SNO</b></td>
                        <td><b>Country</b></td> 
                        <td><b>Population</b></td>
                    </tr>
                   
                        <TableCol CountryNo="1" CountryName="IN" columnPop="400"/>
                        <TableCol CountryNo="2" CountryName="AUS" columnPop="200"/>
                        <TableCol CountryNo="3" CountryName="CAN" columnPop="2000"/>
                        <TableCol CountryNo="5" CountryName="US" columnPop="4000"/>
                        <TableCol CountryNo="6" CountryName="ZIM" columnPop="6000"/>
                        <TableCol CountryNo="7" CountryName="NZ" columnPop="7000"/>
                        <TableCol CountryNo="8" CountryName="DU" columnPop="8000 "/>
                        <TableCol CountryNo="9" CountryName="AF" columnPop="9000 "/>
                        <TableCol CountryNo="10" CountryName="RA" columnPop="1000"/>
                        <TableCol CountryNo="11" CountryName="CH" columnPop="1500"/>
                        <TableCol CountryNo="12" CountryName="JA" columnPop="2500"/> 
                    </tbody>
                </table>
            </div>
        ); 
    }

}
export default TableData;