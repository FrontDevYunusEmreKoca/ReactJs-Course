import React from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

import Repos from "./Repos";


function UserDetails({ getUser, loading, user,getUserRepo, repos }) {
  const { login } = useParams();

  // `login` parametresini kullanarak gerekli işlemleri yapabilirsiniz
  React.useEffect(() => {
    getUser(login);
    getUserRepo(login);
  }, [login]);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-md-3 text-center">
            <div className="card">
              <img className="card-img-top" src={user.avatar_url} alt="" />
              <div className="card-body">
                <p className="card-text border-bottom">{login}</p>
                <p>
                  <i class="fa-solid fa-location-dot"></i> {user.location}
                </p>
                <a
                  className="btn btn-block  w-100 btn-primary btn-sm "
                  href={user.html_url}
                >
                  Github Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-9 text-center">
            <div className="card">
              <div className="card-body">
                {user.bio && (
                  <>
                    <h3>About</h3>
                    <p>{user.bio}</p>
                  </>
                )}
                {user.blog && (
                  <>
                    <h3>Blog</h3>
                    <p>{user.blog}</p>
                  </>
                )}
                <div>
                  <span class="badge bg-primary m-1">
                    Followers:{user.followers}
                  </span>
                  <span className="badge bg-danger m-1">
                    Following:{user.following}
                  </span>
                  <span className="badge bg-success m-1">
                    Repos:{user.public_repos}
                  </span>
                </div>
                <div></div>
              </div>
              <h3>Repos</h3>
              <ul className="list-group list-group-flush">
                <Repos  repos={repos}/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
 
  
}


export default UserDetails;
