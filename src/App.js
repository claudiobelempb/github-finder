import React, { Component } from 'react'
import NavBar from './components/layout/NavBar';
import './App.css';

class App extends Component {
  render() {
    // const name = 'Cláudio Cardoso';
    // const loading = false;
    // const showName = false;
    return (
      <>
        <NavBar />
        {/* {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>} */}
      </>
    );
  }
}

export default App;
