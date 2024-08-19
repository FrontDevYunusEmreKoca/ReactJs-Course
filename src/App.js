
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

class App extends React.Component {
   render(){
    return (
      <React.Fragment>
        <Navbar />
        <User />
      </React.Fragment>    // react Fragmentin divden farki alan olsuturmaz ama div gorevi gorur
    )
   }
};



export default App;
