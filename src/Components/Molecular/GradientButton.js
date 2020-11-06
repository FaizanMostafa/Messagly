import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  CustomText
} from "../Atomic";
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default function GradientButton({children, onBtnPressHandler, ...props}) {
  return (
    <TouchableWithoutFeedback
      onPress={()=>alert("Hello")}
    >
      <LinearGradient
        useAngle={true}
        angle={136}
        angleCenter={{ x: 0.5, y: 0.5 }}
        locations={[0, 1]}
        colors={['#6a60ee', '#56edff']}
        style={styles.linearGradient}
      >
        <CustomText styles={{
          fontWeight: "semi-bold",
          color: "white",
          fontSize: hp(4)
        }}>
          {children}
        </CustomText>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp(2),
    borderRadius: 2
  }
});