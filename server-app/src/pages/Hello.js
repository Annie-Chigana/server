import React, { useEffect, useState } from 'react';

function Hello() {

    const [message, setMessage] = useState("");


    useEffect(() => {
        fetch("http://localhost:3001")
        .then(res => res.text())
        .then(data => setMessage(data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Hello World</h1>
            <p>{message}</p>
        </div>
    )
}

export default Hello;