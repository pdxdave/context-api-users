import React from 'react'
import {Link} from 'react-router-dom'

import './User.css'

const User = ({user}) => {
    return (
        <div>
            <div className="card">
                <p>Name: {user.name}</p>
                <p>Company: {user.company.name}</p>
                <Link to={`/user-info/${user.id}`}>
                    <button>view user</button>
                </Link>
            </div>
        </div>
    )
}

export default User
