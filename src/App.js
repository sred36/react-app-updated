import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Custome.css';
import H1Tag from './Stateless.js';
import StateFull from './StateFull.js';
import Background from './Background.jsx';
import PopulationView from './Svg/PopulationView.jsx';
import DailogueHigher from './ModelComp/DailogueHigher.jsx';
import FluxExample from './FluxComponent/FluxExample.jsx';
import FluxButton from './FluxComponent/FluxButton';


class App extends Component {
  render() {
    return (
      <div className="App">
      {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      <H1Tag color="bg-color-red" name="bg applied as red"/>
      <H1Tag color="bg-color-orange" name="bg applied as ornage"/>
      <H1Tag color="bg-color-green" name="bg applied as green"/>
      
      <StateFull fieldName='SIVA' />
        <Background />
       <PopulationView />
       <DailogueHigher/>
       */}
    
       
    {/*<FluxExample />*/}

     <FluxButton />

      </div>
    ); 
  }
}

export default App;
