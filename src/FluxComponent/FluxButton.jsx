import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppStore from "../Flux/Stores/AppStore";
import AppAction from '../Flux/Actions/AppAction';

class FluxButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: AppStore.getButtonValues()
        }

    }
    componentDidMount() {
        AppStore.addChangeListener(this.appStoreChangeListner);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this.appStoreChangeListner);
    }

    appStoreChangeListner = () => {
        let isShow = AppStore.getButtonValues();
        debugger;
        this.setState({
            show: isShow
        })
    }

    setButton(isShow) {
        debugger;
        AppAction.showButton(isShow);
    }

    render() {
        return (
            <div>
                <div onMouseOver={this.setButton.bind(this, true)} onMouseOut={this.setButton.bind(this, false)}  >Show Button </div>
                {this.state.show && <button>I am Visible</button>}
            </div>
        );
    }
}


export default FluxButton;