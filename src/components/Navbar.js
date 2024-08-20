import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <div className="container">
            <a href="#" className="navbar-brand">
              <i className={this.props.icon}></i>
              {this.props.title}
            </a>
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
