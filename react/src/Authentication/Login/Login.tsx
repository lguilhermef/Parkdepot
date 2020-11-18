import React, { useState } from 'react'
import './Login.css'
import {LoginData} from '../../Types/Types'
import { LOGIN_URL, LOGIN_ERROR_MESSAGE } from '../../Constants/Constants'
import { AppMessageType } from '../../Enums/Enums'
import axios, { AxiosResponse } from 'axios'
import { setCurrentUser } from '../Authentication'
import Logo from '../../Assets/park-icon.png'
import { AppMessage } from '../../Components/AppMessage/AppMessage'

interface Props {
    setLoginview: Function
};

export const Login = ({setLoginview} : Props) => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

    let loginData: LoginData = {
        email: email,
        pass: password
    }

    const loginUser = (data: LoginData) => {

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

        }).catch(() => {
            setShowErrorMessage(true);            
        });
    }

    return (
        <div>
            <div className="header">
                <img className="headerLogo" src={Logo}></img><span className="logoLabel">Conceptual App</span>
            </div>

            <div className="formContainer">
                <div className="form">
                    <h1 className="cardTitle">Login</h1>
                    <input type="email" placeholder="Email" onChange={event => setEmail(event.target.value)}></input>
                    <input type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}></input>
                    <div className="btnContainer">
                        <button onClick={() => loginUser(loginData)}>Login</button>
                    </div>
                   {/* <span className="linkBtn" onClick={() => setLoginview(false)}>Register</span> */}
                </div>
            </div>

            <AppMessage message={LOGIN_ERROR_MESSAGE} messageType={AppMessageType.ERROR} showMessage={showErrorMessage} hideMessageHook={setShowErrorMessage}/>

        </div>
    )
}