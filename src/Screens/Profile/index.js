import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {
  Header
} from "../../Components/Molecular";
import { Text } from "../../Components/Atomic";
import { theme } from "../../Constants";
import styles from "./styles";

export default function Profile({navigation , ...props}) {

  const [isActive, setIsActive] = useState(true);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <View style={styles.container}>
        <Header infoText={"Profile"}/>
        <LinearGradient
          useAngle={true}
          angle={136}
          angleCenter={{ x: 0.5, y: 0.5 }}
          locations={[0, 1]}
          colors={[theme.colors.primary, theme.colors.secondary]}
          style={styles.linearGradient}
        >
          <Image
            source={require("../../assets/users/profileDp.png")}
            style={styles.dp}
          />
          <Text
            type="semiBold"
            style={styles.userName}
          >
            Kit Harrington
          </Text>
          <Text
            type="semiBold"
            style={styles.contactNo}
          >
            +91 9876543210
          </Text>
        </LinearGradient>
        <View style={styles.rowsContainer}>
          <View style={styles.rowContainer}>
            <Text
              type="bold"
              style={styles.heading}
            >
              Status
            </Text>
            <Text
              type="semiBold"
              style={styles.subHeading}
            >
              Do what you love!
            </Text>
          </View>
          <View style={styles.rowContainer}>
            <Text
              type="bold"
              style={styles.heading}
            >
              Profile Link
            </Text>
            <View style={styles.subContainer}>
              <Text
                type="semiBold"
                style={styles.subHeading}
              >
                messagely.ct/kitty
              </Text>
              <TouchableOpacity>
                <Text
                  type="semiBold"
                  style={styles.lightButton}
                >
                  Copy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <Text
              type="bold"
              style={styles.heading}
            >
              Account
            </Text>
            <View style={styles.subContainer}>
              <Text
                type="semiBold"
                style={{color: isActive ? theme.colors.lightBlack : theme.colors.red }}
              >
                {
                  isActive
                    ?
                      "Active"
                    :
                      "Disabled"
                }
              </Text>
              <TouchableOpacity onPress={()=>setIsActive(!isActive)}>
                <Text
                  type="semiBold"
                  style={styles.lightButton}
                >
                  {
                    isActive
                      ?
                        "Disable"
                      :
                        "Active"
                  }
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}