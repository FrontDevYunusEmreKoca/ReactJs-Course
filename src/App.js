import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import axios from "axios";
import Search from "./components/Search";
import Alert from "./components/Alert";
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this);
    this.setAlert = this.setAlert.bind(this);
    this.state = {
      loading: false,
      users: [],
      alert: null,
    };
  }
  componentDidMount() {
    // apiye ulastik
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get("https://api.github.com/users")
        .then((res) => this.setState({ users: res.data, loading: false }));
    }, 1000);
  }
  searchUsers(keyword) {
    // apiye ulastik
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res) =>
          this.setState({ users: res.data.items, loading: false })
        );
    }, 1000);
  }
  clearUsers() {
    this.setState({
      users: [],
    });
  }

  setAlert(msg, type) {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Alert alert={this.state.alert} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search
                  searchUsers={this.searchUsers}
                  clearUsers={this.clearUsers}
                  setAlert={this.setAlert}
                />
                <Users users={this.state.users} loading={this.state.loading} />
              </>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter> // react Fragmentin divden farki alan olsuturmaz ama div gorevi gorur
    );
  }
}

export default App;
