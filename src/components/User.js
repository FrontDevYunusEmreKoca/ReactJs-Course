import React from 'react'
import "./User.css"

class User extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            id: "166130197",
            name:"Yunus Emre KOCA",
            login:"FrontDevYunusEmreKoca",
           avatar_url: "https://avatars.githubusercontent.com/u/166130197?v=4",
           html_url: "https://github.com/FrontDevYunusEmreKoca",
           followers: 1,
           blog: ""
        }
    }
    render(){
        const {name,login,avatar_url,html_url,followers,blog} = this.state; // artik asagida this.state.name demeye gerek yok
        return (
            <div>
                <div className='m-2 card'>
                    <div className="row">
                        <div className="col-md-3">
                           <img src={avatar_url} alt="" className='card-img'/>
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <h5 className='card-title'>{name}</h5>
                                <p className='card-text'>Followers :{followers}</p>
                                <p className='card-text'>Blog :{blog}</p>
                                <a href={html_url} className='btn btn-sm btn-primary '>Go Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User
