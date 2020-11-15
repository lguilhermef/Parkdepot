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
            <h3 className="label">Email</h3>
            <input type="email" onChange={event => setEmail(event.target.value)}></input>
            <h3 className="label">Pass <input type="password" onChange={event => setPassword(event.target.value)}></input></h3>
            <button onClick={() => login(user)}>Login</button>
        </div>
    )
}