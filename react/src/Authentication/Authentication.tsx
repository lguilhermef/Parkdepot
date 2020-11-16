import React, { useState } from 'react'
import {Login} from './Login/Login'
import {Register} from './Register/Register'

interface Props {
    login: Function,
}

export const Authentication: React.FC<Props> = ({login}) => {

    const [showLoginview, setLoginview] = useState<boolean>(true);

    const handleChange: Function = (value:boolean): void => {
        setLoginview(value);
    };

    return (
        <div>
            {showLoginview ? (<Login login={login} setLoginview={handleChange}/>) : (<Register login={login}/>)}
        </div>
    );
}
