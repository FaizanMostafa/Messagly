import React from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Animated from 'react-native-reanimated';
import { Text } from "../Components/Atomic";
import { getFontFamily } from "../Helpers";
import { theme } from "../Constants";

export default DrawerContent = ({progress, ...props}) => {

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <Animated.View style={{ ...styles.outerContainer, transform: [{ translateX }] }}>
      <DrawerContentScrollView contentContainerStyle={styles.outerContainer} {...props}>
        <View style={styles.detailsContainer}>
          <Image style={styles.dp} source={require("../assets/users/profileDp.png")} />
          <Text type="semiBold" style={styles.userName}>Kit Harrington</Text>
        </View>
        <View style={styles.navContainer}>
          <DrawerItem
            label="Chats"
            labelStyle={styles.navText}
            onPress={()=>props.navigation.navigate("Chats")}
          />
          <DrawerItem
            label="Contacts"
            labelStyle={styles.navText}
            onPress={()=>props.navigation.navigate("Contacts")}
          />
          <DrawerItem
            label="Profile"
            labelStyle={styles.navText}
            onPress={()=>props.navigation.navigate("Profile")}
          />
          <DrawerItem
            label="Settings"
            labelStyle={styles.navText}
            onPress={()=>props.navigation.navigate("Settings")}
          />
          <DrawerItem
            label="About Us"
            labelStyle={styles.navText}
            onPress={()=>props.navigation.navigate("AboutUs")}
          />
        </View>
      </DrawerContentScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1
  },
  navText: {
    fontFamily: getFontFamily("semiBold"),
    color: theme.colors.white,
    fontSize: wp(4.5)
  },
  detailsContainer: {
    marginLeft: wp(5),
    marginTop: wp(5),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.white
  },
  dp: {
    width: wp(17),
    height: wp(17),
    borderRadius: wp(1.5)
  },
  userName: {
    fontSize: wp(4.5),
    color: theme.colors.white,
    marginVertical: wp(3)
  },
  navContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: hp(-20)
  }
});