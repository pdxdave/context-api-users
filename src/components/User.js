import React from 'react'
import {Link} from 'react-router-dom'

const User = ({user}) => {
    return (
        <div>
            <p>{user.name}</p>
            <Link to={`/user-info/${user.id}`}>View User</Link>
        </div>
    )
}

export default User
