import React, { useState } from 'react'
import { logout } from '../../Authentication/Authentication'

export const Dashboard = () => {
    return (
        <div>
            Welcome!
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}