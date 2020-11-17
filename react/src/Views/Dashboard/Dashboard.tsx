import './Dashboard.css'
import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { logout, getCurrentUser } from '../../Authentication/Authentication'
import { User } from '../../Types/Types'
import { Whitelist } from '../Whitelist/Whitelist'
import { UserManager } from '../UserManager/UserManager'
import { WhitelistNewRecord } from '../WhitelistNewRecord/WhitelistNewRecord'

export const Dashboard = () => {

    const currentUser: User = getCurrentUser();

    return (
        <div className="dashboardContainer">
            <div className="header">
                <Link to={"/whitelist"}>
                    <button>Whitelist</button>
                </Link>
                
                <Link to={"/new-plate"}>
                    <button>Insert Record</button>
                </Link>
    {/* 
                <Link to={"/user-manager"}>
                    <button>Manage Users</button>
                </Link>*/}
                <span className="cardTitle">Logged as <strong>{currentUser.username}</strong>!</span>
                <button onClick={() => logout()}>Logout</button>
            </div>

            <div className="formContainer">
                <Switch>
                    <Route path="/whitelist" component={() => <Whitelist/>} />
                    <Route path="/new-plate" component={() => <WhitelistNewRecord/>} />
                    {/*<Route path="/user-manager" component={() => <UserManager/>} />*/}
                </Switch>
            </div>
        </div>
    )
}