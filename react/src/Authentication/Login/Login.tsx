import React, { useState } from 'react'
import './Login.css'
import {LoginData} from '../../Types/Types'
import { LOGIN_URL } from '../../Constants/Constants'
import axios, { AxiosResponse } from 'axios'
import { setCurrentUser } from '../Authentication'

interface Props {
    setLoginview: Function
};

export const loginUser = (data: LoginData) => {

    const loginData = {
        email: data.email,
        pass: data.pass
    }

    return axios({

        method: "post",
        url: LOGIN_URL,
        data: loginData

      }).then((response: AxiosResponse) => {

          if (response.data) {
              setCurrentUser(response.data);
          }
    });
}

export const Login = ({setLoginview} : Props) => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    let loginData: LoginData = {
        email: email,
        pass: password
    }

    return (
            <div className="login">
                <h1 className="cardTitle">Login</h1>
                <h3 className="label">Email</h3>
                <input type="email" onChange={event => setEmail(event.target.value)}></input>
                <h3 className="label">Pass</h3>
                <input type="password" onChange={event => setPassword(event.target.value)}></input>
               
                <div className="btnContainer">
                    <button onClick={() => loginUser(loginData)}>Login</button>
                </div>

                <span className="linkBtn" onClick={() => setLoginview(false)}>Register</span>
            </div>
    )
}