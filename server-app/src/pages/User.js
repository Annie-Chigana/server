import React, { useState, useLayoutEffect} from 'react';

function User() {
    const  [user, setUser] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/user")
        .then(res => res.json())
        .then(data => setUser(data));
    })

    return (
        <div>
            <h1>Data from node</h1>

            {user && (
                <p>
                    {user.name} - {user.role}
                </p>
            )}
        </div>
    )
}