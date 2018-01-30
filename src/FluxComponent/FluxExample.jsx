import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppStore from "../Flux/Stores/AppStore";
import AppAction from '../Flux/Actions/AppAction';

class FluxExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storeState: null
        }

    }

    componentWillMount() {
        this.getData();
    }

    componentDidMount() {

        //Store Listener is binding to store ...
        AppStore.addChangeListener(this.appStoreChangeListner);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this.appStoreChangeListner);
    }

    appStoreChangeListner = () => {

        //View callback function, listening all emit changes seting a state to re-render view component
        let storeState = AppStore.getStoreState();
        debugger;
        this.setState({
            storeState: storeState
        })
    }

    getData = () => {
        AppAction.getData();
    }

    getAllComments = () => {
        AppAction.getAllComments();
    }

    render() {
        return (
            <div>
                <button onClick={this.getData}> Load Data </button>
                <button onClick={this.getAllComments}> Load Comments </button>
            </div>
        );
    }
}

export default FluxExample;