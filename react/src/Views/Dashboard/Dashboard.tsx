import React, { useState } from 'react'
import { logout, getCurrentUser } from '../../Authentication/Authentication'
import { User } from '../../Types/Types'

export const Dashboard = () => {

    const currentUser: User = getCurrentUser();
    console.log(currentUser);
    console.log("DASH")

    return (
        <div>
            Welcome {currentUser.user.username}!
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}