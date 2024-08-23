import React from 'react'
import "./Users.css"
import User from './User'
import Loading from './Loading'


class Users extends React.Component {
    render(){
        if(this.props.loading){
            return <Loading />
        }
        else {
            return (
                <div className='container mt-3'>
                    <div className="row">
                            {this.props.users.map(user => (
                                    
                                    <User user= {user} key={user.id}/>
                                    
                            ))}
                    </div>
                  
                </div>
            )
        }
      
    }
}

export default Users
