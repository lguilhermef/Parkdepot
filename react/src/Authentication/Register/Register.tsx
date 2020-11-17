import React, { useState } from 'react'
import './Register.css'
import axios, { AxiosResponse } from 'axios'
import { REGISTER_USER_URL } from '../../Constants/Constants'
import { NewUserData } from '../../Types/Types'
import { setCurrentUser } from '../Authentication'


export const Register = () => {

    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [pass, setPass] = useState<string>("");

    let newUser: NewUserData = {
        email: email,
        username: username,
        pass: pass
    };

    const handleChange: Function = (value: any, callback: Function): void => callback(value);

    const registerUser: Function = () => {
        
        axios({
            method: "post",
            url: REGISTER_USER_URL,
            data: newUser

        }).then((resp: AxiosResponse) => {

            if (resp.data) {
                setCurrentUser(resp.data);
            };
        })
    };

    return (
        <div>

        <div className="login">
            <h1 className="cardTitle">Register</h1>
            <h3 className="label">Email</h3>
            <input type="email" onChange={event => handleChange(event.target.value, setEmail)}></input>
            <h3 className="label">Username</h3>
            <input type="text" onChange={event => handleChange(event.target.value, setUsername)}></input>
            <h3 className="label">Pass</h3>
            <input type="password" onChange={event => handleChange(event.target.value, setPass)}></input>
            <div className="btnContainer">
                <button onClick={() => registerUser()}>Register</button>
            </div>
        </div>

    </div>
    );
}
