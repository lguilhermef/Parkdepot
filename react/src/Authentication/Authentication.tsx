import React, { useState } from 'react'
import {Login} from './Login/Login'
import {Register} from './Register/Register'
import { User } from '../Types/Types'
import { BrowserStorage } from '../Enums/Enums'
import { LOGIN_URL } from '../Constants/Constants'
import axios, { AxiosResponse } from 'axios'

export const login = (email: string, pass: string) => {

    const loginData = {
        email: email,
        pass: pass
    }

    return         axios({
        method: "post",
        url: LOGIN_URL,
        data: loginData
      }).then((resp: AxiosResponse) => {
          if (resp.data) {
              //login(resp.data.user);
          }
    });
}

export const getCurrentUser = (): User => {
    let storedUserJson = localStorage.getItem(BrowserStorage.GET_USER);
    return storedUserJson != null ? JSON.parse(storedUserJson) : null;
}

export const logout = (): void => {
    localStorage.removeItem(BrowserStorage.GET_USER);
}

export const Authentication = () => {

    const [showLoginview, setLoginview] = useState<boolean>(true);

    const handleChange: Function = (value:boolean): void => {
        setLoginview(value);
    };

    return (
        <div>
            {showLoginview ? (<Login login={login} setLoginview={handleChange}/>) : (<Register/>)}
        </div>
    );
}

//{showLoginview ? (<Login setLoginview={handleChange}/>) : (<Register login={login}/>)}
