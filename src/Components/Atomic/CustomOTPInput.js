import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { theme } from '../../Constants';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function CustomOTPInput({pinCount, ...props}) {
  return (
    <OTPInputView
      pinCount={pinCount}
      style={styles.otpContainer}
      codeInputFieldStyle={styles.codeInputFieldStyle}
      codeInputHighlightStyle={styles.codeInputHighlightStyle}
    />
  );
}

const styles = {
  otpContainer: {
    width: wp(60), height: 100
  },
  codeInputFieldStyle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: wp(3.5),
    color: theme.colors.black,
    borderColor: theme.colors.white,
    borderBottomColor: theme.colors.lightGray,
    borderBottomWidth: 0.5,
    paddingBottom: wp(1.5),
  },
  codeInputHighlightStyle: {
    borderBottomColor: theme.colors.primary
  }
};