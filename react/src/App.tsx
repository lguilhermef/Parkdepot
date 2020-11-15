import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './Authentication/Login';

interface User {
  email: string,
  password: string,
  permission: Permission
};

interface Permission {
  name: string,
  level: number,
  description: string
};


const App: React.FC = () => {

  const [currentUser, setCurrentUser] = useState<User>();

  const login: Function = (user: User): void => {
    
    if (user.email) {
      setCurrentUser(user);
      return;
    }

    console.log("Login: NOT WORKING!")

  }; 

  return (
    <div className="App">
      {currentUser ? (
        <div>
          {currentUser.email}
        </div>
      
      ) : (

        <Login login={login}/>

      )}
    </div>
  );
};

export default App;
