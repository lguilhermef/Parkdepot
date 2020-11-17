import './Dashboard.css'
import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { logout, getCurrentUser } from '../../Authentication/Authentication'
import { User } from '../../Types/Types'

export const Dashboard = () => {

    const currentUser: User = getCurrentUser();

    return (
        <div>
            <div className="header">
                <button>Whitelist</button>
                <button>New Plate</button>
                <button>Manage Users</button>
                <button onClick={() => logout()}>Logout</button>
            </div>

            <div className="card">
                <h1 className="cardTitle">Welcome {currentUser.username}!</h1>
                <Switch>

                </Switch>
            </div>
        </div>
    )
}