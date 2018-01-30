import React, { Component } from 'react';
import DailogueChildren from './DailogueChildren.jsx';
import DailogueContent from './DailogueContent.jsx';


export default class DailogueHigher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { width: props.width },
                { height: props.height },
                {show: false},
                {modelInner: props.modelInner}
            ]
        }

    }
    componentWillMount() {
        this.setState({ height: window.innerHeight + 'px', width: window.innerWidth + 'px' });
    }

     
    render() {
        return (
            <div>
                <DailogueContent data={this.state.data} modelInner="Navigating your way to MD Anderson and around campus shouldn’t be stressful. We provide a parking guide, maps and directions, and shuttle information to assist you." />
                <DailogueChildren  data={this.state.data} />
            </div>
        )
    }
}
