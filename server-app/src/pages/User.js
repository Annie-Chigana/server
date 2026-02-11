import React, { useState, useEffect} from 'react';

function User() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState(null);



    const login = () => {
        fetch("http://localhost:3001/login", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ user, password })
            })
            .then(res => res.json())
            .then(data => setResult(data));
        };

    return (
        <div>
            <h2>Login</h2>

            <input
            placeholder = "username"
            value={user}
            onChange={e => setUser(e.target.value)}
            />

            <br /> <br />

            <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />

            <br /> <br />

            <button onClick={login}>Login</button>

            {result && result.success && (
                <p>
                    Welcome
                    <strong>{result.name}</strong>
                    <br />
                    Role: <strong>{result.role}</strong>
                </p>
            )}


        </div>
    )
}

export default User;