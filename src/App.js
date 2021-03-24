import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import { UserItem } from './components/users/UserItem';

import './App.css';

class App extends Component {
  render() {
    // const name = 'Cláudio Cardoso';
    // const loading = false;
    // const showName = false;
    return (
      <>
        <NavBar />
        <UserItem />
        {/* {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>} */}
      </>
    );
  }
}

export default App;
