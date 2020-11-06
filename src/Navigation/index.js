import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../Screens/Login";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName={"Login"}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}