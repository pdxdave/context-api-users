import React from 'react'
import {Link} from 'react-router-dom'

export default function Error() {
    return (
        <div style={{textAlign: "center" }}>
            <h1>Opps...wrong page</h1>
            <Link to="/">
                <button>Return</button>
            </Link>
        </div>
    )
}
