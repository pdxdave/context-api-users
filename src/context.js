import React, {useState, useEffect, createContext} from 'react'

export const MyContext = createContext()

export const MyProvider = (props) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])


    const fetchUsers = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await res.json()
        setUsers(data)
    }

    return (
        <MyContext.Provider value={[users, setUsers]}>
            {props.children}
        </MyContext.Provider>
    )
}



