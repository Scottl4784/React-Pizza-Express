import React, { Component } from 'react';
import Menu from './components/Menu'
import SplashImage from './components/SplashImage';
import Description from './components/Description';
import Navbar from './components/Navbar';
import LocationList from './components/LocationList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <SplashImage />
        <Description/>
        <Menu />
        <LocationList/>
      </div>
    )
  }
}

export default App;
