import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import {
  GradientButton,
  InfoHeader,
  Input
} from "../../Components/Molecular";
import { theme } from "../../Constants";
import styles from "./styles";

export default function Signup({navigation , ...props}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <View style={styles.container}>
        <InfoHeader
          infoText={"Join us today!\nPlease provide your basic info."}
        />
        <View>
          <Input
            label="Your Name"
            placeholder="Kit Harrington"
            inputStyle={styles.input}
            fontWeight="semiBold"
            keyboardType="default"
          />
          <Input
            label="Mobile Number"
            placeholder="+91 944 584 63 53"
            inputStyle={styles.input}
            containerStyle={{marginTop: hp(5)}}
            fontWeight="semiBold"
            keyboardType="phone-pad"
          />
        </View>
        <View>
          <GradientButton
            onBtnPressHandler={()=>navigation.navigate("OTP")}
            elevation={10}
          >
            Send OTP
          </GradientButton>
        </View>
      </View>
    </SafeAreaView>
  );
}