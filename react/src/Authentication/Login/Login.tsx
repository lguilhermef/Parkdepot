import React, { useState } from 'react'
import './Login.css'
import axios, { AxiosResponse } from 'axios'

const loginURL = "https://localhost:44376/api/auth/login"

interface Props {
    login: Function,
    setLoginview: Function
};

interface LoginData {
    email: string,
    pass: string
}

//chrome: session storage;
//passar de componente em compnente, component drilling;


export const Login: React.FC<Props> = ({login, setLoginview}) => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    let loginData: LoginData = {
        email: email,
        pass: password
    }
 
    const submitLogin: Function = () => {

        axios({
            method: "post",
            url: loginURL,
            data: loginData
          }).then((resp: AxiosResponse) => {
              if (resp.data) {
                  login(resp.data.user);
              }
        });
    }

    return (
        <div>

            <div className="login">
                <h1 className="cardTitle">Login</h1>
                <h3 className="label">Email</h3>
                <input type="email" onChange={event => setEmail(event.target.value)}></input>
                <h3 className="label">Pass</h3>
                <input type="password" onChange={event => setPassword(event.target.value)}></input>
               
                <div className="btnContainer">
                    <button onClick={() => submitLogin(loginData)}>Login</button>
                </div>

                <span className="linkBtn" onClick={() => setLoginview(false)}>Register</span>
            </div>

        </div>
        
    )
}