import React, { useState } from 'react'
import './Register.css'
import axios, { AxiosResponse } from 'axios'
import { REGISTER_USER_URL } from '../../Constants/Constants'
import { NewUserData } from '../../Types/Types'
import { setCurrentUser } from '../Authentication'
import Logo from '../../Assets/park-icon.png'


export const Register = () => {

    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [pass, setPassword] = useState<string>("");
    const [landingPage, setLandingPage] = useState<string>("");


    let newUser: NewUserData = {
        email: email,
        username: username,
        pass: pass,
        landingPage: landingPage
    };

    const registerUser = () => {
        
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
        <>
            <div className="header">
                <img className="headerLogo" src={Logo}></img><span className="logoLabel">Conceptual App</span>
            </div>

            <div className="formContainer">
                <div className="form">
                    <h1 className="cardTitle">Register</h1>
                    <input className="registerInput" type="email" placeholder="Email" onChange={event => setEmail(event.target.value)}></input>
                    <input className="registerInput" type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}></input>
                    <input className="registerInput" type="text" placeholder="Username" onChange={event => setUsername(event.target.value)}></input>
                    <input className="registerInput" type="text" placeholder="Landing Page" onChange={event => setLandingPage(event.target.value)}></input>
                    <div className="btnContainer">
                        <button onClick={() => registerUser()}>Register</button>
                    </div>
                </div>
            </div>

        </>
    );
}
