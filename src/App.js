import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import axios from "axios";
import Search from "./components/Search";
import Alert from "./components/Alert";
import UserDetails from "./components/UserDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import About from "./components/About";

const App = () => {

    const [users,setUsers] = useState([])
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(false)
    const [alert,setAlert] = useState(null)
    const [repos,setRepos] = useState([])

  //  const componentDidMount=() =>{
  //   // apiye ulastik
  //   this.setState({ loading: true });
  //   setTimeout(() => {
  //     axios
  //       .get("https://api.github.com/users")
  //       .then((res) => this.setState({ users: res.data, loading: false }));
  //   }, 1000);
  // }
   const searchUsers = (keyword)=> {
    // apiye ulastik
    setLoading(true)
    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res) =>{
            setUsers(res.data.items)
            setLoading(false)
        });
    }, 1000);
  }
  //////////////////////////////////////////////
  const getUser = (username) =>{
   setLoading(true);
    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((res) =>{

          setUser(res.data)
          setLoading(false)
          
        });
    }, 1000);
  }
/////////////////////////////////////////////////////
  const getUserRepo=(username)=>{
    setLoading(true)
    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((res) => {
          setRepos(res.data)
          setLoading(false)
        
        });
    }, 1000);
  }

  const clearUsers=() =>{
   setUsers([])
  }

 const showAlert = (msg, type) =>{
   setAlert(msg,type)
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
 
   
    return (
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search
                  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  setAlert={showAlert}
                />
                <Users users={users} loading={loading} />
              </>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/user/:login" element={
            <UserDetails 
                      getUser={getUser}
                      getUserRepo={getUserRepo}
                      user={user} 
                      repos={repos}
                      loading={loading}

             />}></Route>
        </Routes>
      </BrowserRouter> // react Fragmentin divden farki alan olsuturmaz ama div gorevi gorur
    );
  }


export default App;
