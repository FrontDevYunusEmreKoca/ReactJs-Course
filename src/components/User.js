import React from "react";
import "./User.css";
import { Link } from 'react-router-dom';

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { login, avatar_url, html_url } = this.props.user; // artik asagida this.state.name demeye gerek yok
    return (
      <div className="col-md-4 col-sm-6 col-lg-3">
        <div className="card mt-3">
          <img className="img-fluid" src={avatar_url} alt="" />
          <div className="card-body">
                <h5 className="card-title">{login}</h5>
                <Link to={`user/${login}`} className="btn btn-sm btn-primary">
                Go Profile
                </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
