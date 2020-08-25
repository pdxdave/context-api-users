import React, {useState, useEffect} from 'react'

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
        <div>
            {users.map(user => {
                return (
                    <div key={user.id}>
                        <p>Name: {user.name}</p>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default UserInfo
