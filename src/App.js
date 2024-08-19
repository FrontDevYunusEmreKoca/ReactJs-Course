
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import User from './components/User';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users:[]
    }
  }
  componentDidMount(){ // apiye ulastik
    axios
        .get("https://api.github.com/users")
        .then(res => this.setState({users:res.data}))
  }
   render(){
    return (
      <React.Fragment>
        <Navbar />
        <Users users = {this.state.users} />
      </React.Fragment>    // react Fragmentin divden farki alan olsuturmaz ama div gorevi gorur
    )
   }
};



export default App;
