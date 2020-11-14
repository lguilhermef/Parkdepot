import React, { useState } from 'react'
import './Login.css'

interface Props {
    login: Function
}


export const Login: React.FC<Props> = ({login}) => {

    const [email, setEmail] = useState<String>();
    const [password, setPassword] = useState<String>();

    let user = {
        password: password,
        email: email
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <p>Email: <input type="email" onChange={event => setEmail(event.target.value)}></input></p>
            <p>Pass: <input type="password" onChange={event => setPassword(event.target.value)}></input></p>
            <button onClick={() => login(user)}>Login</button>
        </div>
    )
}