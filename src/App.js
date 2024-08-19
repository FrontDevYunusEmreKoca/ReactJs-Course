
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import User from './components/User';

class App extends React.Component {
   render(){
    return (
      <React.Fragment>
        <Navbar />
        <Users />
      </React.Fragment>    // react Fragmentin divden farki alan olsuturmaz ama div gorevi gorur
    )
   }
};



export default App;
