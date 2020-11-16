import React, { useEffect, useState } from 'react';
import './App.css';
import {Authentication, getCurrentUser} from './Authentication/Authentication'
import {Dashboard} from './Views/Dashboard/Dashboard'
import { User, Permission } from './Types/Types'

export const App: React.FC = () => {

  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {

    const user: User = getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

  }, [currentUser]);

  /*const login = (user: User): void => {
    
    if (user.email) {
      setCurrentUser(user);
      return;
    }
 
    console.log("Login: NOT WORKING!")
  }; */

  return (
    <div className="App">
      {currentUser ? (

        <div>
          <Dashboard/>
          
        </div>
      
      ) : (
        //<Authentication login={login}/>
        <Authentication/>

      )}
    </div>
  );
};