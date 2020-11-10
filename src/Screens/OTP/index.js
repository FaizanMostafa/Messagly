import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Text,
  OTPInput
} from "../../Components/Atomic";
import {
  GradientButton,
  InfoHeader
} from "../../Components/Molecular";
import { theme } from "../../Constants";
import styles from "./styles";

export default function Login({navigation, ...props}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <View style={styles.container}>
        <InfoHeader
          infoText={"Please enter the OTP received."}
        />
        <View style={styles.otpContainer}>
          <OTPInput pinCount={4} />
        </View>
        <View>
          <GradientButton
            onBtnPressHandler={()=>navigation.navigate("SetupProfile")}
            elevation={10}
          >
            Verify
          </GradientButton>
          <View style={styles.signupInfoContainer}>
            <Text type="semiBold" style={styles.noAccount}>Did not receive code? </Text>
            <TouchableOpacity onPress={()=>{}}>
              <Text type="semiBold" style={styles.signupHere}>Resend OTP.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}