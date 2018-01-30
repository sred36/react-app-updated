import React, { Component } from 'react';
import DailogueChildren from './DailogueChildren.jsx';
import DailogueContent from './DailogueContent.jsx';


export default class DailogueHigher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: props.width, height: props.height, show: false, modelInner: props.modelInner
        }



    }
    componentDidMount() {
        this.setState({ height: window.innerHeight + 'px', width: window.innerWidth + 'px' });
    }

    DailogueOver = () => {
        this.setState({ show: !this.state.show });
    }


    render() {
        return (
            <div>
                <DailogueContent data={this.state} modelInner="Navigating your way to MD Anderson and around campus shouldn’t be stressful. We provide a parking guide, maps and directions, and shuttle information to assist you." />
                <DailogueChildren DailogueOver={this.DailogueOver} />
            </div>
        )
    }
}
