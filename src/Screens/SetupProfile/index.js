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

export default function SetupProfile({navigation , ...props}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <View style={styles.container}>
        <InfoHeader
          infoText={"Welcome to Messagly!"}
        />
        <View>
          <Input
            label="New Password"
            placeholder="***************"
            inputStyle={styles.input}
            fontWeight="semiBold"
            keyboardType="default"
            secureTextEntry
          />
          <Input
            label="Confirm Password"
            placeholder="***************"
            inputStyle={styles.input}
            containerStyle={{marginTop: hp(5)}}
            fontWeight="semiBold"
            keyboardType="default"
            secureTextEntry
          />
        </View>
        <View>
          <GradientButton
            onBtnPressHandler={()=>{}}
            elevation={10}
          >
            Get Started
          </GradientButton>
        </View>
      </View>
    </SafeAreaView>
  );
}