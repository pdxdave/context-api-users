import React, {useContext} from 'react'
import {MyContext} from '../context'
import User from './User'

import './UsersList.css'

const UsersList = () => {

    const [users] = useContext(MyContext)
    
    return (
        <div>
            <h1 style={{textAlign: "center"}}>User List</h1>
            <div className="container">
                {users.map(user => (
                    <User user={user} key={user.id}/>
                ))}
            </div>
        </div>
    )
}

export default UsersList
