import React, { useEffect } from 'react';

function Hello() {

    useEffect(() => {
        fetch("http://localhost:3001")
        .then(res => res.text())
        .then(data => console.log(data));
    }, []);

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default Hello;