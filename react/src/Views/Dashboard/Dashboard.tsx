import './Dashboard.css'
import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { logout, getCurrentUser } from '../../Authentication/Authentication'
import { User } from '../../Types/Types'
import { Whitelist } from '../Whitelist/Whitelist'
import { UserManager } from '../UserManager/UserManager'
import { WhitelistNewRecord } from '../WhitelistNewRecord/WhitelistNewRecord'
import Logo from '../../Assets/park-icon.png'
import { PermissionType } from '../../Enums/Enums'

export const Dashboard = (): JSX.Element => {

    const currentUser: User = getCurrentUser();

    return (
        <div className="dashboardContainer">
            <div className="header">
                <Link to={"/"}>
                    <img className="headerLogo" src={Logo}></img><span className="logoLabel">1-Week Challenge App</span>
                </Link>
                
                { getCurrentUser().permission != PermissionType.GUEST ?
                
                    (<Link to={"/new-plate"}>
                        <button className="headerButton">Insert Record</button>
                    </Link>) 
                    : 
                    null
                }

                <Link to={"/whitelist"}>
                    <button className="headerButton">Whitelist</button>
                </Link>
    {/* 
                <Link to={"/user-manager"}>
                    <button>Manage Users</button>
                </Link>*/}
                <button className="logoutButton" onClick={() => logout()}>Logout</button>
            </div>

            <div className="formContainer">
                <Switch>
                    <Route path="/whitelist" component={() => <Whitelist/>}/>
                    {getCurrentUser().permission != PermissionType.GUEST ? <Route path="/new-plate" component={() => <WhitelistNewRecord/>}/> : null}
                    {/*<Route path="/user-manager" component={() => <UserManager/>} />*/}
                </Switch>
            </div>
        </div>
    )
}