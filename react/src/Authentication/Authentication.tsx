import React, { useState } from 'react'
import {Login} from './Login/Login'
import {Register} from './Register/Register'
import { LoginData, User } from '../Types/Types'
import { BrowserStorage } from '../Enums/Enums'
import { LOGIN_URL } from '../Constants/Constants'
import axios, { AxiosResponse } from 'axios'

export const login = (data: LoginData) => {

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
              localStorage.setItem(BrowserStorage.GET_USER, JSON.stringify(response.data))
              window.location.reload();
          }
    });
}

export const getCurrentUser = (): User => {
    let storedUserJson = localStorage.getItem(BrowserStorage.GET_USER);
    return storedUserJson != null ? JSON.parse(storedUserJson) : null;
}

export const logout = (): void => {
    localStorage.removeItem(BrowserStorage.GET_USER);
    window.location.reload();
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