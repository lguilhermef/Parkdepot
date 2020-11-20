import './Dashboard.css'
import React from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import { logout, getCurrentUser } from '../../Authentication/Authentication'
import { User } from '../../Types/Types'
import { Whitelist } from '../Whitelist/Whitelist'
import { WhitelistNewRecord } from '../WhitelistNewRecord/WhitelistNewRecord'
import Logo from '../../Assets/park-icon.png'
import { PermissionType } from '../../Enums/Enums'

export const Dashboard = (): JSX.Element => {

    const currentUser: User = getCurrentUser();

    return (
        <div className="dashboardContainer">
            <div className="header">

                <Link to={"/"}>
                    <img className="headerLogo" src={Logo}></img><span className="logoLabel">{currentUser.username}</span>
                </Link>
                
                { currentUser.permission != PermissionType.GUEST ?
                
                    (<>
                        <Link to={"/plate-form"}>
                            <button className="headerButton">Insert Record</button>
                        </Link>
                        
                        <Link to={"/whitelist"}>
                        <button className="headerButton">Whitelist</button>
                        </Link>
                    </>)
                    : 
                    null
                }

                <button className="logoutButton" onClick={() => logout()}>Logout</button>
            </div>

            <div className="formContainer">
                <Switch>
                    <Route path="/whitelist" component={() => <Whitelist/>}/>
                    {currentUser.permission != PermissionType.GUEST ? <Route path="/plate-form" component={() => <WhitelistNewRecord/>}/> : null}
                </Switch>
            </div>
        </div>
    );
}