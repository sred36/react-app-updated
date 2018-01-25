import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorCode: "#FF0000",
            loding: true,
        }
        debugger;

    }

    componentWillMount() {
        
        debugger;
    }

    componentDidMount() {
        this.drawCanvas();
        fetch('url').then((data) =>{
            this.setState({
                apiData: data,
                loding:  false
            })
        })
        debugger;
    }


    drawCanvas = () => {

        let ctx = this.canvasElm.getContext("2d");
        ctx.strokeStyle = this.state.colorCode;
        ctx.strokeRect(20, 20, 150, 100);
    }

    componentWillReceiveProps(nextProps) {
        debugger;
    }

    shouldComponentUpdate(nextProps, nextState) {
        debugger;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        debugger;
    }

    componentDidUpdate(prevProps, prevState) {
        4
        this.drawCanvas();
        debugger;
    }

    componentWillUnmount() {
        debugger;
    }

    upDateOperation = () => {
        this.setState({
            colorCode: "#666"
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.upDateOperation} >Change Color</button>
                <canvas id="rect" ref={(can) => this.canvasElm = can} width="200" height="200"></canvas>
            </div>
        );
    }
}

LifeCycle.propTypes = {

};

export default LifeCycle;