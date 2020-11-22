import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import DrawerContent from "./drawerContent";
import { theme } from "../Constants";
import {
  Contacts,
  Chats,
  ChatScreen,
  AboutUs,
  Profile,
  Settings
} from "../Screens";

const ChatStack = createStackNavigator();

const ChatStackNavigator = ({styles, ...props}) => {
  return (
    <ChatStack.Navigator
      initialRouteName="Chats"
      screenOptions={{
        headerShown: null
      }}
    >
      <ChatStack.Screen name="Chats" component={Chats} />
      <ChatStack.Screen name="ChatScreen" component={ChatScreen} />
    </ChatStack.Navigator>
  )
}

const Stack = createStackNavigator();

const StackNavigator = ({styles, ...props}) => {
  return (
    <Animated.View style={{flex: 1, overflow: "hidden", ...styles}}>
      <Stack.Navigator
        initialRouteName="Chats"
        screenOptions={{
          headerShown: null
        }}
      >
        <Stack.Screen name="Chats" component={ChatStackNavigator} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </Animated.View>
  )
}

const Drawer = createDrawerNavigator();

export default (props) => {

  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8]
  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, wp(7)]
  });

  const styles = {borderRadius, transform: [{scale}]};

  const renderDrawerContent = (props)=>{
    setProgress(props.progress)
    return (<DrawerContent {...props} />)
  }

  const renderStackNavigator = (props) => (
    <StackNavigator {...props} styles={styles} />
  )

  return (
    <Animated.View style={{flex: 1, scale}}>
      <LinearGradient
        useAngle={true}
        angle={136}
        angleCenter={{ x: 0.5, y: 0.5 }}
        locations={[0, 1]}
        colors={[theme.colors.primary, theme.colors.secondary]}
        style={{flex: 1}}
      >
        <Drawer.Navigator
          drawerType="slide"
          focused={true}
          overlayColor="transparent"
          gestureHandlerProps={{}}
          contentContainerStyle={{flex: 1}}
          drawerStyle={{width: wp(60), backgroundColor: "transparent"}}
          sceneContainerStyle={{backgroundColor: "transparent"}}
          drawerContent={renderDrawerContent}
        >
          <Drawer.Screen
            name="StackNavigator"
            component={renderStackNavigator}
          />
        </Drawer.Navigator>
      </LinearGradient>
    </Animated.View>
  );
}