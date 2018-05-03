import React, { Component } from 'react';
import './App.css';

import Menu from './components/Menu/Menu'

//
import Draw from './containers/Draw'
// import Active from './components/active/active'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <Menu/>
        </div>
        <div className="main">
          <Draw/>
        </div>
      </div>
    );
  }
}

 
export default App;
