import React, {useState} from 'react';
import AuthStack from "./authStack";
import DrawerNavigator from "./drawerNavigator";

export default function MyStack() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    isLoggedIn
      ?
        <DrawerNavigator />
      :
        <AuthStack handleLogin={handleLogin} />
  );
}