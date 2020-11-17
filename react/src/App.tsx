import React, { useEffect, useState } from 'react';
import './App.css';
import {Authentication, getCurrentUser} from './Authentication/Authentication'
import {Dashboard} from './Views/Dashboard/Dashboard'
import { User } from './Types/Types'

export const App: React.FC = () => {

  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {

    const user: User = getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

  }, []);

  return (
    <div className="App">
      {currentUser ? (<Dashboard/>) : (<Authentication/>)}
    </div>
  );
};