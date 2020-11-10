import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';
import {
  GradientButton,
  InfoHeader,
  Input
} from "../../Components/Molecular";
import { theme } from "../../Constants";
import styles from "./styles";

export default function ForgetPassword({navigation, ...props}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <View style={styles.container}>
        <InfoHeader
          infoText={"Reset Password!\nPlease enter your mobile number."}
        />
        <View>
          <Input
            label="Mobile Number"
            placeholder="+91 944 584 63 53"
            inputStyle={styles.input}
            fontWeight="semiBold"
            keyboardType="phone-pad"
          />
        </View>
        <View>
          <GradientButton
            onBtnPressHandler={()=>navigation.navigate("Login")}
            elevation={10}
          >
            Reset
          </GradientButton>
        </View>
      </View>
    </SafeAreaView>
  );
}