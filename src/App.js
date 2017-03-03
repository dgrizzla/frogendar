import React from 'react';
import logo from './frog.png';
import './App.css';

const obj = {};

obj.displayName = "App";

obj.render = function(){
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date();
  var dayName = days[d.getDay()];
  return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>It is wednesday my dudes</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
}

const App = React.createClass(obj);

export default App;
