import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './UserInfo.css'

const UserInfo = (props) => {

    const id = props.match.params.id 
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
            let data = await res.json()
            setUsers(data)
        }
        fetchData()
    }, [])

    return (
        <div className="info-container">
            {users.map(user => {
                return (
                    <div key={user.id} className="info-card">
                        <div className="info-user">
                            <h3><span>Name:</span> {user.name}</h3>
                            <p>Email: {user.email}</p>
                        </div>
                        <div>
                            <h3>Address</h3>
                            <p>Street: {user.address.street}</p>
                            <p>Suite: {user.address.suite}</p>
                            <p>City: {user.address.city}</p>
                            <p>Zipcode: {user.address.zipcode}</p>
                        </div>
                        <Link to="/">
                            <button>Return</button>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default UserInfo
