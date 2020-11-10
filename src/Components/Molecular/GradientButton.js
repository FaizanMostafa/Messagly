import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { Text } from "../Atomic";
import { theme } from "../../Constants";

export default function GradientButton({children, elevation, onBtnPressHandler, ...props}) {
  return (
    <TouchableWithoutFeedback
      onPress={onBtnPressHandler}
    >
      <LinearGradient
        useAngle={true}
        angle={136}
        angleCenter={{ x: 0.5, y: 0.5 }}
        locations={[0, 1]}
        elevation={elevation}
        colors={[theme.colors.primary, theme.colors.secondary]}
        style={styles.linearGradient}
      >
        <Text 
          type="semiBold"
          style={{
            color: theme.colors.white,
            fontSize: wp(5)
          }}
        >
          {children}
        </Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  linearGradient: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp(2),
    borderRadius: 2
  }
});