
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import axios from 'axios';
import Search from './components/Search';

class App extends React.Component {
  constructor(props){
    super(props)
    this.searchUsers = this.searchUsers.bind(this)
    this.state = {
      loading:false,
      users:[]
    }
  }
  componentDidMount(){ // apiye ulastik
    this.setState({loading:true})
    setTimeout(() =>{
      axios
      .get("https://api.github.com/users")
      .then(res => this.setState({users:res.data, loading:false}))
    },1000)
   
   }
  searchUsers(keyword){ // apiye ulastik
    this.setState({loading:true})
    setTimeout(() =>{
      axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res => this.setState({users:res.data.items, loading:false}))
    },1000)
   
  }
   render(){
    return (
      <React.Fragment>
        <Navbar />
        <Search searchUsers={this.searchUsers} /> 
        <Users users = {this.state.users} loading = {this.state.loading} />
        
      </React.Fragment>    // react Fragmentin divden farki alan olsuturmaz ama div gorevi gorur
    )
   }
};



export default App;
