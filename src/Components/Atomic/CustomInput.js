import React from 'react';
import {
  TextInput
} from 'react-native';
import {getFontFamily} from "../../Helpers";

export default function CustomInput({ styles, name, value, onChangeText, ...props }) {

  const {fontWight, ...rStyles} = styles;
  const customStyles = {
    fontFamily: getFontFamily(fontWight),
    ...rStyles
  }

  return (
    <TextInput
      {...props}
      style={customStyles}
      onChangeText={text => onChangeText(name, text)}
      value={value}
    />
  );
}