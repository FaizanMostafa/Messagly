import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Login,
  Signup,
  ForgotPassword,
  SetupProfile,
  OTP
} from "../Screens";

const AuthStack = createStackNavigator();

export default function AuthenticationStack(props) {
  return (
    <AuthStack.Navigator
      headerMode="none"
      initialRouteName={"Login"}
    >
      <AuthStack.Screen name="Login" component={()=><Login handleLogin={props.handleLogin} {...props} />} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="SetupProfile" component={()=><SetupProfile handleLogin={props.handleLogin} {...props} />} />
      <AuthStack.Screen name="OTP" component={OTP} />
    </AuthStack.Navigator>
  );
}