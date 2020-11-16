import React, { useState } from 'react'
import './Register.css'
import axios from 'axios'
import { JsxElement, JsxEmit } from 'typescript';

const postURL = "https://localhost:44376/api/auth/register-user";

interface Props {
    login: Function
}

interface NewUser {
    email: string,
    username: string,
    pass: string
}

export const Register: React.FC<Props> = (props): JSX.Element => {

    const {login} = props;

    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [pass, setPass] = useState<string>("");

    let newUser: NewUser = {
        email: email,
        username: username,
        pass: pass
    };

    const handleChange: Function = (value: any, callback: Function): void => callback(value);

    const registerUser: Function = () => {
        
        axios({
            method: "post",
            url: postURL,
            data: newUser
          }).then(resp => {
              if (resp.data) {
                  login(resp.data);
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
