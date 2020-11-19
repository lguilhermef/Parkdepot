import React, { useState } from 'react'
import {Login} from './Login/Login'
import {Register} from './Register/Register'
import { User } from '../Types/Types'
import { BrowserStorage } from '../Enums/Enums'

export const getCurrentUser = (): User => {
    let storedUserJson = localStorage.getItem(BrowserStorage.GET_USER);
    return storedUserJson != null ? JSON.parse(storedUserJson) : null;
}

export const setCurrentUser = (user: User): void => {
    localStorage.setItem(BrowserStorage.GET_USER, JSON.stringify(user))
    window.location.reload();
}

export const logout = (): void => {
    localStorage.removeItem(BrowserStorage.GET_USER);
    window.location.reload();
}

export const Authentication = (): JSX.Element => {

    const [showLoginView, setLoginView] = useState<boolean>(true);

    const handleChange: Function = (value:boolean): void => {
        setLoginView(value);
    };

    return (
        <div className="dashboardContainer">
            {showLoginView ? <Login setLoginview={handleChange}/> : <Register/>}
        </div>
    );
}