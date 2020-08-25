import React from 'react'
import {Link} from 'react-router-dom'

const User = ({user}) => {
    return (
        <div>
            <div style={{border: "1px solid red", padding: "10px"}}>
                <p>Name: {user.name}</p>
                <p>Company: {user.company.name}</p>
                <Link to={`/user-info/${user.id}`}>View User</Link>
            </div>
        </div>
    )
}

export default User
