import React from 'react'
import "./Users.css"
import User from './User'

class Users extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: [
                {
                    login: "mojombo",
                    id: 1,
                    url: "https://api.github.com/users/mojombo",
                    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                    html_url: "https://github.com/mojombo",
                  },
                  {
                    login: "defunkt",
                    id: 2,
                    url: "https://api.github.com/users/defunkt",
                    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
                    html_url: "https://github.com/defunkt"
                  },
                  {
                    login: "pjhyett",
                    id: 3,
                    url: "https://api.github.com/users/pjhyett",
                    avatar_url: "https://avatars.githubusercontent.com/u/4?v=4",
                    html_url: "https://github.com/pjhyett",
                  },
                  {
                    login: "defunkt",
                    id: 2,
                    url: "https://api.github.com/users/defunkt",
                    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
                    html_url: "https://github.com/defunkt"
                  },
                  {
                    login: "defunkt",
                    id: 2,
                    url: "https://api.github.com/users/defunkt",
                    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
                    html_url: "https://github.com/defunkt"
                  },
                  {
                    login: "defunkt",
                    id: 2,
                    url: "https://api.github.com/users/defunkt",
                    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
                    html_url: "https://github.com/defunkt"
                  }
            ]
        }
        
    }
    render(){
        return (
            <div className='container mt-3'>
                <div className="row">
                        {this.state.users.map(user => (
                                
                                <User user= {user}/>
                                
                        ))}
                </div>
              
            </div>
        )
    }
}

export default Users
