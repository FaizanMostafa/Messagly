import React from 'react';
import {
  View,
  TextInput
} from 'react-native';
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { Text } from "../Atomic";
import {getFontFamily} from "../../Helpers";
import { theme } from '../../Constants';

export default function CustomInput({ fontWeight, containerStyle, inputStyle, labelStyle, label, name, value, onChangeText, ...props }) {

  const customStyles = {
    fontFamily: getFontFamily(fontWeight),
    ...inputStyle
  }

  return (
    <View style={containerStyle}>
      <Text
        type="semiBold"
        style={{
          color: theme.colors.lightGray,
          fontSize: wp(3.5),
          ...labelStyle
        }}
      >
        {label}
      </Text>
      <TextInput
        {...props}
        style={customStyles}
        // onChangeText={text => onChangeText(name, text)}
        // value={value}
      />
    </View>
  );
}