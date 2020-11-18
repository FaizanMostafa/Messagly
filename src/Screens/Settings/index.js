import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import {
  Header
} from "../../Components/Molecular";
import { Text, Switch } from "../../Components/Atomic";
import { theme } from "../../Constants";
import styles from "./styles";
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';

export default function Settings({navigation , ...props}) {

  const [isDiscoverable, setIsDiscoverable] = useState(true);
  const [showStatus, setShowStatus] = useState(false);
  const [showDP, setShowDP] = useState(true);
  const [isSoundEnable, setIsSoundEnable] = useState(true);
  const [isVibrationEnable, setIsVibrationEnable] = useState(false);
  const [shouldMessagePreview, setShouldMessagePreview] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <View style={styles.container}>
        <Header infoText={"Settings"}/>
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} style={styles.rowsContainer}>
          <Text
            type="bold"
            style={styles.heading}
          >
            Privacy
          </Text>
          <View style={styles.rowContainer}>
            <Text
              type="semiBold"
              style={styles.subHeading}
            >
              Discoverable By Others
            </Text>
            <Switch
              isEnabled={isDiscoverable}
              toggleSwitch={()=>setIsDiscoverable(!isDiscoverable)}
            />
          </View>
          <View style={styles.rowContainer}>
            <Text
              type="semiBold"
              style={styles.subHeading}
            >
              Show Status
            </Text>
            <Switch
              isEnabled={showStatus}
              toggleSwitch={()=>setShowStatus(!showStatus)}
            />
          </View>
          <View style={{...styles.rowContainer, borderBottomWidth: 0}}>
            <Text
              type="semiBold"
              style={styles.subHeading}
            >
              Show Display Picture
            </Text>
            <Switch
              isEnabled={showDP}
              toggleSwitch={()=>setShowDP(!showDP)}
            />
          </View>
          <Text
            type="bold"
            style={{...styles.heading, marginTop: wp(6)}}
          >
            Notifications
          </Text>
          <View style={styles.rowContainer}>
            <Text
              type="semiBold"
              style={styles.subHeading}
            >
              Sounds
            </Text>
            <Switch
              isEnabled={isSoundEnable}
              toggleSwitch={()=>setIsSoundEnable(!isSoundEnable)}
            />
          </View>
          <View style={styles.rowContainer}>
            <Text
              type="semiBold"
              style={styles.subHeading}
            >
              Vibration
            </Text>
            <Switch
              isEnabled={isVibrationEnable}
              toggleSwitch={()=>setIsVibrationEnable(!isVibrationEnable)}
            />
          </View>
          <View style={{...styles.rowContainer, borderBottomWidth: 0}}>
            <Text
              type="semiBold"
              style={styles.subHeading}
            >
              Message Preview
            </Text>
            <Switch
              isEnabled={shouldMessagePreview}
              toggleSwitch={()=>setShouldMessagePreview(!shouldMessagePreview)}
            />
          </View>
          <Text
            type="bold"
            style={{...styles.heading, marginTop: wp(6)}}
          >
            Account
          </Text>
          <TouchableOpacity style={styles.touchableItem}>
            <Text
              type="semiBold"
              style={styles.subHeading}
            >
              Update Mobile Number
            </Text>
          </TouchableOpacity>
          <View style={styles.hr}/>
          <TouchableOpacity style={styles.touchableItem}>
            <Text
              type="semiBold"
              style={styles.subHeading}
            >
              Change Password
            </Text>
          </TouchableOpacity>
          <View style={styles.hr}/>
          <TouchableOpacity style={styles.touchableItem}>
            <Text
              type="semiBold"
              style={{...styles.subHeading, color: theme.colors.red}}
            >
              Delete Account
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}