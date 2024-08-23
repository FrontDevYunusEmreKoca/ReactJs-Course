import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <i className={this.props.icon}></i>
              {this.props.title}
            </Link>
          </div>
          <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                      <Link to="about" className="nav-link"></Link>
                </li>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fa-brands fa-github me-2",
};

export default Navbar;
