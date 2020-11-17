import './Dashboard.css'
import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { logout, getCurrentUser } from '../../Authentication/Authentication'
import { User } from '../../Types/Types'
import { Whitelist } from '../Whitelist/Whitelist'
import { UserManager } from '../UserManager/UserManager'

export const Dashboard = () => {

    const currentUser: User = getCurrentUser();

    return (
        <div>
            <div className="header">
            <Link to={"/whitelist"}>
                <button>Whitelist</button>
            </Link>

            <button>New Plate</button>

            <Link to={"/user-manager"}>
                <button>Manage Users</button>
            </Link>
                <button onClick={() => logout()}>Logout</button>
            </div>

            <div className="card">
                <h1 className="cardTitle">Welcome {currentUser.username}!</h1>
                <Switch>
                    <Route path="/whitelist" component={() => <Whitelist/>} />
                    <Route path="/user-manager" component={() => <UserManager/>} />
                </Switch>
            </div>
        </div>
    )
}