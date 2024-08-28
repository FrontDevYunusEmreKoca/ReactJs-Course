import React, { useContext } from 'react'
import "./Users.css"
import User from './User'
import Loading from './Loading'
import AppContext from '../context/AppContext'


const Users =()=> {
    const appContext = useContext(AppContext)
    const {users,loading} = appContext
        if(loading){
            return <Loading />
        }
        else {
            return (
                <div className='container mt-3'>
                    <div className="row">
                            {users.map(user => (
                                    
                                    <User user= {user} key={user.id}/>
                                    
                            ))}
                    </div>
                  
                </div>
            )
        }
      
    }


export default Users
